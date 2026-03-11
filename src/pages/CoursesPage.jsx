import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import './CoursesPage.css';

const courseCategories = [
    {
        name: "Foundation & Ecosystem",
        modules: [
            {
                id: 1,
                title: "Industry Fundamentals",
                duration: "3 Days",
                eligibility: "Any Graduate / Freshers",
                learnings: "Asset classes, Residential vs Commercial, Market models.",
                icon: <BookOpen size={20} />
            },
            {
                id: 2,
                title: "Ecosystem & Legal Basics",
                duration: "4 Days",
                eligibility: "Any Graduate",
                learnings: "RERA, OC/CC, Sale Deeds, Banking roles.",
                icon: <CheckCircle size={20} />
            },
            {
                id: 3,
                title: "Property & Product Mastery",
                duration: "5 Days",
                eligibility: "Interest in Sales",
                learnings: "UDS, Built-up area concepts, Master plans.",
                icon: <BookOpen size={20} />
            }
        ]
    },
    {
        name: "Sales Psychology & Strategy",
        modules: [
            {
                id: 4,
                title: "Buyer Psychology",
                duration: "3 Days",
                eligibility: "Basic Communication Skills",
                learnings: "End users vs Investors, Lifestyle vs Appreciation mindset.",
                icon: <Users size={20} />
            },
            {
                id: 5,
                title: "Buying Journey & Funnel",
                duration: "4 Days",
                eligibility: "Open to Learning",
                learnings: "Lead → Closure flow, Funnel drop-offs management.",
                icon: <ArrowRight size={20} />
            },
            {
                id: 6,
                title: "Lead Handling & Qualification",
                duration: "3 Days",
                eligibility: "High Energy",
                learnings: "Discovery questioning, Budget & Timeline mapping.",
                icon: <Users size={20} />
            }
        ]
    },
    {
        name: "Specialized Advisory",
        modules: [
            {
                id: 7,
                title: "Open Plots Advisory",
                duration: "5 Days",
                eligibility: "Strategic Thinkers",
                learnings: "Land banking, HMDA/DTCP layouts, ROI analysis.",
                icon: <CheckCircle size={20} />
            },
            {
                id: 11,
                title: "Strategic Property Advisory",
                duration: "4 Days",
                eligibility: "Analytical Mind",
                learnings: "Need-to-product mapping, Filtering negotiations.",
                icon: <ArrowRight size={20} />
            }
        ]
    }
];

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
                        Our intensive offline training program is divided into specialized modules
                        designed to take you from fundamentals to closing high-value deals.
                    </motion.p>
                </header>

                {courseCategories.map((category, catIndex) => (
                    <section key={category.name} className="category-section">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="category-title"
                        >
                            {category.name}
                        </motion.h2>

                        <div className="course-detail-grid">
                            {category.modules.map((mod, modIndex) => (
                                <motion.div
                                    key={mod.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: modIndex * 0.1 }}
                                    className="course-detail-card"
                                >
                                    <div className="course-header">
                                        <span className="course-id">Module {mod.id.toString().padStart(2, '0')}</span>
                                        <div className="info-icon">{mod.icon}</div>
                                    </div>

                                    <h3 className="course-main-title">{mod.title}</h3>

                                    <ul className="course-info-list">
                                        <li className="course-info-item">
                                            <Clock size={16} className="info-icon" />
                                            <div>
                                                <span className="info-label">Duration:</span>
                                                {mod.duration}
                                            </div>
                                        </li>
                                        <li className="course-info-item">
                                            <Users size={16} className="info-icon" />
                                            <div>
                                                <span className="info-label">Eligibility:</span>
                                                {mod.eligibility}
                                            </div>
                                        </li>
                                        <li className="course-info-item">
                                            <BookOpen size={16} className="info-icon" />
                                            <div>
                                                <span className="info-label">What you'll learn:</span>
                                                {mod.learnings}
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="course-action">
                                        <button className="btn-gold w-full">Request Brochure</button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}

                <section className="syllabus-cta-section">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="syllabus-cta-modern"
                    >
                        <div className="cta-glow"></div>
                        <h2 className="cta-title">And <span className="gold-text">14 More</span> Specialized Modules...</h2>
                        <p className="cta-description">
                            Our complete curriculum goes deeper into Site Visit Conversion, Objection Handling, 
                            High-Ticket Negotiation, Transaction Execution, Personal Branding, and 100% Placement Support.
                        </p>
                        <div className="cta-action-row">
                            <button className="btn-gold">Download Full Syllabus PDF</button>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default CoursesPage;
