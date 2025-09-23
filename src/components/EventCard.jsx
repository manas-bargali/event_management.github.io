import React from "react";

const EventCard = ({ title, date, venue }) => {
  return (
    <div className="bg-white w-[200px] p-7 border-none rounded-lg shadow-md hover:shadow-xl hover:shadow-gray-300 transition">
  <h3 className="text-xl font-bold text-gray-800">{title}</h3>
  <p className="text-sm text-gray-600 mt-1">📅 {date}</p>
  <p className="text-sm text-gray-600">📍 {venue}</p>
</div>

  );
};

export default EventCard;
