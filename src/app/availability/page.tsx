import React from 'react';
import BookButton from '@/app/ui/BookButton';

const initialRooms = [
  { id: 1, name: 'Conference Room', capacity: 50 },
  { id: 2, name: 'Meeting Room', capacity: 20 },
  { id: 3, name: 'Workshop Room', capacity: 30 },
  { id: 4, name: 'Seminar Room', capacity: 40 },
];

const App = () => {
  return (
    <div className="App bg-gray-900 text-white">
      <main className="p-4">
        <section id="availability" className="my-8">
          <h2 className="text-2xl font-semibold">Room Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {initialRooms.map(room => (
              <div key={room.id} className="bg-gray-800 p-4 rounded">
                <h3 className="text-xl font-bold">{room.name}</h3>
                <p>Capacity: {room.capacity}</p>
                <div className="mt-4">
                  <BookButton status={false} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
