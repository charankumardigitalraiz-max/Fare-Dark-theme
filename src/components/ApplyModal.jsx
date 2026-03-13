import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import './ApplyModal.css';

const ApplyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Application submitted successfully!');
        onClose();
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <motion.div
                        className="modal-container"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <div className="modal-sidebar">
                            <div className="sidebar-content">
                                <div className="brand-badge">Apply Now</div>
                                <h2>Build Your Future with <span className="highlight">Fair</span></h2>
                                <p>Join the next generation of real estate professionals. Expert mentoring, real-world projects, and certified growth.</p>
                                <div className="sidebar-features">
                                    <div className="s-feature"><span>✓</span> Expert Mentoring</div>
                                    <div className="s-feature"><span>✓</span> Real Projects</div>
                                    <div className="s-feature"><span>✓</span> Certification</div>
                                </div>
                            </div>
                            <div className="sidebar-glow"></div>
                        </div>

                        <div className="modal-main">
                            <button className="modal-close-btn" onClick={onClose}>
                                <X size={20} />
                            </button>

                            <div className="modal-body-scroll">
                                <div className="modal-form-header">
                                    <h3>Registration Form</h3>
                                    <p>Please fill out the details below.</p>
                                </div>

                                <form className="apply-form" onSubmit={handleSubmit}>
                                    <div className="form-section">
                                        <label>Personal Details</label>
                                        <div className="form-grid">
                                            <div className="form-group">
                                                <input type="text" placeholder="Full Name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" placeholder="Email Address" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <label>Contact & Interest</label>
                                        <div className="form-grid">
                                            <div className="form-group">
                                                <input type="tel" placeholder="Phone Number" required />
                                            </div>
                                            <div className="form-group">
                                                <select required defaultValue="">
                                                    <option value="" disabled>Select Module</option>
                                                    <option value="real-estate-basics">Real Estate Basics</option>
                                                    <option value="legal-documentation">Legal & Documentation</option>
                                                    <option value="sales-marketing">Sales & Marketing</option>
                                                    <option value="digital-branding">Digital & Social Branding</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <label>Additional Information</label>
                                        <div className="form-group">
                                            <textarea rows="4" placeholder="How did you hear about us? Why do you want to join?"></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn-gold modal-submit-btn">
                                        <span>Confirm Application</span>
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ApplyModal;
