import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Map,
  Target,
  CheckCircle,
  BookOpen,
  ChevronRight,
  MonitorPlay,
  Phone,
  Clock,
  MapPin,
  CircleDollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './FreshersPage.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const modules = [
  {
    phase: "MODULE 1: INTRODUCTION TO REAL ESTATE",
    topics: [
      "What is Real Estate?",
      "Career Scope in Real Estate",
      "Primary vs Secondary Market"
    ]
  },
  {
    phase: "MODULE 2: REAL ESTATE ECOSYSTEM & LEGAL BASICS",
    topics: [
      "Different entities in RE ecosystem",
      "Approving authorities & Legal framework",
      "Basic documentation (OC, CC, Sale Deed, EC)",
      "Importance of Legal Clarity"
    ]
  },
  {
    phase: "MODULE 3: UNDERSTANDING PROPERTIES",
    topics: [
      "Apartment Types & Gated Vs Non-Gated",
      "Types of Villas",
      "Master Plan & Floor Plan Basics",
      "Essentials: UDS, Amenities, Specifications, Parking",
      "Vastu Fundamentals - Facing, Placement"
    ]
  },
  {
    phase: "MODULE 4: OPEN PLOTS ADVISORY & SALES",
    topics: [
      "Why buyers invest in plots",
      "Common concerns in plot buying",
      "Basic probing for plots",
      "Location & approval clarity",
      "Basic closing techniques"
    ]
  },
  {
    phase: "MODULE 5: UNDERSTANDING BUYERS",
    topics: [
      "Why People Buy Property",
      "End Users vs Investors",
      "NRI & First-Time Buyers",
      "Emotional vs Logical Decisions",
      "Understanding Important factors for buyer"
    ]
  },
  {
    phase: "MODULE 6: BUYING JOURNEY & SALES FUNNEL",
    topics: [
      "Inquiry to Registration Flow",
      "Lead Stages",
      "Why Deals Fail",
      "Follow-Up Importance"
    ]
  },
  {
    phase: "MODULE 7: FINANCE & PAYMENT PLANS",
    topics: [
      "Types - Self funding, Housing Loan, Mortgage",
      "Housing Loan - OCR, Eligibility, Credit score, Tenure",
      "OTP, CLP & Others"
    ]
  },
  {
    phase: "MODULE 8: LEAD HANDLING & QUALIFICATION",
    topics: [
      "Lead Sources (Walkins, Enquiries, Cold calling)",
      "Budget & Timeline Identification",
      "Asking Open Questions",
      "Basic Need Mapping"
    ]
  },
  {
    phase: "MODULE 9: PROBING SKILLS",
    topics: [
      "Listening Skills",
      "Asking Follow-up Questions",
      "Identifying Hidden Concerns",
      "Understanding Buyer Fears"
    ]
  },
  {
    phase: "MODULE 10: SINGLE PROJECT SALES MODEL",
    topics: [
      "Handling One Project Only",
      "Highlighting Strengths",
      "Managing Comparisons",
      "Basic Rejection Handling"
    ]
  },
  {
    phase: "MODULE 11: MULTI PROJECT SALES MODEL",
    topics: [
      "Suggesting 2–3 Options",
      "Comparing Projects",
      "Avoiding Overload",
      "Ethical Advisory Approach"
    ]
  },
  {
    phase: "MODULE 12: PRESENTATION SKILLS",
    topics: [
      "Structuring a Pitch",
      "Feature → Advantage → Benefit",
      "Simple Storytelling",
      "Asking for Next Step"
    ]
  },
  {
    phase: "MODULE 13: SITE VISIT SKILLS",
    topics: [
      "Preparing for Visit",
      "Explaining Model Flat",
      "Reading Buyer Signals",
      "Post-Visit Follow-Up"
    ]
  },
  {
    phase: "MODULE 14: HANDLING OBJECTIONS",
    topics: [
      "Price Objection",
      "Location Objection",
      "Family Discussion",
      "Calm & Clear Responses"
    ]
  },
  {
    phase: "MODULE 15: BASIC NEGOTIATION SKILLS",
    topics: [
      "Win-Win Thinking",
      "Avoid Immediate Discounts",
      "Handling Family Decisions",
      "Hierarchy level negotiations"
    ]
  },
  {
    phase: "MODULE 16: FUNNEL DISCIPLINE & CRM",
    topics: [
      "Tracking Leads (Hot vs Warm Leads)",
      "Regular Follow-Up",
      "Leveraging & Mastering Whatsapp",
      "With & Without CRM"
    ]
  },
  {
    phase: "MODULE 17: CLOSING BASICS",
    topics: [
      "Buying Signals",
      "Simple Closing Methods",
      "Booking Process"
    ]
  },
  {
    phase: "MODULE 18: DOCUMENTATION & LOAN BASICS",
    topics: [
      "Agreement Overview",
      "Loan Sanction Basics",
      "Registration Process"
    ]
  },
  {
    phase: "MODULE 19: AFTER-SALES & REFERRALS",
    topics: [
      "Handover Support",
      "Asking for Referrals",
      "Repeat Business"
    ]
  },
  {
    phase: "MODULE 20: ETHICS & CAREER GROWTH",
    topics: [
      "Honest Selling",
      "Avoiding False Promises",
      "Building Personal Reputation",
      "Career Growth Path"
    ]
  },
  {
    phase: "MODULE 21: SITE VISIT MIRRORING & LIVE OBSERVATION",
    topics: [
      "Observing real-time buyer behavior",
      "Mirroring tone, pace & energy",
      "Understanding body language",
      "Live objection handling & debrief"
    ]
  },
  {
    phase: "MODULE 22: CAREER PATHWAYS IN REAL ESTATE",
    topics: [
      "1️⃣ Employment Career Track (Corporate Sales)",
      "2️⃣ Freelancing Career Track (Apartments, Plots)",
      "3️⃣ Personal Branding in Real Estate",
      "Compensation & Incentive Structures"
    ]
  },
  {
    phase: "MODULE 23: INDUSTRY MASTERCLASSES",
    topics: [
      "Developer & Sales Leadership Interaction",
      "What developers expect from sales professionals",
      "Channel Partner & Freelancer Exposure",
      "Scaling from individual performer to small team"
    ]
  },
  {
    phase: "MODULE 24: PLACEMENT ASSISTANCE",
    topics: [
      "Employment Track & Resume refinement",
      "Mock interview preparation",
      "Interview scheduling with developer partners",
      "Hiring coordination & feedback"
    ]
  },
  {
    phase: "MODULE 25: FREELANCER LAUNCH SUPPORT",
    topics: [
      "Curated Project Onboarding",
      "Lead Generation & Marketing Guidance",
      "Compliance awareness (RERA & documentation)",
      "Early-Stage Deal Support & Closing"
    ]
  }
];

const FreshersPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="modern-badge">Success Framework</div>
          <h1 className="modules-title mx-auto text-center">
            Start Your <span className="modern-text-gradient">Career</span> in Real Estate <br />
            With a Structured Program
          </h1>
          <p className="modules-subtitle mx-auto text-center mb-10">
            Learn, practice, and get placed with FARE's complete real estate training program designed specifically for beginners.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-premium">
              <span>Enroll Now</span>
              <ChevronRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/contact" className="btn-premium" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} /> Talk to an Advisor
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="problem-section section-padding">
        <div className="container">
          <div className="modules-header">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modern-badge">
              The Challenge
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modules-title">
              Struggling to <span className="modern-text-gradient">Start</span> Your Career?
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modules-subtitle">
              Common challenges faced by beginners entering the real estate industry.
            </motion.p>
          </div>

          <motion.div className="grid-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { title: "No Clarity", desc: "No clear direction on where or how to begin your journey.", icon: Map },
              { title: "No Practical Exposure", desc: "Theoretical knowledge isn't enough to close real deals.", icon: Target },
              { title: "No Structured Path", desc: "Lack of a step-by-step roadmap to professional success.", icon: BookOpen },
              { title: "No Placement", desc: "Difficulty getting hired by top agencies without experience.", icon: Briefcase }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="problem-card">
                <div className="icon-box">
                  <item.icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Overview & TOE Framework */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="modern-badge" style={{ background: 'var(--gold-accent)', color: 'var(--primary-deep)', border: 'none' }}>The FARE Advantage</div>
              <h2 className="modules-title" style={{ color: 'white', marginTop: '24px' }}>
                A Complete <span className="modern-text-gradient">Career</span> Program
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '32px', lineHeight: 1.7 }}>
                It's not just a course; it's a transformational journey. We focus on real-world application, equipping you with the exact tools you need to succeed.
              </p>
              <ul className="check-list">
                {["Learn fundamentals", "Practice in real scenarios", "Work on live-like situations", "Prepare for placements"].map((item, i) => (
                  <li key={i}>
                    <CheckCircle style={{ color: 'var(--gold-accent)' }} size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 style={{ fontSize: '1.8rem', color: 'white', fontWeight: 600, marginBottom: '32px', fontFamily: 'Outfit, sans-serif' }}>How You Will Learn (TOE)</h3>
              {[
                { l: "T", term: "Talk", title: "(LAN): Communication & confidence" },
                { l: "O", term: "Organize", title: "(MAP): Lead & deal management" },
                { l: "E", term: "Engage", title: "(ACE): Closing & relationship building" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeIn} className="toe-card">
                  <div className="toe-letter">{item.l}</div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '4px' }}>{item.term}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="curriculum-section section-padding">
        <div className="container">
          <div className="modules-header">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modern-badge">
              Curriculum
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modules-title">
              Complete <span className="modern-text-gradient">25-Module</span> Curriculum
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modules-subtitle">
              Comprehensive and intensive topics structured to build your expertise from the ground up.
            </motion.p>
          </div>

          <div className="curriculum-grid">
            {modules.map((phase, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="module-card">
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-accent)', letterSpacing: '1.5px', marginBottom: '20px' }}>{phase.phase}</div>
                <ul style={{ listStyle: 'none' }}>
                  {phase.topics.map((topic, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--gold-accent)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className="bg-card section-padding">
        <div className="container text-center">
          <h2 className="modules-title mx-auto">Your Journey to <span className="modern-text-gradient">Success</span></h2>
          <div className="path-container" style={{ marginTop: '48px' }}>
            {["Learn", "Practice", "Perform", "Get Placed", "Grow"].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="path-step">
                  <div className="path-number">{idx + 1}</div>
                  {step}
                </div>
                {idx < arr.length - 1 && <ChevronRight style={{ color: 'var(--text-muted)' }} size={24} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details & Why FARE */}
      <section className="section-padding bg-deep">
        <div className="container">
          <div className="modules-header">
            <h2 className="modules-title">Why Choose <span className="modern-text-gradient">FARE?</span></h2>
            <p className="modules-subtitle">Execution-focused, structured, and market-driven learning.</p>
          </div>

          <div className="details-grid">
            {[
              { title: "Duration", val: "4-6 Weeks", icon: Clock },
              { title: "Mode", val: "Hybrid / Classroom", icon: MonitorPlay },
              { title: "Location", val: "Hyderabad", icon: MapPin },
              { title: "Investment", val: "Contact Us", icon: CircleDollarSign },
            ].map((item, idx) => (
              <div key={idx} className="detail-item">
                <div className="icon-box" style={{ marginBottom: 0, width: '44px', height: '44px' }}>
                  <item.icon size={22} />
                </div>
                <div>
                  <div className="detail-item-title">{item.title}</div>
                  <div className="detail-item-val">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="modules-cta-wrapper" style={{ marginTop: '80px' }}>
            <div className="cta-content">
              <h2 className="modules-title mx-auto" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
                Start Your Real Estate <span className="modern-text-gradient">Career</span> Today
              </h2>
              <p className="cta-text">Join the FARE Freshers Program and turn your potential into professional success.</p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-modern-primary">
                  <span>Enroll Now</span>
                  <div className="btn-glow"></div>
                </Link>
                <Link to="/contact" className="btn-premium" style={{ background: 'transparent', border: '1px solid var(--primary-accent)', color: 'var(--primary-accent)', padding: '16px 36px' }}>
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreshersPage;
