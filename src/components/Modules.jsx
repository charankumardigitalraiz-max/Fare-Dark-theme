import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { modulesList } from '../data/coursesData.jsx';
import './Modules.css';

const Modules = () => {
    const displayModules = modulesList.slice(0, 8);

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
                    {displayModules.map((mod, index) => (
                        <motion.div
                            key={mod.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: 'flex' }}
                        >
                            <Link to={`/course/${mod.id}`} className="modern-module-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textDecoration: 'none', flexGrow: 1, height: '100%' }}>
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
                                    <p className="module-tagline">{mod.tagline}</p>
                                    <div className="module-action">
                                        <span className="learn-more">Explore Module</span>
                                        <div className="arrow-icon">→</div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="modules-cta-wrapper"
                >
                    <div className="cta-content">
                        <p className="cta-text">
                            Explore all 8 modules in detail — from fundamentals to specialized advisory tracks.
                        </p>
                        <Link to="/courses" className="btn-modern-primary">
                            <span>View All Courses</span>
                            <div className="btn-glow"></div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Modules;
