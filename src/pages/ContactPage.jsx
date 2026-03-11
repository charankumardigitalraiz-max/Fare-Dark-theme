import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page section-padding">
            <div className="container">
                <header className="contact-header text-center mb-10" >
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="modern-badge mb-6"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="luxury-title text-6xl mb-6"
                    >
                        Ready to <span className="gold-text">Launch</span> Your Career?
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-text-muted max-w-2xl mx-auto text-lg"
                    >
                        Have questions about our modules? Want to visit our offline campus? 
                        Our team of experts is here to guide you.
                    </motion.p>
                </header>

                <div className="contact-grid">
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <div className="contact-card glass-effect mb-8">
                            <h3 className="card-title mb-8">Contact Information</h3>
                            
                            <div className="info-item">
                                <div className="info-icon-box">
                                    <Phone size={20} />
                                </div>
                                <div className="info-text">
                                    <span>Call Us Directly</span>
                                    <p>+91 99887 76655</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon-box">
                                    <Mail size={20} />
                                </div>
                                <div className="info-text">
                                    <span>Email Support</span>
                                    <p>admissions@farereality.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon-box">
                                    <MapPin size={20} />
                                </div>
                                <div className="info-text">
                                    <span>Offline Campus</span>
                                    <p>Elite Business Hub, 4th Floor, HITEC City, Hyderabad, 500081</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-connect glass-effect">
                            <h4 className="mb-6">Connect with us</h4>
                            <div className="social-links">
                                <a href="#" className="social-link"><Instagram size={24} /></a>
                                <a href="#" className="social-link"><Linkedin size={24} /></a>
                                <a href="#" className="social-link"><Twitter size={24} /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-form-wrapper glass-effect"
                    >
                        <h3 className="card-title mb-8">Send us a Message</h3>
                        <form className="modern-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 00000 00000" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Select Program</label>
                                <select>
                                    <option>Foundation & Ecosystem</option>
                                    <option>Sales Psychology</option>
                                    <option>Specialized Advisory</option>
                                    <option>Complete Syllabus</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Tell us about your career goals..." rows="4"></textarea>
                            </div>

                            <button type="submit" className="btn-gold w-full flex items-center justify-center gap-3">
                                <Send size={18} /> Send Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
