import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap } from 'lucide-react';
import './Edge.css';

const Edge = () => {
    return (
        <section className="edge-section section-padding">
            <div className="container">
                <div className="edge-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="edge-content"
                    >
                        <span className="modern-badge">The Institution Edge</span>
                        <h2 className="edge-title">
                            Experience the <span className="modern-text-gradient">Professional</span> Difference
                        </h2>
                        <p className="edge-description">
                            Our training ecosystem is built on real-world transaction data, institutional-grade ethics,
                            and expert mentorship covering core aspects like RERA and Property Management.
                        </p>

                        <div className="edge-features">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="modern-edge-card glass-effect"
                            >
                                <div className="edge-icon-box">
                                    <ShieldCheck size={24} />
                                </div>
                                <div className="edge-text-content">
                                    <h4 className="edge-feature-heading">Certified Instructors</h4>
                                    <p className="edge-feature-text">Learn directly from seasoned real estate industry experts.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="modern-edge-card glass-effect"
                            >
                                <div className="edge-icon-box">
                                    <Zap size={24} />
                                </div>
                                <div className="edge-text-content">
                                    <h4 className="edge-feature-heading">Elite Placement Support</h4>
                                    <p className="edge-feature-text">Direct recruitment links with top-tier developers.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="edge-visual"
                    >
                        <div className="edge-image-wrapper">
                            <img src="/training-session-new.png" alt="Training Session" className="edge-img" />
                            <div className="modern-overlay-card glass-effect">
                                <div className="overlay-glow"></div>
                                <span className="overlay-number">100%</span>
                                <span className="overlay-label">Practical Training</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Edge;
