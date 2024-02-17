import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import images from "../images.json";
import { Button } from "@material-tailwind/react";
import roomData from "../roomData.json";

const Categories = () => {
  const categoryData = images.rooms.reduce((accumulator, room) => {
    const existingCategory = accumulator.find(
      (category) => category.name === room.category
    );

    const roomImages =
      roomData.categories.find((category) => category.name === room.category)
        ?.images || [];

    if (existingCategory) {
      existingCategory.inventory += 1;
      existingCategory.gallery =
        roomImages.length > 0 ? roomImages : existingCategory.gallery;
    } else {
      accumulator.push({
        name: room.category,
        inventory: 1,
        price: room.rack_rate_seasonal,
        b2b: room.b2b_seasonal,
        image: room.imagePath,
        amenities: room.amenities || [],
        gallery: roomImages.length > 0 ? roomImages : [],
      });
    }

    return accumulator;
  }, []);

  // Sort categoryData in descending order based on b2b
  const sortedCategoryData = categoryData.sort((a, b) => b.b2b - a.b2b);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-purple-50">
      <Header />
      <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-[5%]">
        {sortedCategoryData.map((category) => (
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
                <p className="font-semibold py-3 text-black">
                  Price: Rs. {category.price.toFixed(2)}
                </p>
                <p className="text-gray-500">Inventory: {category.inventory}</p>
                <p className="text-gray-500">
                  {/* B2B Price: Rs. {category.b2b.toFixed(2)} */}
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
          {" "}
          <br />
          TYPE: CURRENT ACCNT-GENERAL
          <br /> BRANCH : MUNNAR <br /> A/C NAME :- M/S. PARAKKAT NATURE HOTEL
          AND RESORTS <br /> A/C NO :- 0717073000000242 <br /> IFSC :-
          SIBL0000717
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
               <br /> 1.⁠ ⁠Cancellation Period: Guests must notify the
              reservation team of any cancellation at least 07 days prior to the
              scheduled arrival date to receive a full refund.
              <br />
              2.⁠ ⁠Cancellation Fee: <br />
              <ol className="pl-[2%]">
                <li>⁠1) Before 72 hours of arrival date - 20% deduction </li>
                <li>
                  2) Before 24 hours and within 72 hours of arrival date - 50%
                  deduction{" "}
                </li>
                <li>3) Within 24 hours of arrival date - 100% deduction </li>
              </ol>
             
              3. Refund amount after cancellation fees will be issued within 07
              working days after providing necessary Bank details.
              <br />
              
              4.⁠ ⁠*No-Show:* Failure to arrive at the resort without prior
              notification will result in a charge equivalent to the total
              reservation amount.
              <br />
              5.⁠ ⁠*Early Departure:* Guests who choose to depart earlier than
              the reserved departure date will be charged for the full
              reservation period. -Last minute postponing also not acceptable
              and the full amount will be held as cancellation fee. -Once a
              booking is postponed, no refund will be issued irrespective of the
              new arrival date.
              <br />
              6.⁠ ⁠*Exceptions:* In case of unforeseen circumstances such as
              natural disasters or government-mandated travel restrictions, the
              cancellation policy may be waived or adjusted at the discretion of
              the resort management.
          
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
                    <b> Evening 3-6 PM</b> ){" "}
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
