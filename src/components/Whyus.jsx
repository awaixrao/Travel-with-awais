import React from 'react';
import { Bolt, Crown, Star } from 'lucide-react';
import { ArrowRight } from 'lucide-react'; 

const Whyus = () => {
  const destinations = [
    { 
      name: 'Guarantee', 
      description: 'We ensure that your experience is worry-free with our satisfaction guarantee. Enjoy peace of mind while exploring breathtaking landscapes.', 
      icon: <Bolt size={40} /> 
    },
    { 
      name: 'Service', 
      description: 'Our dedicated team is available 24/7 to assist you with any needs or concerns during your journey. Experience unparalleled customer service.', 
      icon: <Crown size={40} /> 
    },
    { 
      name: 'Experience', 
      description: 'Join us for unforgettable adventures led by expert guides who share their passion for nature and culture. Discover hidden gems and local secrets.', 
      icon: <Star size={40} /> 
    },
  ];
  

  const adventureCards = [
    { 
      title: 'Zipline', 
      description: 'Fly through treetops on a thrilling zipline ride.', 
      img: 'https://img.freepik.com/premium-photo/happy-people-zipline-park_1237301-63516.jpg?w=740'
    },
    { 
      title: 'Rafting', 
      description: 'Tackle exciting river rapids with your crew.', 
      img: 'https://img.freepik.com/free-photo/girl-raft_1398-1238.jpg?t=st=1727591619~exp=1727595219~hmac=89dcfd7a0ce7bcfacb052811a6ab1d4c373056f5d7a12b9574f170c9d1fd6cf9&w=360'
    },
    { 
      title: 'Camping', 
      description: 'Camp under the stars and reconnect with nature.', 
      img: 'https://img.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg?t=st=1727591727~exp=1727595327~hmac=1b89fb813b3a3e72c8d54f6c21cad4cfc92dc41a99677ee2e38e0558c08f5b09&w=740'
    },
    { 
      title: 'Hiking', 
      description: 'Trek scenic trails and enjoy stunning views.', 
      img: 'https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?t=st=1727591681~exp=1727595281~hmac=81c64dd430f20f3d33d874991f7bc9896431744406d17a5f940eb7ac480bb8fe&w=740'
    },
    { 
      title: 'Parasailing', 
      description: 'Soar high above the ocean for amazing views.', 
      img: 'https://img.freepik.com/premium-photo/parachut-with-speedboat-people-having-fun_850000-537.jpg?w=740'
    },
  ];
  
  return (
    <section
      className="relative w-full p-8 md:p-16 bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?t=st=1727589452~exp=1727593052~hmac=59088cc50671ad5e7950bc99c1cf0e1af25d65ee2acbb973701f16934f665421&w=740')" }}
    >
      {/* White overlay on the background image */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      {/* Title Section */}
      <div className="relative z-10 text-center text-white mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 italic text-black"><i>Why Us?</i></h2>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 max-w-6xl mx-auto">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-50 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 backdrop-blur-lg p-6"
          >
            {/* Centered Icon Section */}
            <div className="flex justify-center items-center text-5xl mb-4 text-black">
              {destination.icon} {/* Lucide icon */}
            </div>

            {/* Card Content */}
            <div className="text-center p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{destination.name}</h3>
              <p className="text-gray-800">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Adventure Section */}
      <div className="relative z-10 text-center text-white my-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 italic text-black"><i>Have an Adventure Today</i></h2>
      </div>

      {/* Adventure Cards Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden md:row-span-2 transition-transform transform hover:scale-105"
          style={{ backgroundImage: `url(${adventureCards[0].img})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{adventureCards[0].title}</h3>
              <p className="text-white">{adventureCards[0].description}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-white p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards for the second and third columns */}
        {adventureCards.slice(1).map((card, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-white">{card.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button className="text-white p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="relative py-10 mt-16 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?t=st=1727589452~exp=1727593052~hmac=59088cc50671ad5e7950bc99c1cf0e1af25d65ee2acbb973701f16934f665421&w=740')" }}>
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div className="relative z-10 container mx-auto text-center text-black">
          <div className="mb-6">
            <div className="inline-block mb-2">
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.293l.586-.586a1 1 0 111.414 1.414l-.586.586H15a1 1 0 110 2h-1.293l.586.586a1 1 0 01-1.414 1.414l-.586-.586V10a1 1 0 11-2 0V9.293l-.586.586a1 1 0 11-1.414-1.414l.586-.586H5a1 1 0 110-2h1.293l-.586-.586a1 1 0 011.414-1.414l.586.586V3a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h5 className="font-bold text-lg text-black">Travel with Awais</h5>
          </div>

          <p className="text-black mb-4">Providing top-notch experiences across the globe. Join us today for unforgettable memories!</p>

          <div className="text-black">
            <p>&copy; 2024 Star Travels. All Rights Reserved.</p>
            <p>Terms & Conditions | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Whyus;
