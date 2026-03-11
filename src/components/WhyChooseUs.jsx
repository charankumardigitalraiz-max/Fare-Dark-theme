import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, TrendingUp } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <GraduationCap size={32} />,
            title: "Practical-First Approach",
            description: "No boring theory. We focus on real site visits, lead conversions, and aggressive sales tactics used by the top 1%."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Guaranteed Placement",
            description: "Benefit from our direct recruitment links with India's most prestigious developers and real estate agencies."
        },
        {
            icon: <Users size={32} />,
            title: "Industry Mentorship",
            description: "Learn directly from veterans who have closed multi-crore deals and built empires in Hyderabad's market."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "High-Ticket Mastery",
            description: "Get trained in the delicate art of luxury real estate sales, objection handling, and emotional negotiation."
        }
    ];

    return (
        <section className="why-choose-section section-padding">
            <div className="container">
                <div className="why-header text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="modern-badge mb-6"
                    >
                        The Fare Advantage
                    </motion.span>
                    <h2 className="luxury-title text-5xl">Why <span className="gold-text">Elite</span> Professionals <br />Choose Us?</h2>
                </div>

                <div className="why-grid">
                    {reasons.map((reason, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="why-card glass-effect"
                        >
                            <div className="why-icon-box">
                                {reason.icon}
                            </div>
                            <h3 className="why-card-title">{reason.title}</h3>
                            <p className="why-card-text">{reason.description}</p>
                            <div className="why-card-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
