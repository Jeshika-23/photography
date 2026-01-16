import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        text: "Alex was so patient with our newborn. She made us feel completely at ease and safety was her top priority. The photos are pure magic.",
        author: "Emily & Mark",
        role: "Newborn Session"
    },
    {
        id: 2,
        text: "I was worried my toddler wouldn't sit still, but Alex turned it into a fun game! We have the most beautiful, natural smiles captured forever.",
        author: "Jessica T.",
        role: "Toddler Portraits"
    },
    {
        id: 3,
        text: "We cry happy tears every time we look at our family album. These aren't just photos, they are our most precious memories.",
        author: "The Parker Family",
        role: "Family Session"
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
