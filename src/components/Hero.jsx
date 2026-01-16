import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2622&auto=format&fit=crop"
                    alt="Cinematic landscape photography"
                />
                <div className="overlay"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title fade-in" style={{ animationDelay: '0.2s' }}>
                    Capturing Life’s <span className="italic">Unspoken</span> Moments
                </h1>
                <p className="hero-subtitle fade-in" style={{ animationDelay: '0.4s' }}>
                    Premium photography for those who value timeless storytelling.
                </p>
                <div className="hero-actions fade-in" style={{ animationDelay: '0.6s' }}>
                    <a href="#portfolio" className="btn-primary">View Portfolio</a>
                    <a href="#contact" className="btn-secondary">Book a Session</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
