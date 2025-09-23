import React from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  // Dummy data
  const events = [
    { id: 1, title: "Tech Fest 2025", date: "2025-10-05", venue: "Auditorium Hall" },
    { id: 2, title: "Cultural Night", date: "2025-10-12", venue: "Main Ground" },
    { id: 3, title: "Tech Fest 2025", date: "2025-10-05", venue: "Auditorium Hall" },
    { id: 4, title: "Cultural Night", date: "2025-10-12", venue: "Main Ground" },
    { id: 5, title: "Tech Fest 2025", date: "2025-10-05", venue: "Auditorium Hall" },
    
  ];

  return (
    <div id="upcoming-events" className="p-6 bg-gray-50 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Events</h2>

      {events.length === 0 ? (
        <p className="text-gray-500">No event scheduled yet</p>
      ) : (
        <div className="flex gap-10 flex-wrap overflow-x-auto py-2">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              venue={event.venue}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
