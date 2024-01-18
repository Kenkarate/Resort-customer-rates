// Categories.js
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import images from "../images.json";
import { Button } from "@material-tailwind/react";

const Categories = () => {
  const categoryData = images.rooms.reduce((accumulator, room) => {
    const existingCategory = accumulator.find(
      (category) => category.name === room.category
    );

    if (existingCategory) {
      existingCategory.inventory += 1;
      if (room.gallery && existingCategory.gallery.length < 5) {
        const remainingSlots = 5 - existingCategory.gallery.length;
        existingCategory.gallery.push(...room.gallery.slice(0, remainingSlots));
      }
    } else {
      accumulator.push({
        name: room.category,
        inventory: 1,
        price: room.rack_rate_seasonal,
        b2b:room.b2b_seasonal,
        image: room.imagePath,
        amenities: room.amenities || [],
        gallery: room.gallery ? room.gallery.slice(0, 5) : [],
      });
    }

    return accumulator;
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-purple-50">
      <Header />
      <h2 className="text-3xl font-semibold py-5 mx-[5%]">Categories</h2>
      <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-[5%]">
        {categoryData.map((category) => (
          <div key={category.name} className="mb-8">
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md relative"
              style={{ position: "relative" }}
            >
              <Slider {...settings}>
                {category.gallery.map((image, index) => (
                  <div key={index}>
                    <img
                      className="w-full object-center"
                      src={image}
                      alt={`${category.name}-slide-${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
              <div className="p-4 pt-6 pb-1">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-500">Inventory: {category.inventory}</p>
                <p className="text-gray-500">
                  Price: Rs. {category.price.toFixed(2)}
                </p>
                <p className="text-gray-500">
                  B2B Price: Rs. {category.b2b.toFixed(2)}
                </p>
                <Link to={`/rooms/${category.name}`}>
                  <Button className="text-black my-2 p-2">View Rooms</Button>
                </Link>
              </div>
              <div className="px-5 pt-4 pb-2">
                {category.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" ">
        <p className="text-center bg-green-500 rounded font-semibold py-10 font-mono lg:text-2xl">
          Bank : AXIS BANK <br /> BRANCH : KALADY <br /> A/C NAME :- PARAKKAT
          NATURE HOTELS & RESORTS <br /> A/C NO :- 918020055264857 <br /> IFSC
          :- UTIB0003212
        </p>
      </div>
      <div className="grid lg:grid-cols-2 py-10 ">
        <div className="">
          <p className="bg-green-50 p-2 px-[5%]">
            {" "}
            <p className="font-bold">Meal Plan</p>
            ADULT MAP PLAN: 950+18% PER HEAD
            <br />
            ADULT AP PLAN : 1700 + 18% PER HEAD
            <br />
            KID MAP PLAN : 650+ 18 % PER HEAD
            <br />
            KID AP PLAN: 1300 + 18 % PER HEAD
            <br />
            <br />
            <p className="font-bold">Extra Person Charge</p>
            KID WITH EXTRA BED: 1250 PER HEAD (6-11YRS)
            <br />
            KID WITHOUT EXTRA BED: 750 PER HEAD (6-11YRS)
            <br />
            ADULT: 1250 PER HEAD (ABOVE 12YRS)
            <br /> <br />
          </p>
          <p className="bg-red-50 p-2 px-[5%]">
            {" "}
            <b>Mandatory Supplements</b> <br />
            20 % Hike applicable from 21st Dec. 2024 to 05th Jan. 2024 <br />
            CHRISTMAS Eve Dinner @ net 2500 / head applicable on 24th Dec 2024{" "}
            <br />
            CHRISTMAS Eve Dinner @ 1750 net / child applicable on 24th Dec 2024{" "}
            <br />
            NEW YEAR Gala Dinner @ 3500 net / head applicable on 31st Dec 2024{" "}
            <br />
            NEW YEAR Gala Dinner @ 2000 Net / child applicable on 31th Dec 2024{" "}
            <br /> <br />
            <p>
              <b>Cancellation policy:</b>
              <br />
              In case of cancellation, before 07 days of check in date, full
              amount will be refunded.
              <br />
              Cancellation within 3 days or before of arrival date, 20% will be
              deducted <br />
              Before 24hrs of arrival date 50% will be charged.
              <br />
              If the cancellation is made within 24 hours of Check in date, no
              refund will be issued
              <br />
              Last minute postponing also not acceptable and the full amount
              will be held as cancellation.
              <br />
              In case of postponing also, if further the booking is cancelled,
              no refund will be issued irrespective of the postponing date.
              <br />
              Refund will be processed on or before 7 working days
              <br />
            </p>
          </p>
        </div>
        <div className=" grid lg:grid-rows-2">
          <div className="grid grid-cols-2 ">
            <p className=" bg-gray-200 p-2 px-[5%]">
              <b>Honeymoon Inclusions @ 6000 Net</b> <br />
              Inclusions are: - <br />
              • Candlelight Dinner :- 2499
              <br />
              • Flower Bed Decoration :- 1999 <br />
              • ½ Kg Honeymoon Cake <br />
              • Fruit Basket <br />
              • Badam Milk <br />
            </p>

            <ul className="bg-blue-50 p-2 px-[5%]">
              <li>
                <b>Activities</b>
                <ul>
                  <li>
                    • Off road Jeep Trekking (Inside the property,
                    <b>Morning 8:30-10:30 AM, Evening 4:30-6:30 PM</b> ){" "}
                  </li>
                  <li>• Pool Usage (7 am to 7 pm)</li>
                  <li>• Rope Way</li>
                  <li>• Cave Room Visit</li>
                  <li>• Campfire (based on the climate) Till 9.30 pm only</li>
                  <li>• Kids Park</li>
                  <li>• Indoor Games</li>
                  <li>• Rope way cycling</li>
                  <li>• Rain Dance</li>
                  <li>• Breakfast with 100 spread</li>
                  <li>• GYM</li>
                  <li>• Gaming Area</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-2 px-[5%]">
            {" "}
            <br />
            <b>Booking & payment policy:</b> <br />
            • Need 50 % advance required to confirm a new booking and balance
            full payment on or before guest arrival. <br />
            • Mandatory – Please provide any valid Indian ID proof ( Aadhar
            /Voters ID / Driving License / Passport ) of all adult guest at the
            time of check in. Pan card not acceptable. <br />
            • All GIT Bookings (5 rooms and above) must be reconfirmed 30 days
            in advance with an advance payment <br />
            • For all foreign nationals, on arrival requested to provide
            original Passport with Visa. <br />
            • Full and final payments to be made three bank working days before
            the date of Tour for FIT & GIT bookings. <br />
            • Check-out time will be 11:00 AM. Check-in time will be at 02:00 PM
            Noon. <br />
            • All FIT / GIT guests should present their confirmation voucher /
            Messages at the time of check in. <br />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header";
// import images from "../images.json";

// const Categories = () => {
//   const categoryData = images.rooms.reduce((accumulator, room) => {
//     // Check if the category already exists in the accumulator
//     const existingCategory = accumulator.find(
//       (category) => category.name === room.category
//     );

//     // If the category exists, update its inventory and price
//     if (existingCategory) {
//       existingCategory.inventory += 1; // Update with your logic
//     } else {
//       // If the category doesn't exist, add a new entry
//       accumulator.push({
//         name: room.category,
//         inventory: 1, // Update with your logic
//         price: room.rack_rate_offseason, // Set the price to the rack_rate_offseason of the first room in the category
//       });
//     }

//     return accumulator;
//   }, []);

//   return (
//     <div className="">
//       <Header />
//       <h2 className="text-3xl text-center font-semibold py-5">Categories</h2>
//       <table className="table-auto mx-[5%] lg:mx-auto ">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Category Name</th>
//             <th className="border px-4 py-2">Inventory</th>
//             <th className="border px-4 py-2"> Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categoryData.map((category) => (
//             <tr key={category.name}>
//               <td className="border px-4 py-2">
//                 <Link to={`/rooms/${category.name}`}>{category.name}</Link>
//               </td>
//               <td className="border px-4 py-2">{category.inventory}</td>
//               <td className="border px-4 py-2">
//                 Rs. {category.price.toFixed(2)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
// <div className="grid lg:grid-cols-2 py-10 ">
//   <div className="">
//     <p className="bg-green-50 p-2 px-[5%]">
//       {" "}
//       <p className="font-bold">Meal Plan</p>
//       ADULT MAP PLAN: 950+18% PER HEAD
//       <br />
//       ADULT AP PLAN : 1900 + 18%PER HEAD
//       <br />
//       KID MAP PLAN : 650+ 18 % PER HEAD
//       <br />
//       KID AP PLAN: 1300 + 18 % PER HEAD
//       <br />
//       <br />
//       <p className="font-bold">Extra Person Charge</p>
//       KID WITH / WITHOUT EXTRA BED: 750 PER HEAD (6-10YRS)
//       <br />
//       ADULT: 1250 PER HEAD (ABOVE 10YRS)
//       <br /> <br />
//     </p>
//     <p className="bg-red-50 p-2 px-[5%]">
//       {" "}
//       <b>Mandatory Supplements</b> <br />
//       20 % Hike applicable from 21st Dec. 2024 to 05th Jan. 2024 <br />
//       CHRISTMAS Eve Dinner @ net 2500 / head applicable on 24th Dec 2024{" "}
//       <br />
//       CHRISTMAS Eve Dinner @ 1750 net / child applicable on 24th Dec 2024{" "}
//       <br />
//       NEW YEAR Gala Dinner @ 3500 net / head applicable on 31st Dec 2024{" "}
//       <br />
//       NEW YEAR Gala Dinner @ 2000 Net / child applicable on 31th Dec 2024{" "}
//       <br /> <br />
//       <p>
//         <b>Cancellation policy:</b>
//         <br />
//         In case of cancellation, before 07 days of check in date, full
//         amount will be refunded.
//         <br />
//         Cancellation within 3 days or before of arrival date, 20% will be
//         deducted <br />
//         Before 24hrs of arrival date 50% will be charged.
//         <br />
//         If the cancellation is made within 24 hours of Check in date, no
//         refund will be issued
//         <br />
//         Last minute postponing also not acceptable and the full amount
//         will be held as cancellation.
//         <br />
//         In case of postponing also, if further the booking is cancelled,
//         no refund will be issued irrespective of the postponing date.
//         <br />
//         Refund will be processed on or before 7 working days
//         <br />
//       </p>
//     </p>
//   </div>
//   <div className=" grid lg:grid-rows-2">
//     <div className="grid grid-cols-2 ">
//       <p className=" bg-gray-200 p-2 px-[5%]">
//         <b>Honeymoon Inclusions @ 6000 Net</b> <br />
//         Inclusions are: - <br />
//         Candlelight Dinner <br />
//         Flower Bed Decoration <br />
//         ½ Kg Honeymoon Cake <br />
//         Fruit Basket <br />
//         Badam Milk <br />
//       </p>

//       <ul className="bg-blue-50 p-2 px-[5%]">
//         <li>
//           <b>Activities</b>
//           <ul>
//             <li>• Off road Jeep Trekking (Inside the property)</li>
//             <li>• Pool Usage (7 am to 7 pm)</li>
//             <li>• Rope Way</li>
//             <li>• Cave Room Visit</li>
//             <li>• Campfire (based on the climate) Till 9.30 pm only</li>
//             <li>• Kids Park</li>
//             <li>• Indoor Games</li>
//             <li>• Rope way cycling</li>
//             <li>• Rain Dance</li>
//             <li>• Breakfast with 100 spread</li>
//             <li>• GYM</li>
//             <li>• Gaming Area</li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//     <div className="bg-yellow-50 p-2 px-[5%]">
//       {" "}
//       <br />
//       <b>Booking & payment policy:</b> <br />
//       • Need 50 % advance required to confirm a new booking and balance
//       full payment on or before guest arrival. <br />
//       • Mandatory – Please provide any valid Indian ID proof ( Aadhar
//       /Voters ID / Driving License / Passport ) of all adult guest at the
//       time of check in. Pan card not acceptable. <br />
//       • All GIT Bookings (5 rooms and above) must be reconfirmed 30 days
//       in advance with an advance payment <br />
//       • For all foreign nationals, on arrival requested to provide
//       original Passport with Visa. <br />
//       • Full and final payments to be made three bank working days before
//       the date of Tour for FIT & GIT bookings. <br />
//       • Check-out time will be 11:00 AM. Check-in time will be at 02:00 PM
//       Noon. <br />
//       • All FIT / GIT guests should present their confirmation voucher /
//       Messages at the time of check in. <br />{" "}
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Categories;
