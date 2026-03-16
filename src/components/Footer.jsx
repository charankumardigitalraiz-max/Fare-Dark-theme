import React from 'react';
import { Link } from 'react-router-dom';
import {
    Instagram, Linkedin, Twitter, Mail, Phone, MapPin,
    Home, User, GraduationCap, Image as ImageIcon, MessageSquare
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-text">
                                <img src='/Fare-logo.png' alt='logo' className='footer-logo-img' />
                            </span>
                        </Link>
                        <p className="footer-bio">
                            Elevating real estate professionals through elite, practical training and a high-performance network.
                        </p>
                        <div className="social-row">
                            <a href="#" className="social-token"><Instagram size={20} /></a>
                            <a href="#" className="social-token"><Linkedin size={20} /></a>
                            <a href="#" className="social-token"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Quick Navigation</h4>
                        <ul className="footer-nav">
                            <li>
                                <Link to="/">
                                    <Home size={18} className="nav-icon" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <User size={18} className="nav-icon" /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses">
                                    <GraduationCap size={18} className="nav-icon" /> Courses
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery">
                                    <ImageIcon size={18} className="nav-icon" /> Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <MessageSquare size={18} className="nav-icon" /> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Contact Elite</h4>
                        <ul className="footer-contact-info">
                            <li>
                                <Phone size={16} className="gold-text" />
                                <span>+91 99887 76655</span>
                            </li>
                            <li>
                                <Mail size={16} className="gold-text" />
                                <span>admissions@farereality.com</span>
                            </li>
                            <li>
                                <MapPin size={16} className="gold-text" />
                                <span>Elite Business Hub, HITEC City, Hyd.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <p className="footer-copyright">
                        © 2026 FAIRE REALITY. All rights reserved.
                    </p>
                    <div className="legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-conditions">Terms of Service</Link>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
