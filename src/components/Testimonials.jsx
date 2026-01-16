import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        text: "Alex has an incredible eye for detail. The photos from our wedding were absolutely breathtaking. He captured moments we didn't even know happened.",
        author: "Sarah & James",
        role: "Wedding Client"
    },
    {
        id: 2,
        text: "Professional, creative, and fun to work with. The portraits for my personal brand standout and have received so many compliments.",
        author: "Elena R.",
        role: "Brand Portfolio"
    },
    {
        id: 3,
        text: "The best investment we made for our event. The atmospheric shots are exactly what we wanted. Highly recommended!",
        author: "Marcus T.",
        role: "Event Organizer"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <h4 className="section-label text-center">Kind Words</h4>
                <h2 className="section-title text-center">Client <span className="italic">Stories</span></h2>

                <div className="testimonials-grid">
                    {testimonials.map(item => (
                        <div key={item.id} className="testimonial-card">
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <span className="author-name">{item.author}</span>
                                <span className="author-role">{item.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
