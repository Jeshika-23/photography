import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1544126566-47535b6c31bf?q=80&w=2670&auto=format&fit=crop"
                            alt="Baby Photographer"
                        />
                    </div>
                    <div className="about-content">
                        <h4 className="section-label">Hello There</h4>
                        <h2 className="section-title">Capturing <span className="italic">Little</span> Miracles</h2>
                        <p className="about-text">
                            Hello! I’m Alex. As a mother and a photographer, I know how fast these precious moments fly by.
                            My studio is designed to be a safe, warm haven where you and your little one can relax.
                        </p>
                        <p className="about-text">
                            With specialized training in newborn safety and posing, I handle your baby with the utmost care and patience.
                            Let’s create beautiful, timeless portraits that you’ll cherish as they grow.
                        </p>
                        <div className="signature">
                            <p>Alex Morgan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
