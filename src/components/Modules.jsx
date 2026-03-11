import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Map, Users, TrendingUp, Handshake, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Modules.css';

const modulesList = [
    { id: 1, title: 'Real Estate Fundamentals', icon: <TrendingUp size={28} /> },
    { id: 2, title: 'RERA & Legal Compliance', icon: <ShieldCheck size={28} /> },
    { id: 3, title: 'Property Management', icon: <BookOpen size={28} /> },
    { id: 4, title: 'Real Estate Marketing', icon: <Users size={28} /> },
    { id: 5, title: 'Investment Strategies', icon: <Map size={28} /> },
    { id: 6, title: 'Property Sales Coaching', icon: <Handshake size={28} /> },
    { id: 7, title: 'Open Plots Advisory', icon: <TrendingUp size={28} /> },
    { id: 8, title: 'Real Estate Finance', icon: <BookOpen size={28} /> },
    // { id: 9, title: 'Commercial Real Estate', icon: <Handshake size={28} /> },
    // { id: 10, title: 'Lead Generation', icon: <Users size={28} /> },
    // { id: 11, title: 'Strategic Advisory', icon: <Map size={28} /> },
    // { id: 12, title: 'Negotiation Mastery', icon: <TrendingUp size={28} /> },
];

const Modules = () => {
    return (
        <section id="modules" className="modules-section">
            <div className="container">
                <div className="modules-header">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="modern-badge"
                    >
                        Success Framework
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="modules-title"
                    >
                        The <span className="modern-text-gradient">Elite</span> Roadmap
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="modules-subtitle"
                    >
                        Accelerate your career with our fast-track training system.
                        No fluff, just high-impact strategies used by the top 1%.
                    </motion.p>
                </div>

                <div className="modules-grid">
                    {modulesList.map((mod, index) => (
                        <motion.div
                            key={mod.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="modern-module-card"
                        >
                            <div className="card-bg-glow"></div>

                            <div className="module-top">
                                <span className="module-tag">Module {mod.id.toString().padStart(2, '0')}</span>
                                <div className="module-icon-wrapper">
                                    {mod.icon}
                                </div>
                            </div>

                            <div className="module-bottom">
                                <h3 className="module-title-modern">
                                    {mod.title}
                                </h3>
                                <div className="module-action">
                                    <span className="learn-more">Get Started</span>
                                    <div className="arrow-icon">→</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* 
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="modules-cta-wrapper"
                >
                    <div className="cta-content">
                        <p className="cta-text">
                            Looking for something specific? Our full syllabus covers 12+ advanced specialized modules.
                        </p>
                        <Link to="/courses" className="btn-modern-primary">
                            <span>Explore Full Academy</span>
                            <div className="btn-glow"></div>
                        </Link>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Modules;
