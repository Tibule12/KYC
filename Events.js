import React from 'react';
import './Events.css';

const events = [
  'Performed at the Table Bay Hotel alongside PJ Powers',
  'Performed at the Amphitheatre in Waterfront',
  'Performed multiple times at the Mount Nelson Hotel',
  'Performed at various wine estates in Stellenbosch',
  'Performed at the airport welcoming renowned country musician Zahara',
  'Performed with Smasher, a well-known Afrikaner artist, in Waterfront',
  'Performed for the arrival of the Mayor of Cape Town in Khayelitsha Endlovini "VPUU"',
  'Performed at the CTICC in an international trade show',
  'Invited to forex teaching lessons in Cape Town CBD',
  'Collaborated with upcoming choirs in different cities:',
  ' - Zolani Youth Choir (Ashton)',
  ' - Boland Chamber (Ashton)',
  ' - Kungomuso Youth Choir (Robertson)',
  ' - Bomibethu Youth Choir (Robertson)',
  'Won various second and third place awards on one of the biggest stages in Cape Town Artscape',
  'Shared a stage with Zahara in one of her last shows in Cape Town CBD',
  'Performed at the Table Mountain Company in the sea views of Cape Point, biggest property',
];

const Events = () => {
  return (
    <section className="events">
      <h2>Events & Performances</h2>
      <p>Here are some of the notable events and performances of the Khayelitsha Youth Choir:</p>
      <ul className="events-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">{event}</li>
        ))}
      </ul>
    </section>
  );
};

export default Events;
