import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import SpaceParticles from './SpaceParticles';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* The interactive constellation background spans 100vh and sits behind everything */}
            <div className="hero-particles-container">
                <SpaceParticles />

                {/* Large Floating Elements */}
                <div className="floating-elements-container">
                    <motion.img
                        src="/assets/hero/building_glass.png"
                        className="floating-element bldg"
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 5, 0],
                            opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="/assets/hero/house_glass.png"
                        className="floating-element hs"
                        animate={{
                            y: [0, 40, 0],
                            rotate: [0, -8, 0],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.img
                        src="/assets/hero/key_glass.png"
                        className="floating-element ky"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 15, 0],
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    <motion.img
                        src="/assets/hero/  "
                        className="floating-element cert"
                        animate={{
                            y: [0, 25, 0],
                            rotate: [0, -10, 0],
                            opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    />
                </div>
            </div>

            <div className="container" style={{ zIndex: 10, position: 'relative' }}>
                <div className="hero-wrapper">

                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-badge"
                    >
                        <Trophy size={14} />
                        <span>#1 RERA Certified Real Estate Academy</span>
                    </motion.div> */}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="hero-title"
                    >
                        Master the <span className="primary-text">Art</span><br />
                        of Real Estate
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="hero-description"
                    >
                        Launch your career with an elite masterclass covering Property Sales,
                        Investment Strategies, RERA Compliance, and Management.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                        className="hero-actions-row"
                    >
                        <Link to="/courses" className="btn-gold">View Curriculum</Link>

                        <div className="hero-stats-inline">
                            <div className="stat-item">
                                <span className="stat-value">500+</span>
                                <span className="stat-label">Graduates</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">22</span>
                                <span className="stat-label">Modules</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">100%</span>
                                <span className="stat-label">Offline</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
