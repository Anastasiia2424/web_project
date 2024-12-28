import React from 'react';

const Contacts = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4>Get in Touch</h4>
                    <p>If you have any questions or inquiries, feel free to reach out to us!</p>
                    <p><strong>Phone:</strong> <a href="tel:+380441234567">+38 (044) 123-4567</a></p>
                    <p><strong>Email:</strong> <a href="mailto:hello@ponchykco.com">hello@ponchykco.com</a></p>
                    <p><strong>Address:</strong> 123 Zhytomyrska street, Kyiv, Ukraine, 03179</p>
                </div>
                <div className="col-md-6">
                    <h4>Follow Us</h4>
                    <p>Stay connected with us on social media!</p>
                    <ul className="list-unstyled">
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                        <li><a href="#tiktok">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contacts;