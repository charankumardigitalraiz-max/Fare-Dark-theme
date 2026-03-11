import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page section-padding">
            <div className="container">
                <header className="legal-header text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="modern-badge mb-6"
                    >
                        Legal Transparency
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="luxury-title text-6xl "
                    >
                        Privacy <span className="gold-text">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted max-w-2xl mx-auto text-lg"
                    >
                        Learn how FARE REALITY protects and manages your elite training data with 100% transparency.
                    </motion.p>
                </header>

                <div className="legal-content glass-effect">
                    <section className="legal-section">
                        <div className="section-number">01</div>
                        <h2 className="section-title">Information We Collect</h2>
                        <p className="legal-text">
                            We collect information that you provide directly to us when you enroll in our modules,
                            create an account, or contact us for inquiries. This includes:
                        </p>
                        <ul className="legal-list">
                            <li>Name, email address, and phone number</li>
                            <li>Professional background and real estate experience</li>
                            <li>Payment information (processed securely through third-party gateways)</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <div className="section-number">02</div>
                        <h2 className="section-title">How We Use Information</h2>
                        <p className="legal-text">
                            Your data is used to provide the premium training experience we promise. Specifically:
                        </p>
                        <ul className="legal-list">
                            <li>Managing your course enrollments and progress</li>
                            <li>Communicating updates, mentoring sessions, and elite networking events</li>
                            <li>Improving our curriculum based on aggregated feedback</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <div className="section-number">03</div>
                        <h2 className="section-title">Data Protection</h2>
                        <p className="legal-text">
                            We implement industry-standard security measures to maintain the safety of your personal
                            information. Your data is strictly guarded and only used by authorized
                            personnel.
                        </p>
                    </section>

                    <section className="legal-section">
                        <div className="section-number">04</div>
                        <h2 className="section-title">Cookies & Tracking</h2>
                        <p className="legal-text">
                            We use cookies to enhance your browsing experience and analyze site traffic. You can
                            choose to disable cookies through your browser settings, though some premium features
                            may become unavailable.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
