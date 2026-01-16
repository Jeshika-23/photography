import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section" id="contact">
            {/* CTA Section */}
            <div className="footer-cta">
                <div className="container text-center">
                    <h2 className="cta-title">Because They Grow <br /><span className="italic">Too Fast</span></h2>
                    <div className="cta-actions">
                        <a href="mailto:hello@cuddlesncaptures.com" className="btn-primary">Book Your Session</a>
                        <a href="https://instagram.com" className="btn-secondary-dark">Follow on Instagram</a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h3>cuddlesncapture</h3>
                            <p>Capturing the magic of childhood, one click at a time.</p>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <a href="mailto:hello@cuddlesncapture.com" className="footer-link"><Mail size={16} /> hello@cuddlesncapture.com</a>
                            <a href="tel:+918110969489" className="footer-link"><Phone size={16} /> +91 8110969489</a>
                        </div>

                        <div className="footer-col">
                            <h4>Social</h4>
                            <a href="#" className="footer-link"><Instagram size={16} /> Instagram</a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} cuddlesncapture Photography. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
