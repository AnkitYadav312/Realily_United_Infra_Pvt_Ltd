// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { BiBed, BiBath, BiArea } from "react-icons/bi";
// import { housesData } from "../data";
// import { Link } from "react-router-dom";

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "Hello, I am interested in [Modern apartment]",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const house = housesData.find((house) => house.id === parseInt(id));

//   const generateMailtoLink = () => {
//     const subject = `Property Inquiry - ${house.name}`;
//     const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
//     return `mailto:rishikeshdharme1097@gmail.com?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;
//   };

//   return (
//     <section>
//       <div className="container mx-auto min-h-[800px] mb-14">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold">{house.name}</h2>
//             <h3 className="text-lg mb-4">{house.address}</h3>
//           </div>
//           <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
//             <div className="bg-green-500 text-white px-3 rounded-full">
//               {house.type}
//             </div>
//             <div className="bg-green-500 text-white px-3 rounded-full">
//               {house.country}
//             </div>
//           </div>
//           <div className="text-3xl font-semibold text-violet-600 ">
//             ${house.price}
//           </div>
//         </div>
//         <div className="flex flex-col item-start gap-8 lg:flex-row">
//           <div className="max-w-[768px]">
//             <div className="mb-8">
//               <img src={house.imageLg} alt={house.agent.name} />
//             </div>
//             <div className="flex gap-x-6 text-violet-700 mb-6 ">
//               <div className="flex gap-x-2 items-center">
//                 <BiBed className="text-2xl" />
//                 <div>{house.bedrooms}</div>
//               </div>
//               <div className="flex gap-x-2 items-center">
//                 <BiBath className="text-2xl" />
//                 <div>{house.bathrooms}</div>
//               </div>
//               <div className="flex gap-x-2 items-center">
//                 <BiArea className="text-2xl" />
//                 <div>{house.surface}</div>
//               </div>
//             </div>
//             <div>{house.description}</div>
//           </div>
//           <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 ">
//             <div className="flex items-center grap-x-4 mb-8 ">
//               <div className="w-20 h-20p-1 border border-gray-300 rounded-full">
//                 <img src={house.agent.image} alt="" />
//               </div>
//               <div>
//                 <div className="font-bold text-lg ">{house.agent.name}</div>
//                 <Link to="" className="text-violet-700 text-sn ">
//                   {" "}
//                   View Listings
//                 </Link>
//               </div>
//             </div>
//             <form className="flex flex-col gap-y-4">
//               <input
//                 className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               <input
//                 className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
//                 type="text"
//                 placeholder="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               <input
//                 className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
//                 type="text"
//                 placeholder="Phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               <textarea
//                 className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
//                 placeholder="Message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//               <div className="flex gap-x-2">
//                 <a
//                   href={generateMailtoLink()}
//                   className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
//                 >
//                   Send Email
//                 </a>
//                 <button className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition">
//                   <a href="tel:+918225057312">Call Us</a>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PropertyDetails;







import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { housesData } from "../data";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Hello, I am interested in [Modern apartment]",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const house = housesData.find((house) => house.id === parseInt(id));

  const generateMailtoLink = () => {
    const subject = `Property Inquiry - ${house.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    return `mailto:rishikeshdharme1097@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600 ">
            ${house.price}
          </div>
        </div>
        <div className="flex flex-col item-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <Carousel showArrows={true} showThumbs={false}>
                {house.imageLg.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`${house.name} Image`} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6 ">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 ">
            <div className="flex items-center grap-x-4 mb-8 ">
              <div className="w-20 h-20p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg ">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sn ">
                  {" "}
                  View Listings
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="flex gap-x-2">
                <a
                  href={generateMailtoLink()}
                  className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
                >
                  Send Email
                </a>
                <button className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition">
                  <a href="tel:+918225057312">Call Us</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;