import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <img
                    src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2670&auto=format&fit=crop"
                    alt="Mother holding newborn baby"
                />
                <div className="overlay"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title fade-in" style={{ animationDelay: '0.2s' }}>
                    Capturing Little Moments, <br />Creating <span className="italic">Lifelong</span> Memories
                </h1>
                <p className="hero-subtitle fade-in" style={{ animationDelay: '0.4s' }}>
                    Timeless newborn and family photography, handled with love and patience.
                </p>
                <div className="hero-actions fade-in" style={{ animationDelay: '0.6s' }}>
                    <a href="#portfolio" className="btn-primary">View Gallery</a>
                    <a href="#contact" className="btn-secondary">Book a Baby Shoot</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
