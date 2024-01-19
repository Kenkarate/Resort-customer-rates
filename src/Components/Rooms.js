// Rooms.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

const Rooms = ({ rooms }) => {
  const { category } = useParams();

  // Filter rooms based on the selected category
  const filteredRooms = category
    ? rooms.filter(
        (room) => room.category === category
      )
    : rooms;

  return (
    <div>
      <Header />
      <Breadcrumbs />
      {category && (
        <h2 className="text-2xl font-semibold px-[5%] lg:px-0 lg:m-5">
          {category} Rooms
        </h2>
      )}
      <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {filteredRooms.map((room) => (
          <div key={room.id} className="p-5">
            <Link to={`/product/${room.id}`}>
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={room.imagePath} alt={room.name} />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">
                    <h3>{room.name}</h3>
                  </div>
                  <p class="text-gray-700 text-base">
                    {room.description || "No description available."}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  {room.amenities && room.amenities.length > 0 && (
                    <div className="flex flex-wrap">
                      {room.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
            {/* Add other details such as price, amenities, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
