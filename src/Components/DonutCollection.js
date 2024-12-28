import React from 'react';
import './DonutCollection.css';

const DonutCollection = () => {
  const donuts = [
    { name: 'Glazed Donut', price: '£3.00', img: 'https://images.unsplash.com/photo-1654648662300-82daeea37b8b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Chocolate Donut', price: '£3.50', img: 'https://images.unsplash.com/photo-1654648662300-82daeea37b8b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Sprinkle Donut', price: '£4.00', img: 'https://images.unsplash.com/photo-1654648662300-82daeea37b8b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Strawberry Donut', price: '£4.00', img: 'https://images.unsplash.com/photo-1654648662300-82daeea37b8b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Caramel Donut', price: '£4.50', img: 'https://images.unsplash.com/photo-1654648662300-82daeea37b8b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="donut-collection">
      <h2>Donut Collection</h2>
      <div className="donuts">
        {donuts.map((donut, index) => (
          <div className="donut-card" key={index}>
            <img src={donut.img} alt={donut.name} />
            <h3>{donut.name}</h3>
            <p>{donut.price}</p>
          </div>
        ))}
      </div>
      <a href="/more-donuts" className="see-more">See More Donuts →</a>
    </div>
  );
};

export default DonutCollection;
