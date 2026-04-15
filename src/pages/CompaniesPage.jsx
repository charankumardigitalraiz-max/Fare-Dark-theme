import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    XCircle,
    TrendingUp,
    Target,
    Users,
    Briefcase,
    Building,
    Rocket,
    Phone,
    Map,
    MessageSquare,
    ChevronRight,
    ArrowRight,
    Zap,
    Globe,
    PieChart,
    UserCheck,
    ShieldCheck,
    Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ApplyModal from '../components/ApplyModal';
import './CompaniesPage.css';

const CompaniesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="companies-page">
            {/* 1. HERO SECTION */}
            <section className="cmp-hero">
                <div className="container">
                    <div className="cmp-hero-content">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="cmp-badge"
                        >
                            Hire Job-Ready Professionals
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="cmp-luxury-title cmp-hero-title"
                            style={{ padding: '0 20px' }}
                        >
                            Hire Job-Ready <span className="cmp-gold-text">Real Estate Professionals.</span> <br />
                            <span className="cmp-text-gradient" style={{ paddingRight: 0 }}>Not Just Freshers.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="cmp-hero-subheading"
                            style={{ color: 'rgba(255, 255, 255, 0.8)', padding: '0 20px' }}
                        >
                            FARE (Finishing Academy for Real Estate) trains and deploys sales-ready talent equipped with real-world skills in lead handling, site visits, negotiation, and closures.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="cmp-framework-tag"
                            style={{ fontSize: '1.1rem', color: 'var(--gold-accent)', marginBottom: '40px' }}
                        >
                            Powered by the <strong>FARE TOE Framework</strong> (Talk → Organize → Engage)
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="cmp-hero-hooks"
                        >
                            <div className="cmp-hook-item">
                                <CheckCircle size={18} className="cmp-gold-text" />
                                <span>Pre-trained on real estate sales lifecycle</span>
                            </div>
                            <div className="cmp-hook-item">
                                <CheckCircle size={18} className="cmp-gold-text" />
                                <span>Ready to contribute from Day 1</span>
                            </div>
                            <div className="cmp-hook-item">
                                <CheckCircle size={18} className="cmp-gold-text" />
                                <span>Reduced training time & faster conversions</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="cmp-cta-group"
                        >
                            <button onClick={() => setIsModalOpen(true)} className="btn-gold">Request Talent</button>
                            <Link to="/contact" className="" style={{ color: 'white' }}>Book a Demo / Consultation</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. TRUST + POSITIONING */}
            <section className="cmp-category-section">
                <div className="container">
                    <div className="cmp-section-head">
                        <span className="cmp-badge">Trust & Positioning</span>
                        <h2 className="cmp-category-title cmp-text-center">Built for the Real Estate Industry. <br /><span className="cmp-text-gradient" style={{ paddingRight: 0 }}>Backed by Practical Training.</span></h2>
                        <p className="cmp-section-desc cmp-max-w-3xl" style={{ marginTop: 0 }}>
                            FARE bridges the gap between hiring needs of developers & channel partners and the lack of industry-ready talent. We don’t just train candidates—we prepare them for on-ground sales execution.
                        </p>
                    </div>

                    <div className="cmp-grid-all cmp-grid-4-cols">
                        {[
                            { title: "Industry-aligned curriculum", icon: <Award size={24} /> },
                            { title: "Role-play based training", icon: <Users size={24} /> },
                            { title: "CRM & lead management exposure", icon: <Zap size={24} /> },
                            { title: "Site visit & closing simulations", icon: <Map size={24} /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="cmp-course-card cmp-glass-teal"
                            >
                                <div className="cmp-icon-wrap">{item.icon}</div>
                                <h3 className="cmp-card-title">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. THE PROBLEM */}
            <section className="cmp-category-section cmp-solid-deep cmp-problem-section">
                <div className="container">
                    <div className="cmp-section-head cmp-section-head-lg">
                        <span className="cmp-badge" style={{ borderColor: 'rgba(239, 68, 68, 0.3)', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.08)' }}>The Reality</span>
                        <h2 className="cmp-category-title cmp-text-center cmp-text-white">Hiring in Real Estate is <span style={{ color: '#ef4444', marginLeft: '8px' }}>Broken</span></h2>
                    </div>
                    <div className="cmp-info-row">
                        <div className="cmp-problem-content">
                            <ul className="cmp-problem-list">
                                {[
                                    "Freshers lack practical exposure",
                                    "High training time & cost",
                                    "Low productivity in first 60–90 days",
                                    "High attrition due to mismatch",
                                    "Inconsistent sales performance"
                                ].map((point, i) => (
                                    <li key={i} className="cmp-problem-item">
                                        <XCircle size={20} style={{ color: '#ef4444', marginTop: '4px' }} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="cmp-problem-closing">
                                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white' }}>
                                    You spend months training. <span className="cmp-gold-text">We deliver candidates who are already trained.</span>
                                </p>
                            </div>
                        </div>
                        <div className="problem-visual">
                            <div className="cmp-warning-card">
                                <div className="cmp-warning-icon"><ShieldCheck size={40} /></div>
                                <h3>Stop Hiring Risk</h3>
                                <p>Don't waste 3 months on candidates who might not close a single deal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE SOLUTION */}
            <section className="cmp-category-section">
                <div className="container">
                    <div className="cmp-section-head">
                        <span className="cmp-badge">The Solution</span>
                        <h2 className="cmp-category-title cmp-text-center">We Deliver <span className="cmp-text-gradient" style={{ paddingRight: 0 }}>Sales-Ready Talent</span></h2>
                        <p className="cmp-section-desc cmp-max-w-3xl" style={{ marginTop: 0 }}>
                            Our candidates are trained across the complete real estate sales funnel, enabling them to contribute from day one. All candidates are prepared using the FARE TOE Framework, ensuring practical readiness across every stage of sales.
                        </p>
                    </div>

                    <div className="cmp-grid-all cmp-grid-5-cols">
                        {[
                            { title: "Lead generation & qualification", icon: <Rocket size={20} /> },
                            { title: "Site visit handling", icon: <Map size={20} /> },
                            { title: "Objection handling", icon: <MessageSquare size={20} /> },
                            { title: "Negotiation & closing", icon: <TrendingUp size={20} /> },
                            { title: "Post-sale coordination", icon: <UserCheck size={20} /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="cmp-course-card"
                            >
                                <div className="cmp-icon-wrap">{item.icon}</div>
                                <h3 className="cmp-card-title">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. THE FARE TOE FRAMEWORK */}
            <section className="cmp-category-section cmp-toe-framework-section">
                <div className="container">
                    <div className="cmp-section-head">
                        <span className="cmp-badge">The Core Framework</span>
                        <h2 className="cmp-category-title cmp-text-center">The FARE TOE Framework: <br /><span className="cmp-text-gradient" style={{ paddingRight: 0 }}>How Sales Actually Happens</span></h2>
                        <p className="cmp-section-desc cmp-max-w-2xl" style={{ marginTop: 0 }}>
                            A practical model that ensures every candidate is trained in the core behaviors that drive conversions.
                        </p>
                    </div>

                    <div className="cmp-toe-grid">
                        {/* T - Talk */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="cmp-toe-card talk"
                        >
                            <div className="cmp-toe-letter">T</div>
                            <div className="cmp-toe-content">
                                <h3>Talk</h3>
                                <p className="cmp-toe-desc">Mastering Customer Conversations</p>
                                <ul className="cmp-toe-list">
                                    <li>Lead qualification & discovery</li>
                                    <li>Asking the right questions</li>
                                    <li>Understanding buyer intent</li>
                                    <li>Handling initial objections</li>
                                </ul>
                                <div className="cmp-toe-highlight">
                                    👉 Because the right conversation sets up the sale
                                </div>
                            </div>
                        </motion.div>

                        {/* O - Organize */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cmp-toe-card organize"
                        >
                            <div className="cmp-toe-letter">O</div>
                            <div className="cmp-toe-content">
                                <h3>Organize</h3>
                                <p className="cmp-toe-desc">Managing Leads, Follow-ups & Funnel</p>
                                <ul className="cmp-toe-list">
                                    <li>Lead tracking & CRM usage</li>
                                    <li>Follow-up systems & discipline</li>
                                    <li>Funnel management</li>
                                    <li>Prioritization of prospects</li>
                                </ul>
                                <div className="cmp-toe-highlight">
                                    👉 Because missed follow-ups = lost revenue
                                </div>
                            </div>
                        </motion.div>

                        {/* E - Engage */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="cmp-toe-card engage"
                        >
                            <div className="cmp-toe-letter">E</div>
                            <div className="cmp-toe-content">
                                <h3>Engage</h3>
                                <p className="cmp-toe-desc">Driving Site Visits & Conversions</p>
                                <ul className="cmp-toe-list">
                                    <li>Site visit handling</li>
                                    <li>Property presentation & pitching</li>
                                    <li>Objection handling & negotiation</li>
                                    <li>Closing techniques</li>
                                </ul>
                                <div className="cmp-toe-highlight">
                                    👉 Because engagement is where deals are won
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="cmp-text-center cmp-mt-12">
                        <p className="cmp-card-tagline cmp-toe-summary">
                            Every hire is trained to <strong>Talk</strong> effectively, <strong>Organize</strong> consistently, and <strong>Engage</strong> confidently—covering the complete sales journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. TRAINING COVERAGE */}
            <section className="cmp-category-section cmp-solid-deep cmp-training-section">
                <div className="container">
                    <div className="cmp-section-head">
                        <span className="cmp-badge">Curriculum</span>
                        <h2 className="cmp-category-title cmp-text-center cmp-text-white">What Your <span className="cmp-gold-text" style={{ paddingRight: 0 }}>Hires Already Know</span></h2>
                    </div>

                    <div className="cmp-grid-all cmp-grid-3-cols">
                        {[
                            {
                                title: "Lead Management (Talk + Organize)",
                                icon: <Phone />,
                                points: ["Inbound & outbound handling", "Qualification & follow-ups"]
                            },
                            {
                                title: "Product Understanding",
                                icon: <Building />,
                                points: ["Residential, plots, commercial basics", "Project positioning"]
                            },
                            {
                                title: "Site Visit Excellence (Engage)",
                                icon: <Map />,
                                points: ["Client handling", "Presentation skills", "Conversion techniques"]
                            },
                            {
                                title: "Sales Skills (Talk + Engage)",
                                icon: <MessageSquare />,
                                points: ["Objection handling", "Negotiation", "Closing strategies"]
                            },
                            {
                                title: "Funnel Discipline (Organize)",
                                icon: <TrendingUp />,
                                points: ["Lead tracking", "Conversion optimization"]
                            },
                            {
                                title: "Digital & WhatsApp Selling (Organize)",
                                icon: <Zap />,
                                points: ["Lead nurturing", "Follow-up systems"]
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="cmp-course-card cmp-glass-dark"
                            >
                                <div className="cmp-icon-wrap" style={{ background: 'rgba(194,157,89,0.1)', color: '#c29d59' }}>{item.icon}</div>
                                <h3 className="cmp-card-title">{item.title}</h3>
                                <ul className="cmp-highlights">
                                    {item.points.map((p, i) => (
                                        <li key={i} className="cmp-highlight-item">
                                            <CheckCircle size={14} className="cmp-gold-text" />
                                            <span className="cmp-text-white-soft">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. HIRING USE CASES */}
            <section className="cmp-category-section">
                <div className="container">
                    <div className="cmp-section-head">
                        <span className="cmp-badge">Use Cases</span>
                        <h2 className="cmp-category-title cmp-text-center">Who This <span className="cmp-text-gradient" style={{ paddingRight: 0 }}>Is For</span></h2>
                    </div>

                    <div className="cmp-grid-all cmp-grid-3-cols">
                        {[
                            {
                                title: "Developers",
                                icon: <Building size={32} />,
                                useCases: ["Sales teams for new launches", "Site sales executives", "Pre-sales support"]
                            },
                            {
                                title: "Channel Partners",
                                icon: <Users size={32} />,
                                useCases: ["Closing managers", "Relationship managers", "Field sales executives"]
                            },
                            {
                                title: "Expanding Firms",
                                icon: <Rocket size={32} />,
                                useCases: ["Scale teams quickly", "Reduce hiring risk", "Standardize performance"]
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="cmp-course-card"
                            >
                                <div className="cmp-icon-wrap cmp-usecase-icon">{item.icon}</div>
                                <h3 className="cmp-card-title cmp-title-lg">{item.title}</h3>
                                <ul className="cmp-use-case-list">
                                    {item.useCases.map((uc, i) => (
                                        <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#c29d59', flexShrink: 0 }}></div>
                                            <span>{uc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 8. HOW IT WORKS */}
            <section className="cmp-category-section cmp-bg-gray-50">
                <div className="container">
                    <div className="cmp-section-head">
                        <span className="cmp-badge">Our Process</span>
                        <h2 className="cmp-category-title cmp-text-center">Simple. Fast. <span className="cmp-text-gradient" style={{ paddingRight: 0 }}>Effective.</span></h2>
                    </div>
                    <div className="cmp-how-grid">
                        {[
                            { step: "1", title: "Requirement Discussion", desc: "Share role, location, and hiring needs" },
                            { step: "2", title: "Profile Matching", desc: "Get shortlisted trained candidates" },
                            { step: "3", title: "Interview & Selection", desc: "Evaluate and select" },
                            { step: "4", title: "Onboarding Support", desc: "Smooth integration into your team" }
                        ].map((item, idx) => (
                            <div key={idx} className="cmp-how-step">
                                <div className="cmp-step-number">{item.step}</div>
                                <div className="cmp-step-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                {idx < 3 && <div className="cmp-step-arrow"><ArrowRight /></div>}
                            </div>
                        ))}
                    </div>
                    <div className="cmp-addon-box" style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'rgba(194,157,89,0.05)', borderColor: 'rgba(194,157,89,0.2)', borderStyle: 'solid', borderWidth: '1px', borderRadius: '16px', textAlign: 'center' }}>
                        <p className="cmp-addon-text" style={{ color: '#856404', fontWeight: 600 }}>
                            <span className="cmp-gold-text">Optional Add-on:</span> Customized training aligned to your projects
                        </p>
                    </div>
                </div>
            </section>

            {/* 9. WHY FARE (Comparison) */}
            <section className="cmp-category-section cmp-competition-layout">
                <div className="container">
                    <div className="cmp-section-head">
                        <span className="cmp-badge">The Comparison</span>
                        <h2 className="cmp-category-title cmp-text-center">Why Companies <span className="cmp-text-gradient" style={{ paddingRight: 0 }}>Choose FARE</span></h2>
                    </div>

                    <div className="cmp-expectation-grid" style={{ alignItems: 'center' }}>
                        {/* Left Card: Traditional Hiring */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="cmp-course-card"
                            style={{ background: 'rgba(239, 68, 68, 0.02)', borderColor: 'rgba(239, 68, 68, 0.15)', padding: '40px', boxShadow: 'none' }}
                        >
                            {/* <div style={{ display: 'inline-flex', padding: '6px 16px', borderRadius: '20px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontWeight: 700, fontSize: '0.85rem', marginBottom: '24px', alignSelf: 'flex-start', textTransform: 'uppercase', letterSpacing: '1px' }}>Inefficient</div> */}
                            <h3 className="cmp-card-title" style={{ fontSize: '1.75rem', marginBottom: '32px', color: 'var(--text-main)' }}>Traditional Hiring</h3>
                            <ul className="cmp-competition-list" style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
                                {[
                                    "Raw freshers with no practical knowledge",
                                    "Long 3-6 months ramp-up time",
                                    "Trial & error at company's expense",
                                    "High drop-offs due to early frustration"
                                ].map((text, i) => (
                                    <li key={i} className="cmp-competition-item" style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-muted)' }}>
                                        <XCircle size={22} style={{ color: '#ef4444', flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="cmp-vs-container">
                            <div className="cmp-vs-badge" style={{ background: 'white', color: 'var(--text-main)', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>VS</div>
                        </div>

                        {/* Right Card: FARE Hiring */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="cmp-course-card cmp-solid-deep cmp-expects-card"
                            style={{
                                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                                borderColor: 'rgba(45, 212, 191, 0.3)',
                                padding: '45px 40px',
                                boxShadow: '0 20px 50px rgba(13, 148, 136, 0.15)',
                                transform: 'scale(1.02)'
                            }}
                        >
                            {/* <div style={{ display: 'inline-flex', padding: '6px 16px', borderRadius: '20px', background: 'rgba(45, 212, 191, 0.15)', color: '#2dd4bf', fontWeight: 700, fontSize: '0.85rem', marginBottom: '24px', alignSelf: 'flex-start', textTransform: 'uppercase', letterSpacing: '1px' }}>Ready For Sales</div> */}
                            <h3 className="cmp-card-title" style={{ fontSize: '1.75rem', marginBottom: '32px', color: 'white' }}>The FARE Way</h3>
                            <ul className="cmp-competition-list" style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
                                {[
                                    "Professionals trained in TOE framework",
                                    "Faster productivity & closing rate",
                                    "Hit the ground running from Day 1",
                                    "Culturally aligned & motivated candidates"
                                ].map((text, i) => (
                                    <li key={i} className="cmp-competition-item" style={{ fontSize: '1.05rem', margin: 0, color: 'rgba(255,255,255,0.9)' }}>
                                        <CheckCircle size={22} style={{ color: '#2dd4bf', flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.03) 0%, rgba(13, 148, 136, 0.08) 100%)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid rgba(13, 148, 136, 0.15)', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.35rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>
                            "Built on the TOE Framework—a practical, repeatable sales behavior model."
                        </p>
                        <h4 className="cmp-luxury-title" style={{ fontSize: '2rem', margin: 0 }}>We don’t just send resumes. <br /><span className="cmp-text-gradient">We deliver readiness.</span></h4>
                    </div>
                </div>
            </section>

            {/* 10. INDUSTRY EXPERT PERSPECTIVE - REDESIGNED */}
            <section className="cmp-expert-luxury-section cmp-overflow-hidden">
                <div className="container">
                    <div className="cmp-section-head">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cmp-badge"
                            style={{ background: 'rgba(194, 157, 89, 0.1)', color: '#c29d59', borderColor: 'rgba(194, 157, 89, 0.2)' }}
                        >
                            Experts Speak
                        </motion.span>
                        <h2 className="cmp-category-title-white cmp-text-center">What Industry Experts Say <br /><span className="cmp-text-gradient" style={{ paddingRight: 0 }}>About This Approach</span></h2>
                        <p className="cmp-section-desc cmp-mt-4" style={{ marginTop: 0 }}>Aligned with real expectations from developers and channel partners.</p>
                    </div>

                    <div className="cmp-perspective-grid">
                        {[
                            {
                                title: "Sales Readiness Gap",
                                quote: "Fresh hires struggle on-site. Companies need professionals who can handle real customers from day one.",
                                alignment: "TOE ensures real-world conversation and engagement readiness",
                                icon: <Target size={24} />
                            },
                            {
                                title: "Lead Conversion Gap",
                                quote: "Conversion depends on follow-ups and discipline—not just leads.",
                                alignment: "Strong focus on Organize (CRM + follow-ups)",
                                icon: <TrendingUp size={24} />
                            },
                            {
                                title: "Site Visit Impact",
                                quote: "Site visits decide conversions.",
                                alignment: "Engage stage is deeply trained",
                                icon: <Map size={24} />
                            },
                            {
                                title: "Closing Skill Gap",
                                quote: "Negotiation is rarely structured.",
                                alignment: "Talk + Engage build closing capability",
                                icon: <Zap size={24} />
                            },
                            {
                                title: "Productivity Expectation",
                                quote: "Ramp-up time needs to reduce.",
                                alignment: "TOE prepares candidates for faster contribution",
                                icon: <ShieldCheck size={24} />
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="cmp-perspective-card"
                            >
                                <div className="cmp-perspective-quote-symbol">“</div>
                                <div className="cmp-perspective-header">
                                    <div className="cmp-perspective-icon-box">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                                <p className="cmp-perspective-text">“{item.quote}”</p>
                                <div className="cmp-perspective-footer">
                                    <div className="cmp-perspective-alignment">
                                        <span className="cmp-alignment-tag">The FARE Solution</span>
                                        <p>{item.alignment}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="cmp-text-center cmp-mt-12">
                        <p className="cmp-luxury-title cmp-title-md" style={{ color: 'rgba(255,255,255,0.9)' }}>
                            FARE is built around how sales actually happens in the industry—<span className="cmp-text-gradient">not just how it is taught.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* 11. FINAL CTA */}
            <section className="cmp-category-section cmp-final-cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="cmp-final-cta-card"
                    >
                        <div className="cmp-cta-grid">
                            <div className="cmp-cta-info">
                                <h2 className="cmp-luxury-title cmp-text-white">Build a High-Performing <br />Sales Team—<span className="cmp-gold-text">Faster</span></h2>
                                <p className="cmp-text-white-soft cmp-mb-8" style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                                    Access trained professionals ready to Talk, Organize, and Engage from Day 1.
                                </p>
                                <div className="cmp-cta-group" style={{ justifyContent: 'flex-start', margin: 0 }}>
                                    <button onClick={() => setIsModalOpen(true)} className="cmp-btn-primary">Request Talent</button>
                                    <Link to="/contact" className="cmp-btn-outline">Schedule a Call</Link>
                                </div>
                            </div>
                            <div className="cmp-cta-form-box">
                                <h3 className="cmp-text-white cmp-title-sm cmp-mb-6">Quick Enquiry</h3>
                                <form className="cmp-mini-form">
                                    <div className="cmp-input-group">
                                        <input type="text" placeholder="Company Name" required />
                                    </div>
                                    <div className="cmp-input-group">
                                        <input type="text" placeholder="Contact Person" required />
                                    </div>
                                    <div className="cmp-input-group">
                                        <input type="email" placeholder="Email / Phone" required />
                                    </div>
                                    <div className="cmp-input-group">
                                        <select>
                                            <option value="">Hiring Requirement</option>
                                            <option value="developers">Developers</option>
                                            <option value="channel-partners">Channel Partners</option>
                                            <option value="expansion">Firms Expansion</option>
                                        </select>
                                    </div>
                                    <button type="submit" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-gold cmp-w-full">Submit Request</button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default CompaniesPage;
