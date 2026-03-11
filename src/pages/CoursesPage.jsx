import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { modulesList } from '../data/coursesData.jsx';
import './CoursesPage.css';

const CoursesPage = () => {
    return (
        <div className="courses-page section-padding">
            <div className="container">
                <header className="courses-hero">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-subtitle"
                    >
                        Offline Career Launch Program
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="luxury-title text-6xl mb-8"
                    >
                        Explore <span className="primary-text">Professional</span> Curriculum
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-text-muted max-w-3xl mx-auto text-lg mb-12"
                    >
                        Our intensive offline training program covers 8 specialized modules
                        designed to take you from fundamentals to closing high-value deals.
                    </motion.p>
                </header>

                <div className="course-all-grid">
                    {modulesList.map((mod, index) => (
                        <motion.div
                            key={mod.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06, duration: 0.5 }}
                            style={{ display: 'flex' }}
                        >
                            <div className="course-list-card" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%' }}>
                                <div className="clc-header">
                                    <div className="clc-icon-wrap">{mod.icon}</div>
                                    <div className="clc-meta">
                                        <span className="clc-module-tag">Module {mod.id.toString().padStart(2, '0')}</span>
                                        <span className="clc-level-tag">{mod.level}</span>
                                    </div>
                                </div>

                                <h3 className="clc-title">{mod.title}</h3>
                                <p className="clc-tagline">{mod.tagline}</p>

                                <div className="clc-info-row">
                                    <div className="clc-info-item">
                                        <Clock size={14} />
                                        <span>{mod.duration}</span>
                                    </div>
                                    <div className="clc-info-item">
                                        <Users size={14} />
                                        <span>{mod.eligibility}</span>
                                    </div>
                                </div>

                                <ul className="clc-highlights">
                                    {mod.highlights.slice(0, 3).map((h, i) => (
                                        <li key={i} className="clc-highlight-item">
                                            <CheckCircle size={13} />
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to={`/course/${mod.id}`} className="clc-cta">
                                    <span>Explore Module</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <section className="syllabus-cta-section">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="syllabus-cta-modern"
                    >
                        <div className="cta-glow"></div>
                        <h2 className="cta-title">Ready to <span className="gold-text">Start Your Journey?</span></h2>
                        <p className="cta-description">
                            Our complete curriculum covers all 8 modules with hands-on training, site visits,
                            and 100% Placement Support to launch your real estate career with confidence.
                        </p>
                        <div className="cta-action-row">
                            <Link to="/contact" className="btn-gold">Enroll Now</Link>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default CoursesPage;
