import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Map,
  Target,
  CheckCircle,
  BookOpen,
  MonitorPlay,
  Clock,
  MapPin,
  CircleDollarSign,
  Users,
  GraduationCap,
  Award,
  FileCheck,
  Building,
  Activity,
  UserCheck,
  TrendingUp,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './FreshersPage.css';

const curriculum = [
  {
    id: 1,
    title: "Foundation",
    tagline: "Understand the core mechanics of the real estate industry.",
    modules: [
      "Introduction to Real Estate Industry",
      "Real Estate Career Paths",
      "Types of Properties",
      "Basic Market Understanding",
      "Real Estate Terminology"
    ],
    icon: <Building size={20} />
  },
  {
    id: 2,
    title: "Core Sales Skills",
    tagline: "Master the psychology of selling and communication.",
    modules: [
      "Understanding Customer Needs",
      "Probing Techniques",
      "Effective Communication",
      "Pitching Properties",
      "Handling Objections"
    ],
    icon: <Target size={20} />
  },
  {
    id: 3,
    title: "Sales Execution",
    tagline: "Turn leads into successful, closed transactions.",
    modules: [
      "Site Visit Handling",
      "Presentation Skills",
      "Negotiation Basics",
      "Closing Techniques",
      "Follow-Up Strategies"
    ],
    icon: <Activity size={20} />
  },
  {
    id: 4,
    title: "Pipeline & Systems",
    tagline: "Organize your workflow and manage your deals.",
    modules: [
      "Lead Management Basics",
      "CRM Introduction",
      "Sales Funnel Understanding",
      "Time & Task Management"
    ],
    icon: <LineChart size={20} />
  },
  {
    id: 5,
    title: "Industry Exposure",
    tagline: "Learn the essential legal and financial frameworks.",
    modules: [
      "Legal Basics in Real Estate",
      "Home Loans & Banking"
    ],
    icon: <Briefcase size={20} />
  },
  {
    id: 6,
    title: "Career Preparation",
    tagline: "Get ready to enter the market professionally.",
    modules: [
      "Resume Building",
      "Interview Preparation"
    ],
    icon: <UserCheck size={20} />
  }
];

