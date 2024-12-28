import React from 'react';
import './HappyCustomers.css';

const HappyCustomers = () => {
  const testimonials = [
    {
      name: 'Sophie, Brighton',
      feedback: "The glazed donut was simply divine—soft, sweet, and so fresh. I'll be back for more!",
    },
    {
      name: 'James, Hove',
      feedback: "The chocolate donut was a hit at my office party. Everyone loved it! Perfect balance of flavors.",
    },
    {
      name: 'Emily, Shoreham',
      feedback: "Your sprinkle donuts are my kids' favorite treat. Delicious and beautifully decorated!",
    },
  ];

  return (
    <div className="happy-customers">
      <h2>Happy Customers</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>★★★★★</p>
            <p>"{testimonial.feedback}"</p>
            <p>— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomers;
