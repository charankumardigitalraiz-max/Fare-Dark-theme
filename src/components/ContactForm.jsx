import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = ({ 
    title = <>Drop us a <span className="gold-text">Line</span></>, 
    description = "Start your journey into elite real estate today.",
    centered = true 
}) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`contact-form-wrapper glass-effect ${centered ? 'text-center' : ''}`}
        >
            {title && <h2 className="luxury-title text-4xl mb-4">{title}</h2>}
            {description && <p className="text-text-muted mb-8">{description}</p>}
            <form className={`modern-form ${centered ? 'centered-form' : ''}`}>
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
    );
};

export default ContactForm;
