import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2535&auto=format&fit=crop"
                            alt="Photographer Portrait"
                        />
                    </div>
                    <div className="about-content">
                        <h4 className="section-label">About Me</h4>
                        <h2 className="section-title">Visual Storyteller & <br /> <span className="italic">Memory Keeper</span></h2>
                        <p className="about-text">
                            I believe that photography is more than just clicking a button—it’s about freezing time.
                            With over 10 years of experience behind the lens, I specialize in capturing raw, authentic emotions
                            that tell your unique story.
                        </p>
                        <p className="about-text">
                            My style is minimal, cinematic, and deeply personal. Whether it's a grand wedding or an
                            intimate portrait session, I strive to create art that you will cherish forever.
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
