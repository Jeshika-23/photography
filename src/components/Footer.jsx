import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section" id="contact">
            {/* CTA Section */}
            <div className="footer-cta">
                <div className="container text-center">
                    <h2 className="cta-title">Let’s Creating Something <br /><span className="italic">Unforgettable</span> Together</h2>
                    <div className="cta-actions">
                        <a href="mailto:hello@example.com" className="btn-primary">Get in Touch</a>
                        <a href="https://instagram.com" className="btn-secondary">Follow on Instagram</a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h3>LUMIÈRE</h3>
                            <p>Premium photography for timeless moments.</p>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <a href="mailto:info@lumiere.com" className="footer-link"><Mail size={16} /> info@lumiere.com</a>
                            <a href="tel:+918110969489" className="footer-link"><Phone size={16} /> +91 8110969489</a>
                        </div>

                        <div className="footer-col">
                            <h4>Social</h4>
                            <a href="#" className="footer-link"><Instagram size={16} /> Instagram</a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Lumière Photography. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
