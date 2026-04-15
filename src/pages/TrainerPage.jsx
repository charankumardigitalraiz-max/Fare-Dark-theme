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
      <h3 className="clc-title" style={{ marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{block.title}</h3>
      <div
        className="clc-tagline"
        title={block.desc}
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginBottom: '10px'
        }}
      >
        {block.desc}
      </div>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <ul className="clc-highlights">
          {visibleTopics.map((t, i) => (
            <li key={i} className="clc-highlight-item">
              <ChevronRight size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t}</span>
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'none', border: 'none', color: 'var(--primary-accent)',
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
              textAlign: 'left', padding: '12px 0 0 0', marginTop: 'auto'
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
      className="course-list-card glass-teal"
      style={{ padding: '24px', display: 'flex', flexDirection: 'column', minHeight: '340px' }}
    >
      <div className="clc-header" style={{ marginBottom: '16px' }}>
        <div className="clc-icon-wrap" style={{ background: 'white', boxShadow: '0 8px 24px rgba(13, 148, 136, 0.1)', color: 'var(--primary-accent)', width: '48px', height: '48px' }}>{fmt.icon}</div>
        <div className="clc-meta" style={{ gap: '6px' }}>
          <span className="clc-level-tag" style={{ background: 'rgba(13, 148, 136, 0.06)', color: 'var(--primary-accent)', fontWeight: 700, fontSize: '0.7rem' }}>{fmt.duration}</span>
          <span className="clc-level-tag" style={{ background: 'rgba(217, 119, 6, 0.06)', color: 'var(--gold-accent)', fontWeight: 700, fontSize: '0.7rem' }}>{fmt.ideal}</span>
        </div>
      </div>

      <h3 className="clc-title" style={{ fontSize: '1.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '8px' }}>{fmt.title}</h3>

      <div style={{ marginBottom: '16px', borderRadius: '14px' }}>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 800, marginBottom: '2px', letterSpacing: '0.5px' }}>Target Audience</div>
        <div style={{ fontWeight: 600, color: 'var(--primary-accent)', fontSize: '0.9rem', lineHeight: '1.3' }}>{fmt.audience}</div>
      </div>

      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <ul className="clc-highlights" style={{ marginTop: 0, border: 'none', padding: 0 }}>
          {visibleExamples.map((ex, i) => (
            <li key={i} className="clc-highlight-item" style={{ fontSize: '0.88rem', marginBottom: '8px', alignItems: 'center' }}>
              <CheckCircle size={14} style={{ flexShrink: 0, color: 'var(--primary-accent)' }} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--text-main)' }}>{ex}</span>
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-accent)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              textAlign: 'left',
              padding: '12px 0 0 0',
              marginTop: 'auto',
              display: 'inline-block',
              opacity: 0.8
            }}
          >
            {expanded ? '− Show Less' : `+ ${fmt.examples.length - 2} More Topics`}
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
            className="luxury-title text-4xl mb-4"
          >
            Turn Your Real Estate Experience into <br />
            <span className="modern-text-gradient">Influence, Impact & Authority</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted max-w-3xl mx-auto text-lg mb-8"
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

        {/* Visual Image Banner */}
        {/* <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', marginBottom: '60px', height: '420px', boxShadow: '0 40px 80px rgba(15, 23, 42, 0.12)' }}
        >
          <img
            src="/trainer-hero.png"
            alt="FARE Trainer Program"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.85) 35%, rgba(15,23,42,0.15) 100%)' }} />
          <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '48px', maxWidth: '500px' }}>
            <span className="modern-badge" style={{ marginBottom: '16px', display: 'inline-block', background: 'rgba(255,255,255,0.08)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}>
              FARE Training Ecosystem
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'white', fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.5px', lineHeight: 1.3, marginBottom: '16px' }}>
              Share Your Expertise. <span style={{ color: 'var(--gold-accent)' }}>Shape the Industry.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7 }}>
              Join FARE's trainer network and deliver structured programs that create real impact across roles.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: '32px', right: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {[
              { val: '100+', label: 'Topics' },
              { val: '5+', label: 'Formats' },
              { val: '3x', label: 'Reach' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '14px 22px', textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif', color: 'var(--gold-accent)' }}>{s.val}</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.section> */}

        {/* 2. Who Is It For */}
        <section className="category-section" style={{ marginTop: "50px" }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '16px' }}>Target Audience</span>
            <h2 className="category-title text-center" style={{ marginBottom: '12px', justifyContent: 'center' }}>
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
        <section className="category-section" style={{ marginTop: "50px" }}>
          <div className="info-row-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <span className="modern-badge" style={{ marginBottom: '4px' }}>About FARE</span>
                <h2 className="category-title" style={{ marginBottom: '16px' }}>Finishing Academy for <span className="modern-text-gradient">Real Estate</span></h2>
                <p className="clc-tagline" style={{ fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--text-main)', opacity: 0.9 }}>
                  FARE empowers real estate professionals to maximize productivity, master the art of closing, and scale their careers through industry-aligned, structured training.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: 'rgba(13, 148, 136, 0.03)', border: '1px solid rgba(13, 148, 136, 0.1)', borderRadius: '20px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ padding: '8px', background: 'rgba(13, 148, 136, 0.1)', borderRadius: '10px', color: 'var(--primary-accent)' }}><Target size={20} /></div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>Our Focus</h4>
                  </div>
                  <ul className="clc-highlights" style={{ border: 'none', padding: 0, gap: '12px' }}>
                    {[
                      "Role-specific skill alignment",
                      "Continuous performance upskilling",
                      "Knowledge scaling for experts"
                    ].map((text, i) => (
                      <li key={i} className="clc-highlight-item" style={{ fontSize: '0.95rem', alignItems: 'center' }}>
                        <CheckCircle size={16} />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: 'rgba(217, 119, 6, 0.03)', border: '1px solid rgba(217, 119, 6, 0.1)', borderRadius: '20px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ padding: '8px', background: 'rgba(217, 119, 6, 0.1)', borderRadius: '10px', color: 'var(--gold-accent)' }}><TrendingUp size={20} /></div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>Your Growth</h4>
                  </div>
                  <ul className="clc-highlights" style={{ border: 'none', padding: 0, gap: '12px' }}>
                    {[
                      "Structured trainer conversion",
                      "Industry-aligned delivery",
                      "Massive professional outreach"
                    ].map((text, i) => (
                      <li key={i} className="clc-highlight-item" style={{ fontSize: '0.95rem', alignItems: 'center' }}>
                        <CheckCircle size={16} />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


            </div>

            <div className="about-visual-box">
              <img src="/trainer-hero.png" alt="FARE Training Environment" />
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
          <div style={{
            marginTop: '10px',
            padding: ' 15px 0px',
            background: 'linear-gradient(135deg, var(--primary-deep) 0%, #1e293b 100%)',
            color: 'white',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
          }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', background: 'var(--gold-accent)', opacity: 0.1, borderRadius: '50%', filter: 'blur(30px)' }} />
            <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, lineHeight: '1.4', position: 'relative', zIndex: 1 }}>
              From experience to expertise.
              <span style={{ color: 'var(--gold-accent)' }}> From expertise to impact.</span>
            </p>
          </div>
        </section>

        {/* 4. Areas Where You Can Make a Difference */}
        <section className="category-section" style={{ marginTop: "50px" }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '4px' }}>Impact Areas</span>
            <h2 className="category-title text-center" style={{ marginBottom: '12px', justifyContent: 'center' }}>
              Areas Where You Can <span className="modern-text-gradient" style={{ paddingRight: 0 }}>Make A Difference</span>
            </h2>
            <p className="text-text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Contribute Across the Real Estate Funnel
            </p>
          </div>

          <div className="course-all-grid grid-5-cols" style={{ marginBottom: '40px' }}>
            {[
              {
                title: "Lead Generation", desc: "Generate Demand & Quality Leads", icon: <Globe size={20} />, topics: [
                  "Performance Ads (Meta & Google)",
                  "WhatsApp Funnels & Automation",
                  "Property Portals & Inbound"
                ]
              },
              { title: "Pre-Sales", desc: "Turn Enquiries into Site Visits", icon: <UserCheck size={20} />, topics: ["Lead Qualification & Nurturing", "CRM Workflows & Follow-ups", "Inside Sales Systems"] },
              { title: "Sales", desc: "Drive conversions and close deals", icon: <Briefcase size={20} />, topics: ["High-Rise Project Sales", "Luxury Property Advisory", "Project Pitching & Client Handling", "Negotiation & Closing"] },
              { title: "Revenue", desc: "Payments & Relationship Management", icon: <TrendingUp size={20} />, topics: ["Payment Follow-Up Systems", "Conflict Resolution", "Post-Sales Customer Handling"] },
              { title: "Career & Freelancing", desc: "Enable independent growth and income", icon: <Activity size={20} />, topics: ["Freelancer & Channel Partner Models", "Personal Branding for Realtors", "Business Development for Agents"] }
            ].map((block, idx) => (
              <ExpandableImpactCard key={idx} block={block} idx={idx} />
            ))}
          </div>

          {/* Capability Layers */}
          <h3 className="text-center" style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '12px' }}>Capability Layers</h3>
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
        <section className="category-section" style={{ marginTop: "50px" }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px', textAlign: 'center' }}>
            <span className="modern-badge" style={{ marginBottom: '4px' }}>Delivery Formats</span>
            <h2 className="category-title text-center" style={{ marginBottom: '12px', justifyContent: 'center' }}>
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
        <section className="category-section" >
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
              <h2 className="clc-title" style={{ fontSize: '2rem', marginBottom: '16px', color: 'white' }}>
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
      </div >
    </div >
  );
};

export default TrainerPage;
