import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Briefcase, Map, Globe, MessageSquare, ChevronRight,
  TrendingUp, Award, BookOpen, PieChart, Lightbulb, Target,
  CheckCircle, Building, Activity, UserCheck, MapPin, ShieldCheck, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ApplyModal from '../components/ApplyModal';
import './TrainerPage.css';

const ExpandableImpactCard = ({ block, idx }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleTopics = expanded ? block.topics : block.topics.slice(0, 2);
  const hasMore = block.topics.length > 2;

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="course-list-card"
    >
      <div className="clc-header">
        <div className="clc-icon-wrap">{block.icon}</div>
      </div>
      <h3 className="clc-title">{block.title}</h3>
      <span className="clc-tagline" style={{ display: 'block', marginBottom: '5px' }}>({block.desc})</span>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
        <ul className="clc-highlights">
          {visibleTopics.map((t, i) => (
            <li key={i} className="clc-highlight-item">
              <ChevronRight size={14} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'none', border: 'none', color: 'var(--primary-accent)',
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
              textAlign: 'left', padding: '12px 0 0 0', marginTop: '4px'
            }}
          >
            {expanded ? '- View Less' : `+ ${block.topics.length - 2} More Topics`}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const ExpandableCollabCard = ({ fmt, idx }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleExamples = expanded ? fmt.examples : fmt.examples.slice(0, 2);
  const hasMore = fmt.examples.length > 2;

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="course-list-card"
    >
      <div className="clc-header">
        <div className="clc-icon-wrap">{fmt.icon}</div>
        <div className="clc-meta">
          <span className="clc-level-tag">{fmt.duration}</span>
          <span className="clc-module-tag">Format</span>
        </div>
      </div>
      <h3 className="clc-title" style={{ fontSize: '1.4rem' }}>{fmt.title}</h3>

      <div style={{ marginTop: '3px', marginBottom: '5px' }}>
        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>Audience</div>
        <div style={{ fontWeight: 600, color: 'var(--primary-accent)' }}>{fmt.audience}</div>

        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginTop: '12px', marginBottom: '4px' }}>Ideal For</div>
        <div style={{ fontWeight: 500, color: 'var(--text-main)' }}>{fmt.ideal}</div>

        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginTop: '12px', marginBottom: '4px' }}>Duration</div>
        <div style={{ fontWeight: 500, color: 'var(--text-main)' }}>{fmt.duration}</div>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
        <ul className="clc-highlights" style={{ marginTop: 0 }}>
          {visibleExamples.map((ex, i) => (
            <li key={i} className="clc-highlight-item">
              <CheckCircle size={14} />
              <span>{ex}</span>
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'none', border: 'none', color: 'var(--primary-accent)',
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
              textAlign: 'left', padding: '12px 0 0 0', marginTop: '4px'
            }}
          >
            {expanded ? '- View Less' : `+ ${fmt.examples.length - 2} More Topics`}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const TrainerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="trainer-page">
      <div className="container">

        {/* 1. Hero Section */}
        <header className="courses-hero">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="modern-badge"
          >
            FARE Trainers & Mentors
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="luxury-title text-4xl mb-8"
          >
            Turn Your Real Estate Experience into <br />
            <span className="modern-text-gradient">Influence, Impact & Authority</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted max-w-3xl mx-auto text-lg mb-12"
          >
            Build your presence as a trainer, mentor, or knowledge partner with FARE — and create meaningful impact across the real estate ecosystem.
            <br />
            Deliver workshops, lead bootcamps, or launch co-branded programs aligned to real industry needs.
          </motion.p>
          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          // className="text-text-muted max-w-3xl mx-auto text-lg mb-12"
          > */}
          {/* Deliver workshops, lead bootcamps, or launch co-branded programs aligned to real industry needs. */}
          {/* </motion.p> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
          >
            <button onClick={() => setIsModalOpen(true)} className="btn-gold">Apply as Trainer</button>
            <button onClick={() => setIsModalOpen(true)} className="btn-ghost" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>Partner with FARE</button>
          </motion.div>
        </header>

        {/* 2. Who Is It For */}
        <section className="category-section">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Target Audience</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px', justifyContent: 'center' }}>
              Who Is It<span className="modern-text-gradient" style={{ paddingRight: 0 }}>For?</span>
            </h2>
            <p className="text-text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Built for Professionals Ready to Teach, Scale & Lead
            </p>
          </div>

          <div className="course-all-grid grid-5-cols">
            {[
              { title: "Experienced Real Estate Professionals", tag: "(Sales, CRM, Banking, Legal)", desc: "Turn your experience into structured training and industry influence.", icon: <Briefcase size={20} /> },
              { title: "Existing Real Estate Trainers & Coaches", tag: "Co-Branded Programs", desc: "Launch and scale co-branded programs with FARE and expand your reach.", icon: <Award size={20} /> },
              { title: "Freelance Realtors & Channel Partners", tag: "(Residential, Commercial, Open Plot)", desc: "Convert your deal experience into training and build your network.", icon: <Map size={20} /> },
              { title: "Digital Media Experts", tag: "(Performance Marketers, Influencers)", desc: "Turn your digital expertise into training that improves campaign ROI and builds brands.", icon: <Globe size={20} /> },
              { title: "Communication & Language Trainers", tag: "(Soft Skills & English for Real Estate)", desc: "Apply your skills to real estate and improve client communication & conversion.", icon: <MessageSquare size={20} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="course-list-card"
              >
                <div className="clc-header">
                  <div className="clc-icon-wrap">{item.icon}</div>
                </div>
                <h3 className="clc-title">{item.title}</h3>
                <span className="clc-module-tag" style={{ display: 'block', marginBottom: '8px', color: 'var(--primary-accent)' }}>{item.tag}</span>
                <p className="clc-tagline" style={{ flexGrow: 1 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. About FARE */}
        <section className="category-section">
          <div className="info-row-grid">
            <div>
              <h2 className="category-title">About FARE</h2>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--gold-accent)', marginBottom: '24px' }}>
                FARE - Finishing Academy for Real Estate
              </h3>
              <p className="clc-tagline" style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
                FARE aims to empower real estate professionals to improve productivity, close more effectively, and scale their careers across both salaried roles and freelance models.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-main)' }}>🎯 Our Focus</h4>
                <ul className="clc-highlights" style={{ border: 'none', padding: 0 }}>
                  {[
                    "Aligning skills to real-world roles and sales processes",
                    "Enabling professionals to continuously upskill and perform better",
                    "Creating pathways for experts to share and scale their knowledge"
                  ].map((text, i) => (
                    <li key={i} className="clc-highlight-item" style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      <CheckCircle size={18} style={{ marginTop: 0 }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-main)' }}>🚀 Why This Matters for You</h4>
                <ul className="clc-highlights" style={{ border: 'none', padding: 0 }}>
                  {[
                    "Turn your experience into structured training",
                    "Deliver programs aligned to real industry needs",
                    "Reach and impact a wider professional audience"
                  ].map((text, i) => (
                    <li key={i} className="clc-highlight-item" style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      <CheckCircle size={18} style={{ marginTop: 0 }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '40px', padding: '24px', background: 'var(--primary-deep)', color: 'white', borderRadius: '16px' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                  From experience to expertise. <span style={{ color: 'var(--gold-accent)' }}>From expertise to impact.</span>
                </p>
              </div>
            </div>

            <div className="about-visual-box">
              <img src="/training-session-new.png" alt="FARE Training Environment" />
              <div className="about-visual-overlay"></div>
              <div className="about-visual-float">
                <div className="about-float-icon">
                  <PieChart size={28} />
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>100+</div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Curated Topics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Areas Where You Can Make a Difference */}
        <section className="category-section">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Impact Areas</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px', justifyContent: 'center' }}>
              Areas Where You Can <span className="modern-text-gradient" style={{ paddingRight: 0 }}>Make A Difference</span>
            </h2>
            <p className="text-text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Contribute Across the Real Estate Funnel
            </p>
          </div>

          <div className="course-all-grid" style={{ marginBottom: '40px' }}>
            {[
              { title: "Lead Generation", desc: "Create demand and generate quality enquiries", icon: <Globe size={20} />, topics: ["Performance Marketing (Meta & Google Ads)", "WhatsApp Automation & Lead Funnels", "Property Portals & Inbound Systems"] },
              { title: "Pre-Sales", desc: "Convert enquiries into qualified site visits", icon: <UserCheck size={20} />, topics: ["Lead Qualification & Nurturing", "CRM Workflows & Follow-ups", "Inside Sales Systems"] },
              { title: "Sales", desc: "Drive conversions and close deals", icon: <Briefcase size={20} />, topics: ["High-Rise Project Sales", "Luxury Property Advisory", "Project Pitching & Client Handling", "Negotiation & Closing"] },
              { title: "Revenue", desc: "Secure collections and manage relationships", icon: <TrendingUp size={20} />, topics: ["Payment Follow-Up Systems", "Conflict Resolution", "Post-Sales Customer Handling"] },
              { title: "Career & Freelancing", desc: "Enable independent growth and income", icon: <Activity size={20} />, topics: ["Freelancer & Channel Partner Models", "Personal Branding for Realtors", "Business Development for Agents"] }
            ].map((block, idx) => (
              <ExpandableImpactCard key={idx} block={block} idx={idx} />
            ))}
          </div>

          {/* Capability Layers */}
          <h3 className="text-center" style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '30px' }}>Capability Layers</h3>
          <div className="course-all-grid">
            {[
              { title: "Communication & Conversion Skills", icon: <MessageSquare size={20} />, topics: ["English for Real Estate", "Client Conversations & Presentation", "Objection Handling & Closing"] },
              { title: "Cross-Functional Expertise", icon: <ShieldCheck size={20} />, topics: ["Legal & Documentation", "Home Loans & Financing", "CRM & Operational Processes"] },
              { title: "Specialty Sales Tracks", icon: <Award size={20} />, topics: ["Luxury Real Estate", "High-Rise Sales", "Plots, Land & Investment Sales"] }
            ].map((layer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="course-list-card glass-teal"
              >
                <div className="clc-header">
                  <div className="clc-icon-wrap" style={{ background: 'rgba(13, 148, 136, 0.1)', borderColor: 'rgba(13, 148, 136, 0.2)' }}>{layer.icon}</div>
                </div>
                <h3 className="clc-title">{layer.title}</h3>
                <ul className="clc-highlights">
                  {layer.topics.map((t, i) => (
                    <li key={i} className="clc-highlight-item">
                      <ChevronRight size={14} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Ways to Collaborate */}
        <section className="category-section">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Delivery Formats</span>
            <h2 className="category-title text-center" style={{ marginBottom: '16px', justifyContent: 'center' }}>
              Ways to Deliver Your<span className="modern-text-gradient" style={{ padding: "0px", margin: "0px", paddingRight: 0 }}>Expertise & Collaborate</span>
            </h2>
            <p className="text-text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Choose the Format Based on the Impact You Want to Create
            </p>
          </div>

          <div className="course-all-grid">
            {[
              { title: "Workshops", icon: <Lightbulb size={20} />, audience: "Awareness + Skill Enhancement", duration: "2 to 6 hours", ideal: "Awareness & quick insights", examples: ["Introduction to Real Estate Sales", "Meta Ads for Real Estate", "WhatsApp Automation Basics"] },
              { title: "Bootcamps", icon: <Zap size={20} />, audience: "Skill Enhancement + Up/Cross Skill", duration: "12 to 18 hours", ideal: "Practical skill improvement", examples: ["Negotiation & Objection Handling", "Project Pitching Mastery", "Lead Follow-Up Systems"] },
              { title: "Courses", icon: <BookOpen size={20} />, audience: "Freshers & Career-focused learners", duration: "50 to 60 hours", ideal: "Transformation", examples: ["Real Estate Placement Program", "Specialized Sales"] },
              { title: "Mentorship", icon: <Users size={20} />, audience: "Mid to senior professionals", duration: "3 to 6 months", ideal: "Leadership & growth", examples: ["Sales Leadership Mentorship", "Freelancer Growth Program"] }
            ].map((fmt, idx) => (
              <ExpandableCollabCard key={idx} fmt={fmt} idx={idx} />
            ))}
          </div>
        </section>



        {/* 6. TOPIC TEASER + CTA */}
        <section className="syllabus-cta-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="syllabus-cta-modern"
          >
            <div className="cta-glow"></div>
            <h2 className="cta-title">100+ Workshop & Bootcamp Topics Across the <span className="gold-text">Real Estate Funnel</span></h2>
            <p className="cta-description">
              FARE offers a curated library of workshops, bootcamps, and structured programs aligned to real-world roles and outcomes in real estate.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
              {[
                "Lead generation & digital campaigns ", "Pre-sales & CRM systems", "Sales, negotiation & closing",
                "Revenue & collections", "Freelancing & branding", "Cross-functional & communication"
              ].map((text, i) => (
                <div key={i} style={{ background: 'rgba(13, 148, 136, 0.05)', padding: '8px 20px', borderRadius: '100px', fontWeight: 600, color: 'var(--primary-accent)', fontSize: '0.9rem', border: '1px solid rgba(13, 148, 136, 0.15)' }}>
                  {text}
                </div>
              ))}
            </div>
            <div className="fit-banner">
              <p>
                <Target size={20} className="fit-banner-icon" />
                <span>Let's find where you fit..</span>
              </p>
            </div>
            <div className="cta-action-row">
              <button onClick={() => setIsModalOpen(true)} className="btn-gold btn-sm">Request Topic List</button>
              <button onClick={() => setIsModalOpen(true)} className="btn-ghost btn-sm" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>Talk to Us About Your Expertise</button>
            </div>
            <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', position: 'relative', zIndex: 1 }}>
              We'll share relevant topics and align you to the right programs based on your experience.
            </p>
          </motion.div>
        </section>





        {/* 6. Corporate Office (Info Block) */}
        <section className="category-section">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="course-list-card solid-deep"
            style={{ padding: '24px 32px', alignItems: 'center', textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}
          >
            <div className="clc-icon-wrap" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--gold-accent)' }}>
              <Building size={20} />
            </div>
            <h3 className="clc-title" style={{ fontSize: '1.5rem', marginTop: '12px', marginBottom: '4px' }}>Our Corporate Office</h3>
            <p className="clc-tagline" style={{ fontSize: '0.95rem', marginBottom: '20px' }}>Based in Hyderabad — Connected with active real estate markets</p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {["Industry exposure", "Real project alignment", "Hybrid opportunities"].map((v, i) => (
                <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'center', fontWeight: 600, fontSize: '0.9rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--gold-accent)' }} /> <span>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 8. WHAT FARE OFFERS VS EXPECTS */}
        <section className="category-section competition-layout">
          <div className="expectation-split-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="course-list-card offers-card"
            >
              <div className="side-badge left">The Opportunity</div>
              <h3 className="clc-title" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '24px' }}>
                <CheckCircle size={28} style={{ color: 'var(--primary-accent)' }} /> What FARE Offers
              </h3>
              <ul className="competition-list">
                {["Structured ecosystem", "Ready frameworks", "Lead generation support", "Sales handled by FARE", "Brand building", "Scaling opportunities"].map((item, i) => (
                  <li key={i} className="competition-item">
                    <div className="dot primary"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="vs-container">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="vs-badge"
              >
                <span>VS</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="course-list-card solid-deep expects-card"
            >
              <div className="side-badge right">The Commitment</div>
              <h3 className="clc-title" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '24px', color: 'white' }}>
                <Target size={28} style={{ color: 'var(--gold-accent)' }} /> What We Expect
              </h3>
              <ul className="competition-list">
                {["Practical expertise", "Teaching ability", "Professional commitment", "Alignment with FARE structure", "Focus on outcomes"].map((item, i) => (
                  <li key={i} className="competition-item light">
                    <div className="dot gold"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>



        {/* 9. FINAL CTA SECTION */}
        <section className="category-section" style={{ marginBottom: '20px' }}>
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
                Connect With Us
              </h2>
              <p className="clc-tagline" style={{ fontSize: '1.1rem', marginBottom: '36px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 36px auto' }}>
                Join the FARE network and turn your real estate experience into industry-wide influence. We handle the systems, you bring the expertise.
              </p>

              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button onClick={() => setIsModalOpen(true)} className="btn-gold btn-sm" style={{ padding: '12px 32px' }}>Apply as Trainer</button>
                <button onClick={() => setIsModalOpen(true)} className="btn-ghost btn-sm" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '12px 32px' }}>Book a Discussion Call</button>
              </div>
            </div>
          </motion.div>
        </section>

        <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div >
  );
};

export default TrainerPage;
