import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Briefcase } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
    const stats = [
        { label: 'Years of Excellence', value: '10+' },
        { label: 'Successful Placements', value: '2500+' },
        { label: 'Industry Partners', value: '150+' },
        { label: 'Expert Mentors', value: '45+' }
    ];

    const values = [
        {
            icon: <Target className="value-icon" />,
            title: "Our Mission",
            description: "To bridge the gap between academic knowledge and industrial excellence through 100% practical, result-oriented real estate training."
        },
        {
            icon: <Eye className="value-icon" />,
            title: "Our Vision",
            description: "To become the global benchmark for real estate education, empowering professionals to lead with integrity and strategic mastery."
        }
    ];

    return (
        <div className="about-page">
            <section className="about-hero section-padding">
                <div className="container">
                    <div className="about-hero-grid">
                        <div className="about-hero-content">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="modern-badge mb-6"
                            >
                                Our Story
                            </motion.span>
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="luxury-title text-5xl lg:text-6xl mb-8"
                            >
                                Pioneering <span className="primary-text">Elite</span> <br />
                                Real Estate Education
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-text-muted max-w-xl text-lg mb-12"
                            >
                                Fare Reality isn't just an academy; it's a launchpad for the next generation of property moguls. 
                                We combine aggressive sales psychology with deep technical compliance to create unstoppable professionals.
                            </motion.p>
                            
                            <div className="about-stats-grid">
                                {stats.map((stat, index) => (
                                    <motion.div 
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="about-stat-card glass-effect"
                                    >
                                        <span className="about-stat-value">{stat.value}</span>
                                        <span className="about-stat-label">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div 
                            className="about-hero-image-wrapper"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <div className="about-hero-glow"></div>
                            <img 
                                src="/training-session-new.png" 
                                alt="Fare Reality Training Session" 
                                className="about-hero-img"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="values-section section-padding">
                <div className="container">
                    <div className="values-grid">
                        {values.map((item, index) => (
                            <motion.div 
                                key={item.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="value-card glass-effect"
                            >
                                <div className="value-icon-wrapper">
                                    {item.icon}
                                </div>
                                <h3 className="value-title">{item.title}</h3>
                                <p className="value-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="leadership-section section-padding">
                <div className="container text-center">
                    <h2 className="luxury-title text-4xl mb-16">The <span className="gold-text">Institutional</span> Edge</h2>
                    <div className="edge-highlight-grid">
                        <div className="highlight-item">
                            <Award size={40} className="highlight-icon" />
                            <h4>Industry Gold Standard</h4>
                            <p>Recognized by top developers as the premier training partner.</p>
                        </div>
                        <div className="highlight-item">
                            <Briefcase size={40} className="highlight-icon" />
                            <h4>100% Placement Network</h4>
                            <p>Direct access to elite roles in commercial and residential sectors.</p>
                        </div>
                        <div className="highlight-item">
                            <Users size={40} className="highlight-icon" />
                            <h4>Ecosystem Mastery</h4>
                            <p>Learn everything from RERA legalities to advanced funnel strategy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
