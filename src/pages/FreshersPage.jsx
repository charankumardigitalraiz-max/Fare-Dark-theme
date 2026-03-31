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
  LineChart,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './FreshersPage.css';

const curriculum = [
  {
    id: 1,
    title: "PHASE 1: FOUNDATION",
    tagline: "Understand the core mechanics of the real estate industry.",
    modules: [
      "1. Introduction to Real Estate Industry",
      "2. Real Estate Career Paths",
      "3. Types of Properties",
      "4. Basic Market Understanding",
      "5. Real Estate Terminology"
    ],
    icon: <Building size={20} />
  },
  {
    id: 2,
    title: "PHASE 2: CORE SALES SKILLS",
    tagline: "Master the psychology of selling and communication.",
    modules: [
      "6. Understanding Customer Needs",
      "7. Probing Techniques",
      "8. Effective Communication",
      "9. Pitching Properties",
      "10. Handling Objections"
    ],
    icon: <Target size={20} />
  },
  {
    id: 3,
    title: "PHASE 3: SALES EXECUTION",
    tagline: "Turn leads into successful, closed transactions.",
    modules: [
      "11. Site Visit Handling",
      "12. Presentation Skills",
      "13. Negotiation Basics",
      "14. Closing Techniques",
      "15. Follow-Up Strategies"
    ],
    icon: <Activity size={20} />
  },
  {
    id: 4,
    title: "PHASE 4: PIPELINE & SYSTEMS",
    tagline: "Organize your workflow and manage your deals.",
    modules: [
      "16. Lead Management Basics",
      "17. CRM Introduction",
      "18. Sales Funnel Understanding",
      "19. Time & Task Management"
    ],
    icon: <LineChart size={20} />
  },
  {
    id: 5,
    title: "PHASE 5: INDUSTRY EXPOSURE",
    tagline: "Learn the essential legal and financial frameworks.",
    modules: [
      "20. Legal Basics",
      "21. Home Loans & Banking"
    ],
    icon: <Briefcase size={20} />
  },
  {
    id: 6,
    title: "PHASE 6: CAREER PREPARATION",
    tagline: "Get ready to enter the market professionally.",
    modules: [
      "22. Resume & Interview Preparation"
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
            Freshers Success Program
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="luxury-title text-4xl mb-8"
          >
            Start Your <span className="modern-text-gradient">Career</span> in Real Estate — <br />
            With a Structured Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted max-w-3xl mx-auto text-lg mb-12"
          >
            Learn, practice, and get placed with FARE’s complete real estate training program designed for beginners
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}
          >
            <Link to="/contact" className="btn-gold">Enroll Now</Link>
            <Link to="/contact" className="btn-ghost" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>Talk to an Advisor</Link>
          </motion.div>
        </header>

        {/* The Challenge section using course-all-grid UI */}
        <section className="category-section" style={{ marginTop: '100px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Career Hurdles</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px' }}>
              Struggling to Start Your Career in<span className="modern-text-gradient" style={{ paddingRight: 0 }}> Real Estate</span>
            </h2>
          </div>

          <div className="course-all-grid">
            {[
              { title: "No clarity", desc: "No clarity on where to begin", icon: <Map size={20} /> },
              { title: "No practical exposure", desc: "Theoretical knowledge is not enough to close real deals", icon: <Target size={20} /> },
              { title: "No structured learning path", desc: "Lack of a step-by-step roadmap to professional success", icon: <BookOpen size={20} /> },
              { title: "No placement support", desc: "Difficulty getting hired by top agencies without support", icon: <Briefcase size={20} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="course-list-card glass-teal"
              >
                <div className="clc-header" style={{ marginBottom: '16px' }}>
                  <div className="clc-icon-wrap" style={{ background: 'rgba(13, 148, 136, 0.1)', borderColor: 'rgba(13, 148, 136, 0.2)' }}>{item.icon}</div>
                </div>
                <h3 className="clc-title">{item.title}</h3>
                <p className="clc-tagline" style={{ flexGrow: 1 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Program Overview & TOE using course-list-card layout */}
        <section className="category-section">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Course Overview</span>
            <h2 className="category-title text-center" style={{ marginBottom: '8px' }}>
              A Complete Career Program
              <span className="category-subtitle">Not Just a Course</span>
            </h2>
          </div>

          {/* New Overview Grid */}
          <div className="course-all-grid" style={{ marginBottom: '40px' }}>
            {[
              { title: "Learn fundamentals", desc: "Build a strong theoretical base", icon: <GraduationCap size={20} /> },
              { title: "Practice in real scenarios", desc: "Apply knowledge in structured environments", icon: <MonitorPlay size={20} /> },
              { title: "Work on live-like situations", desc: "Simulate real-world deal closures", icon: <Building size={20} /> },
              { title: "Prepare for placements", desc: "Get ready for your first big break", icon: <Award size={20} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="course-list-card glass-teal"
                style={{ padding: '20px' }}
              >
                <div className="clc-header" style={{ marginBottom: '8px' }}>
                  <div className="clc-icon-wrap" style={{ width: '36px', height: '36px', background: 'rgba(13, 148, 136, 0.1)', borderColor: 'rgba(13, 148, 136, 0.2)' }}>{item.icon}</div>
                </div>
                <h3 className="clc-title" style={{ fontSize: '1rem' }}>{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <h3 className="category-title" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>How You Will Learn (TOE)</h3>
          <div className="course-all-grid">
            {[
              { l: "T", term: "Talk (LAN)", title: "Communication & confidence" },
              { l: "O", term: "Organize (MAP)", title: "Lead & deal management" },
              { l: "E", term: "Engage (ACE)", title: "Closing & relationship building" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="course-list-card glass-teal"
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Syllabus</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px' }}>
              Complete <span className="modern-text-gradient" style={{ paddingRight: 0 }}>Curriculum (22 Modules)</span>
            </h2>
          </div>
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
                  { title: "Site visits", icon: <MapPin size={20} /> },
                  { title: "Roleplays", icon: <Users size={20} /> },
                  { title: "Practical assignments", icon: <FileCheck size={20} /> }
                ].map((item, idx) => (
                  <div key={idx} className="course-list-card" style={{ padding: '20px', flexDirection: 'row', alignItems: 'center' }}>
                    <div className="clc-icon-wrap" style={{ width: '40px', height: '40px', marginBottom: 0 }}>{item.icon}</div>
                    <h3 className="clc-title" style={{ marginBottom: 0 }}>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="category-title" style={{ fontSize: '2rem', marginBottom: '30px' }}>Outcomes</h2>
              <div className="course-all-grid" style={{ gridTemplateColumns: '1fr', gap: '16px' }}>
                {[
                  { title: "Understand real estate practically", icon: <GraduationCap size={20} /> },
                  { title: "Handle clients confidently", icon: <Award size={20} /> },
                  { title: "Be job-ready", icon: <Briefcase size={20} /> }
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Journey</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px' }}>
              Career <span className="modern-text-gradient" style={{ paddingRight: 0 }}>Path</span>
            </h2>
          </div>
          <div className="pathway-grid">
            {[
              { label: "Learn", icon: <BookOpen size={32} /> },
              { label: "Practice", icon: <Target size={32} /> },
              { label: "Perform", icon: <Zap size={32} /> },
              { label: "Get Placed", icon: <Briefcase size={32} /> },
              { label: "Grow", icon: <TrendingUp size={32} /> }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="path-node-card"
              >
                <div className="pn-icon-circle">
                  <div className="pn-step-badge">0{idx + 1}</div>
                  {step.icon}
                </div>
                <div className="pn-label">{step.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 10. Who Should Apply */}
        <section className="category-section">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Candidate Profile</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px' }}>
              Who Should <span className="modern-text-gradient" style={{ paddingRight: 0 }}>Apply?</span>
            </h2>
          </div>
          <div className="course-all-grid grid-3-cols" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              { title: "Fresh Graduates", desc: "Build a strong foundation for your professional life.", icon: <GraduationCap size={24} /> },
              { title: "Career Switchers", desc: "Transition into real estate from any industry.", icon: <TrendingUp size={24} /> },
              { title: "Beginners", desc: "Learn from scratch with our structured roadmap.", icon: <UserCheck size={24} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="course-list-card glass-teal"
                style={{ padding: '32px', textAlign: 'center', alignItems: 'center' }}
              >
                <div className="clc-icon-wrap" style={{ marginBottom: '20px', width: '56px', height: '56px' }}>{item.icon}</div>
                <h3 className="clc-title" style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{item.title}</h3>
                <p className="clc-tagline">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 11. Why FARE */}
        <section className="category-section">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Institutional Pillars</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px' }}>
              Why <span className="modern-text-gradient" style={{ paddingRight: 0 }}>FARE?</span>
            </h2>
          </div>
          <div className="course-all-grid grid-3-cols" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              { title: "Execution-Focused", desc: "Training designed for real-world deals, not just exams.", icon: <Zap size={24} /> },
              { title: "Structured Roadmap", desc: "Clear modules with a progress-driven approach.", icon: <Map size={24} /> },
              { title: "Market-Driven", desc: "Curriculum aligned to current real estate trends.", icon: <Award size={24} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="course-list-card solid-deep"
                style={{ padding: '32px', textAlign: 'center', alignItems: 'center' }}
              >
                <div className="clc-icon-wrap" style={{ marginBottom: '20px', width: '56px', height: '56px', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--gold-accent)' }}>{item.icon}</div>
                <h3 className="clc-title" style={{ color: 'white', fontSize: '1.4rem', marginBottom: '12px' }}>{item.title}</h3>
                <p className="clc-tagline" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Details section */}
        <section className="category-section">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Logistics</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px' }}>
              Program <span className="modern-text-gradient" style={{ paddingRight: 0 }}>Details</span>
            </h2>
          </div>
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

        {/* Final CTA Synchronized with TrainerPage */}
        <section className="category-section" style={{ marginBottom: '80px' }}>
          <motion.div
            className="course-list-card solid-deep"
            style={{ padding: '60px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background Glow Accents */}
            <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '300px', height: '300px', background: 'var(--gold-accent)', opacity: '0.15', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '-30%', right: '-10%', width: '300px', height: '300px', background: 'var(--primary-accent)', opacity: '0.15', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }}></div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="modern-badge" style={{ marginBottom: '20px', background: 'rgba(255,255,255,0.08)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}>
                Take the First Step
              </span>
              <h2 className="clc-title" style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'white' }}>
                Start Your Real Estate <span className="gold-text">Career Today</span>
              </h2>
              <p className="clc-tagline" style={{ fontSize: '1.1rem', marginBottom: '36px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 36px auto' }}>
                Join the FARE Freshers Program and turn your potential into professional success with our structured 22-module roadmap.
              </p>

              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/contact" className="btn-gold btn-sm" style={{ padding: '12px 32px' }}>Enroll Now</Link>
                <Link to="/contact" className="btn-ghost btn-sm" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '12px 32px' }}>Book Free Consultation</Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default FreshersPage;
