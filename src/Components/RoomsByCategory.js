// RoomsByCategory.js
import React from "react";
import Rooms from "./Rooms";


const RoomsByCategory = ({ category, rooms }) => {
  const filteredRooms = rooms.filter((room) => room.category === category);

  return (
    <div>
      <h2 className="text-2xl font-bold my-10 ">{category} Rooms</h2>
      <div className="flex flex-wrap">
        {filteredRooms.map((room) => (
          <Rooms key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsByCategory;
