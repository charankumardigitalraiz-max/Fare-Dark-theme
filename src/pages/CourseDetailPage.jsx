import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, Users, BookOpen, CheckCircle, ArrowLeft, ChevronRight, Star } from 'lucide-react';
import { modulesList } from '../data/coursesData.jsx';
import './CourseDetailPage.css';

const CourseDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const course = modulesList.find((m) => m.id === parseInt(id));

    if (!course) {
        return (
            <div className="course-not-found">
                <h2>Module not found</h2>
                <Link to="/courses" className="btn-gold">Back to Courses</Link>
            </div>
        );
    }

    const levelColors = {
        Beginner: '#00ffcc',
        Intermediate: '#ffb800',
        Advanced: '#ff6b6b',
    };

    const otherModules = modulesList.filter((m) => m.id !== course.id).slice(0, 3);

    return (
        <div className="course-detail-page">
            {/* Hero Banner */}
            <div className="cd-hero">
                <div className="cd-hero-bg-glow"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button className="cd-back-btn" onClick={() => navigate(-1)}>
                            <ArrowLeft size={18} />
                            <span>Back</span>
                        </button>

                        <div className="cd-hero-tags">
                            <span className="cd-module-tag">Module {course.id.toString().padStart(2, '0')}</span>
                            <span className="cd-category-tag">{course.category}</span>
                            <span className="cd-level-tag" style={{ color: levelColors[course.level], borderColor: levelColors[course.level] }}>
                                {course.level}
                            </span>
                        </div>

                        {/* <div className="cd-hero-icon">
                            {course.icon}
                        </div> */}

                        <h1 className="cd-hero-title">{course.title}</h1>
                        <p className="cd-hero-tagline">{course.tagline}</p>

                        <div className="cd-hero-stats">
                            <div className="cd-stat">
                                <Clock size={18} />
                                <div>
                                    <span className="stat-label">Duration</span>
                                    <span className="stat-value">{course.duration}</span>
                                </div>
                            </div>
                            <div className="cd-stat">
                                <Users size={18} />
                                <div>
                                    <span className="stat-label">Eligibility</span>
                                    <span className="stat-value">{course.eligibility}</span>
                                </div>
                            </div>
                            <div className="cd-stat">
                                <BookOpen size={18} />
                                <div>
                                    <span className="stat-label">Level</span>
                                    <span className="stat-value">{course.level}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container">
                <div className="cd-content-grid">

                    {/* Left Column */}
                    <div className="cd-main-col">

                        {/* Overview */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cd-section"
                        >
                            <h2 className="cd-section-title">Course Overview</h2>
                            <p className="cd-overview-text">{course.overview}</p>
                        </motion.section>

                        {/* Highlights */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cd-section"
                        >
                            <h2 className="cd-section-title">What You'll Learn</h2>
                            <ul className="cd-highlights-list">
                                {course.highlights.map((h, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}
                                        className="cd-highlight-item"
                                    >
                                        <CheckCircle size={18} className="cd-check-icon" />
                                        <span>{h}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* Syllabus / Topics */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cd-section"
                        >
                            <h2 className="cd-section-title">Course Syllabus</h2>
                            <div className="cd-syllabus-list">
                                {course.topics.map((topic, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="cd-topic-card"
                                    >
                                        <div className="cd-topic-day">{topic.week}</div>
                                        <div className="cd-topic-divider"></div>
                                        <div className="cd-topic-content">
                                            <h4 className="cd-topic-title">{topic.title}</h4>
                                            <p className="cd-topic-desc">{topic.desc}</p>
                                        </div>
                                        <div className="cd-topic-num">{String(i + 1).padStart(2, '0')}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Outcomes */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cd-section"
                        >
                            <h2 className="cd-section-title">Learning Outcomes</h2>
                            <div className="cd-outcomes-grid">
                                {course.outcomes.map((o, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="cd-outcome-card"
                                    >
                                        <Star size={16} className="cd-star" />
                                        <p>{o}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Sidebar */}
                    <div className="cd-sidebar-col">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="cd-enroll-card"
                        >
                            <div className="cd-enroll-glow"></div>
                            <h3 className="cd-enroll-title">Enroll in this Module</h3>
                            <p className="cd-enroll-desc">Join our offline batch and get certified by industry experts.</p>

                            <div className="cd-enroll-details">
                                <div className="cd-enroll-row">
                                    <Clock size={16} />
                                    <span>{course.duration} Intensive</span>
                                </div>
                                <div className="cd-enroll-row">
                                    <Users size={16} />
                                    <span>Small Batch Sizes</span>
                                </div>
                                <div className="cd-enroll-row">
                                    <CheckCircle size={16} />
                                    <span>Certificate on Completion</span>
                                </div>
                                <div className="cd-enroll-row">
                                    <BookOpen size={16} />
                                    <span>Placement Support Included</span>
                                </div>
                            </div>

                            <Link to="/contact" className="btn-gold cd-enroll-btn">
                                Enroll Now
                            </Link>
                        </motion.div>

                        {/* Other Modules */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="cd-other-modules"
                        >
                            <h3 className="cd-other-title">Other Modules</h3>
                            {otherModules.map((m) => (
                                <Link key={m.id} to={`/course/${m.id}`} className="cd-other-card">
                                    <div className="cd-other-icon">{m.icon}</div>
                                    <div>
                                        <p className="cd-other-module-tag">Module {m.id.toString().padStart(2, '0')}</p>
                                        <p className="cd-other-module-title">{m.title}</p>
                                    </div>
                                    <ChevronRight size={16} className="cd-other-arrow" />
                                </Link>
                            ))}
                            <Link to="/courses" className="cd-view-all-link">
                                View All Courses →
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;
