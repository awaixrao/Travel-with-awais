import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { notification } from "antd";
import axios from 'axios';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PyUtlRqf1z5C8P8sEfOhpjL034uLmjRDwsnZoWnGuf3E8HcvDUWl3yCkP8Q2LEjaGNYtcTyy925347CU4trlemJ00GLYFI11m');

const PaymentForm = ({ bookingId, onPaymentSubmit }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return; 
        }

        const cardElement = elements.getElement(CardElement);

        const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (stripeError) {
            notification.error({
                message: "Payment Failed",
                description: stripeError.message,
                placement: 'topRight',
            });
            return;
        }

        onPaymentSubmit(paymentMethod.id); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="card" className="block mb-2 font-semibold">Card Details</label>
                <CardElement id="card" className="p-2 border border-gray-300 rounded-md" />
            </div>

            <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                disabled={!stripe}
            >
                Pay Now
            </button>
        </form>
    );
};

const PaymentPage = () => {
    const { id: bookingId } = useParams(); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    const handlePaymentSubmit = async (paymentMethodId) => {
        setLoading(true);
        setError(null);

        const paymentData = {
            bookingId: bookingId,
            paymentMethodId,
            amount: 100, 
        };

        try {
            const token = localStorage.getItem('token'); 
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.post('http://localhost:3001/payment/create', paymentData, config);
            
            if (response.status === 200) {
                notification.success({
                    message: "Payment Successful",
                    description: "Your payment has been processed successfully!",
                    placement: 'topRight',
                });
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred during payment processing.";
            notification.error({
                message: "Payment Failed",
                description: errorMessage,
                placement: 'topRight',
            });
            setError(errorMessage);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <section className="w-full p-8 md:p-16 bg-gray-100">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Enter Payment Information</h2>

                <Elements stripe={stripePromise}>
                    <PaymentForm bookingId={bookingId} onPaymentSubmit={handlePaymentSubmit} />
                </Elements>

                {loading && <p>Processing payment...</p>}
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </section>
    );
};

export default PaymentPage;
