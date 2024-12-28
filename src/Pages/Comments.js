import React from 'react';

const Comments = () => {
    const comments = [
        {
            name: 'Alice',
            feedback: "Absolutely loved the donuts! They were fresh and delicious.",
        },
        {
            name: 'Bob',
            feedback: "Great service and even better donuts! Will order again.",
        },
        {
            name: 'Charlie',
            feedback: "The variety of flavors is amazing! Highly recommend.",
        },
    ];

    return (
        <div className="comments-container">
            <h2>Customer Comments</h2>
            <div className="comments-list">
                {comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <p><strong>{comment.name}</strong></p>
                        <p>"{comment.feedback}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;