const FreshersPage = () => {
  return (
    <div className="freshers-page">
      <div className="container">

        {/* Synchronized Hero Section from CoursesPage */}
        <header className="courses-hero">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="modern-badge"
          >
            Freshers Success Program 2024
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="luxury-title text-4xl mb-8"
          >
            Start Your <span className="modern-text-gradient">Career</span> in Real Estate <br />
            With a Structured Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted max-w-3xl mx-auto text-lg mb-12"
          >
            Learn, practice, and get placed with FARE’s complete real estate training program designed specifically for beginners.
          </motion.p>
        </header>

        {/* The Challenge section using course-all-grid UI */}
        <section className="category-section">
          <h2 className="category-title">Struggling to Start Your Career?</h2>
          <div className="course-all-grid">
            {[
              { title: "No Clarity", desc: "No clarity on where to begin your journey.", icon: <Map size={20} /> },
              { title: "No Practical Exposure", desc: "Theoretical knowledge is not enough to close real deals.", icon: <Target size={20} /> },
              { title: "No Structured Path", desc: "Lack of a step-by-step roadmap to professional success.", icon: <BookOpen size={20} /> },
              { title: "No Placement Support", desc: "Difficulty getting hired by top agencies without support.", icon: <Briefcase size={20} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="course-list-card"
              >
                <div className="clc-header" style={{ marginBottom: '16px' }}>
                  <div className="clc-icon-wrap">{item.icon}</div>
                </div>
                <h3 className="clc-title">{item.title}</h3>
                <p className="clc-tagline" style={{ flexGrow: 1 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Program Overview & TOE using course-list-card layout */}
        <section className="category-section">
          <h2 className="category-title">A Complete Career Program</h2>
          <div className="course-all-grid">
            {[
              { l: "T", term: "Talk", title: "(LAN): Communication & confidence" },
              { l: "O", term: "Organize", title: "(MAP): Lead & deal management" },
              { l: "E", term: "Engage", title: "(ACE): Closing & relationship building" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="course-list-card"
              >
                <div className="clc-header" style={{ marginBottom: '16px' }}>
                  <div className="clc-icon-wrap" style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    background: 'var(--primary-gradient)',
                    color: 'white',
                    border: 'none'
                  }}>
                    {item.l}
                  </div>
                  <div className="clc-meta">
                    <span className="clc-level-tag">TOE Framework</span>
                  </div>
                </div>
                <h3 className="clc-title">{item.term}</h3>
                <p className="clc-tagline">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Complete Curriculum using identical CoursesPage module mapping */}
        <section className="category-section">
          <h2 className="category-title">Complete Curriculum (22 Modules)</h2>
          <div className="course-all-grid">
            {curriculum.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                style={{ display: 'flex' }}
              >
                <div className="course-list-card" style={{ flexGrow: 1 }}>
                  <div className="clc-header">
                    <div className="clc-icon-wrap">{phase.icon}</div>
                    <div className="clc-meta">
                      <span className="clc-module-tag">Phase {phase.id.toString().padStart(2, '0')}</span>
                      <span className="clc-level-tag">{phase.modules.length} Modules</span>
                    </div>
                  </div>

                  <h3 className="clc-title">{phase.title}</h3>
                  <p className="clc-tagline">{phase.tagline}</p>

                  <ul className="clc-highlights">
                    {phase.modules.map((m, i) => (
                      <li key={i} className="clc-highlight-item">
                        <CheckCircle size={13} />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Exp & Outcomes using info cards */}
        <section className="category-section">
          <div className="info-row-grid">
            <div>
              <h2 className="category-title" style={{ fontSize: '2rem', marginBottom: '30px' }}>Learning Experience</h2>
              <div className="course-all-grid" style={{ gridTemplateColumns: '1fr', gap: '16px' }}>
                {[
                  { title: "Site Visits", icon: <MapPin size={20} /> },
                  { title: "Roleplays", icon: <Users size={20} /> },
                  { title: "Practical Assignments", icon: <FileCheck size={20} /> }
                ].map((item, idx) => (
                  <div key={idx} className="course-list-card" style={{ padding: '20px', flexDirection: 'row', alignItems: 'center' }}>
                    <div className="clc-icon-wrap" style={{ width: '40px', height: '40px', marginBottom: 0 }}>{item.icon}</div>
                    <h3 className="clc-title" style={{ marginBottom: 0 }}>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="category-title" style={{ fontSize: '2rem', marginBottom: '30px' }}>Program Outcomes</h2>
              <div className="course-all-grid" style={{ gridTemplateColumns: '1fr', gap: '16px' }}>
                {[
                  { title: "Understand Practically", icon: <GraduationCap size={20} /> },
                  { title: "Handle Clients Confidently", icon: <Award size={20} /> },
                  { title: "Be Job-Ready", icon: <Briefcase size={20} /> }
                ].map((item, idx) => (
                  <div key={idx} className="course-list-card" style={{ padding: '20px', flexDirection: 'row', alignItems: 'center' }}>
                    <div className="clc-icon-wrap" style={{ width: '40px', height: '40px', marginBottom: 0, background: 'var(--gold-glow)', color: 'var(--gold-accent)', borderColor: 'rgba(255,184,0,0.2)' }}>{item.icon}</div>
                    <h3 className="clc-title" style={{ marginBottom: 0 }}>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pathway - Reimagined structured approach */}
        <section className="category-section">
          <h2 className="category-title text-center" style={{ justifyContent: 'center' }}>Career Pathway</h2>
          <div className="pathway-grid">
            {["Learn", "Practice", "Perform", "Get Placed", "Grow"].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="path-node-card"
              >
                <div className="pn-number">{idx + 1}</div>
                <div className="pn-title">{step}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Details section */}
        <section className="category-section">
          <h2 className="category-title">Program Details</h2>
          <div className="course-all-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {[
              { title: "Duration", val: "4-6 Weeks", icon: <Clock size={18} /> },
              { title: "Mode", val: "Hybrid", icon: <MonitorPlay size={18} /> },
              { title: "Location", val: "Hyderabad", icon: <MapPin size={18} /> },
              { title: "Fees", val: "Contact for Details", icon: <CircleDollarSign size={18} /> },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="course-list-card"
                style={{ padding: '15px', gap: '8px' }}
              >
                <div className="clc-header" style={{ marginBottom: '8px' }}>
                  <div className="clc-icon-wrap" style={{ width: '36px', height: '36px' }}>{item.icon}</div>
                  <span className="clc-module-tag">{item.title}</span>
                </div>
                <h3 className="clc-title" style={{ fontSize: '1.2rem' }}>{item.val}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA Synchronized with CoursesPage */}
        <section className="syllabus-cta-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="syllabus-cta-modern"
          >
            <div className="cta-glow"></div>
            <h2 className="cta-title">Start Your Real Estate <span className="gold-text">Career Today</span></h2>
            <p className="cta-description">
              Join the FARE Freshers Program and turn your potential into professional success with our structured 22-module roadmap.
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

export default FreshersPage;
