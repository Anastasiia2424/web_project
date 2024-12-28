import React from 'react';

const Donuts = () => {
    return (
        <div className="container">
            <h2 className="text-center my-4">Our Delicious Donuts</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://images.unsplash.com/photo-1654648662300-82daeea37b8b?q=80&w=2080&auto=format&fit=crop" className="card-img-top" alt="Glazed Donut" />
                        <div className="card-body">
                            <h5 className="card-title">Glazed Donut</h5>
                            <p className="card-text">A classic favorite, soft and sweet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://images.unsplash.com/photo-1654648662300-82daeea37b8b?q=80&w=2080&auto=format&fit=crop" className="card-img-top" alt="Chocolate Donut" />
                        <div className="card-body">
                            <h5 className="card-title">Chocolate Donut</h5>
                            <p className="card-text">Rich chocolate flavor with a soft texture.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://images.unsplash.com/photo-1654648662300-82daeea37b8b?q=80&w=2080&auto=format&fit=crop" className="card-img-top" alt="Sprinkle Donut" />
                        <div className="card-body">
                            <h5 className="card-title">Sprinkle Donut</h5>
                            <p className="card-text">Colorful sprinkles on a fluffy donut.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donuts;