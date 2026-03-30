import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Map, 
  Globe, 
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Award,
  BookOpen,
  PieChart,
  Lightbulb,
  Target,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './TrainerPage.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const collaborationFormats = [
  {
    title: "Workshops",
    audience: "Awareness & Skill Enhancement",
    duration: "2 - 6 hours",
    ideal: "Awareness & quick insights",
    examples: ["Intro to Real Estate Sales", "Meta Ads for RE", "WhatsApp Automation Basics"],
    icon: Lightbulb,
    color: "linear-gradient(135deg, #0ea5e9, #06b6d4)"
  },
  {
    title: "Bootcamps",
    audience: "Skill Enhancement & Up-Skilling",
    duration: "12 - 18 hours",
    ideal: "Practical skill improvement",
    examples: ["Negotiation & Objection Handling", "Project Pitching Mastery"],
    icon: TrendingUp,
    color: "linear-gradient(135deg, #10b981, #059669)"
  },
  {
    title: "Courses",
    audience: "Freshers & Career-focused learners",
    duration: "50 - 60 hours",
    ideal: "Career Transformation",
    examples: ["Real Estate Placement Program", "Specialized Luxury Sales"],
    icon: BookOpen,
    color: "linear-gradient(135deg, #f59e0b, #d97706)"
  },
  {
    title: "Mentorship",
    audience: "Mid to senior professionals",
    duration: "3 - 6 months",
    ideal: "Leadership & autonomous growth",
    examples: ["Sales Leadership Mentorship", "Freelancer & Partner Growth Program"],
    icon: Users,
    color: "linear-gradient(135deg, #e11d48, #be123c)"
  }
];

const TrainerPage = () => {
  return (
    <div className="landing-page" style={{ padding: 0 }}>
      {/* Hero Section */}
      <section className="trainer-hero">
        <div className="trainer-hero-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="modern-badge" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', background: 'var(--primary-accent)' }}>FARE Trainers & Mentors</div>
              <h1 className="modules-title mx-auto" style={{ color: 'white' }}>
                Turn Your Expertise into <br />
                <span className="modern-text-gradient" style={{ paddingRight: 0 }}>
                   Influence & Authority
                </span>
              </h1>
              <p className="modules-subtitle mx-auto" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '750px', marginBottom: '40px', fontSize: '1.1rem' }}>
                Build your presence as a trainer, mentor, or knowledge partner with FARE — and create meaningful impact across the real estate ecosystem.
              </p>
              
              <div className="hero-buttons">
                <Link to="/contact" className="btn-gold" style={{ padding: '14px 32px', minWidth: '180px', display: 'inline-flex', justifyContent: 'center' }}>
                  Apply as Trainer
                </Link>
                <Link to="/contact" className="btn-premium" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '14px 32px', color: 'white', minWidth: '180px', display: 'inline-flex', justifyContent: 'center' }}>
                   Partner with FARE
                </Link>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Who Is It For Grid */}
      <section className="who-section section-padding">
        <div className="container">
          <div className="modules-header">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modern-badge">
              Target Audience
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modules-title">
              Who Is It <span className="modern-text-gradient">For?</span>
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="modules-subtitle">
              Built for Professionals Ready to Teach, Scale & Lead.
            </motion.p>
          </div>
          
          <div className="who-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="who-card">
              <div className="who-icon">
                <Briefcase size={26} />
              </div>
              <h3>Real Estate Experts</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>(Sales, CRM, Banking, Legal) <br/> Turn your experience into structured training and industry influence.</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="who-card">
              <div className="who-icon">
                <Award size={26} />
              </div>
              <h3>Trainers & Coaches</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>Launch and scale co-branded programs with FARE and exponentially expand your reach.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="who-card">
              <div className="who-icon">
                <Map size={26} />
              </div>
              <h3>Freelance Realtors</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>(Residential, Commercial, Open Plot) <br/> Convert your deal experience into training and build your network.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="who-card span-2" style={{ gridColumn: 'span 1' }}>
              <div className="who-icon">
                <Globe size={26} />
              </div>
              <div>
                 <h3>Digital Experts</h3>
                 <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>(Marketers, Influencers) <br/> Turn digital expertise into training that improves campaign ROI.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="who-card span-2">
              <div className="who-icon" style={{ flexShrink: 0 }}>
                <MessageSquare size={28} />
              </div>
              <div>
                <h3>Soft Skills Trainers</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>(English for Real Estate) <br/> Apply your skills to real estate and improve client communication & conversion rates.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About FARE Split */}
      <section className="about-split section-padding">
        <div className="container">
          <div className="about-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="modern-badge">The Academy</div>
              <h2 className="modules-title" style={{ marginBottom: '10px' }}>
                About <span className="modern-text-gradient">FARE</span>
              </h2>
              <div className="about-subtitle" style={{ fontSize: '1rem', marginBottom: '32px' }}>Finishing Academy for Real Estate</div>
              
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                FARE aims to empower real estate professionals to improve productivity, close more effectively, and scale their careers across both salaried roles and freelance models.
              </p>
              
              <div className="about-focus-box">
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Outfit, sans-serif' }}>
                    <TrendingUp style={{ color: 'var(--primary-accent)' }}/> Why This Matters for You
                  </h4>
                  <ul style={{ listStyle: 'none' }}>
                    {["Turn your experience into structured training.", "Deliver programs aligned to real industry needs.", "Reach and impact a wider professional audience."].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '16px', marginBottom: '16px', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem', alignItems: 'center' }}>
                        <CheckCircle style={{ color: 'var(--primary-accent)', flexShrink: 0 }} size={20}/> {item}
                      </li>
                    ))}
                  </ul>
              </div>

              <div className="about-quote">
                  "From experience to expertise. <span className="modern-text-gradient" style={{ color: 'var(--gold-accent)', WebkitTextFillColor: 'var(--gold-accent)' }}>From expertise to impact.</span>"
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ position: 'relative', height: '600px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(15,23,42,0.1)' }}>
              <img src="/training-session-new.png" alt="Training Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, var(--primary-deep), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', padding: '32px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '24px', color: 'white' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--gold-gradient)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-deep)' }}>
                  <PieChart size={32} />
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>100+</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginTop: '4px' }}>Workshop Topics</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Difference */}
      <section className="section-padding" style={{ background: 'var(--bg-deep)' }}>
         <div className="container">
           <div className="modules-header">
             <div className="modern-badge">Impact Areas</div>
             <h2 className="modules-title">Make a <span className="modern-text-gradient">Difference</span></h2>
             <p className="modules-subtitle">Contribute Across the Real Estate Funnel</p>
           </div>

           <div className="difference-grid">
               {[
                 { title: "Lead Generation", desc: "Create demand and generate quality enquiries", topics: ["Performance Marketing", "WhatsApp Automation", "Property Portals"], icon: Globe },
                 { title: "Pre-Sales", desc: "Convert enquiries into qualified site visits", topics: ["Lead Qualification", "CRM Workflows", "Inside Sales"], icon: MessageSquare },
                 { title: "Sales", desc: "Drive conversions and close deals", topics: ["High-Rise Sales", "Luxury Property", "Negotiation & Closing"], icon: Briefcase },
                 { title: "Revenue", desc: "Secure collections & manage relationships", topics: ["Payment Follow-Up", "Conflict Resolution", "Post-Sales Handling"], icon: TrendingUp },
               ].map((block, idx) => (
                 <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="diff-card">
                   <div className="who-icon" style={{ width: '48px', height: '48px', marginBottom: '20px' }}>
                     <block.icon size={24} />
                   </div>
                   <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '10px' }}>{block.title}</h3>
                   <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>({block.desc})</p>
                   <ul style={{ listStyle: 'none', marginTop: 'auto' }}>
                     {block.topics.map((t, i) => (
                       <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '10px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <ChevronRight size={16} style={{ color: 'var(--primary-accent)', opacity: 0.6 }}/> {t}
                       </li>
                     ))}
                   </ul>
                 </motion.div>
               ))}
           </div>
         </div>
      </section>

      {/* Collaboration Modes */}
      <section className="collab-section section-padding">
        <div className="container">
          <div className="modules-header">
             <div className="modern-badge">Engagement Models</div>
             <h2 className="modules-title">Ways to <span className="modern-text-gradient">Collaborate</span></h2>
             <p className="modules-subtitle">Choose the Format Based on the Impact You Want to Create</p>
          </div>
          
          <div className="collab-grid">
             {collaborationFormats.map((fmt, idx) => (
               <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="collab-card">
                  <div className="collab-bar" style={{ background: fmt.color }}></div>
                  <div className="collab-header">
                     <div>
                       <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>{fmt.title}</h3>
                       <p style={{ color: 'var(--primary-accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{fmt.audience}</p>
                     </div>
                     <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: fmt.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}>
                       <fmt.icon size={28} />
                     </div>
                  </div>
                  
                  <div className="collab-metrics">
                     <div>
                       <div className="metric-label">Duration</div>
                       <div className="metric-val" style={{ fontSize: '1rem' }}>{fmt.duration}</div>
                     </div>
                     <div>
                       <div className="metric-label">Ideal For</div>
                       <div className="metric-val" style={{ fontSize: '1rem' }}>{fmt.ideal}</div>
                     </div>
                  </div>

                  <div style={{ marginTop: '24px' }}>
                     <div className="metric-label" style={{ marginBottom: '12px' }}>Topic Examples</div>
                     <div className="collab-tags">
                        {fmt.examples.map((ex, i) => (
                          <span key={i} className="collab-tag">{ex}</span>
                        ))}
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* What FARE offers vs Expects */}
      <section className="section-padding bg-deep">
        <div className="container">
          <div className="expectation-grid">
             <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '32px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>
                  <CheckCircle color="var(--primary-accent)" size={32}/> What FARE Offers
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {["Structured ecosystem", "Ready frameworks", "Lead generation support", "Sales handled by FARE", "Brand building", "Scaling opportunities"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: '500', color: 'var(--text-main)', marginBottom: '16px', fontSize: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-accent)' }}></div> {item}
                    </li>
                  ))}
                </ul>
             </div>
             
             <div style={{ background: 'var(--primary-deep)', padding: '40px', borderRadius: '32px', color: 'white', boxShadow: '0 40px 80px rgba(15,23,42,0.2)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px', color: 'white', fontFamily: 'Outfit, sans-serif' }}>
                  <Target color="var(--gold-accent)" size={32}/> What We Expect
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {["Practical expertise", "Teaching ability", "Professional commitment", "Alignment with FARE structure", "Focus on outcomes"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: '500', color: 'rgba(255,255,255,0.85)', marginBottom: '16px', fontSize: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-accent)' }}></div> {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="modules-cta-wrapper">
             <div className="cta-content">
               <h2 className="modules-title mx-auto" style={{ marginBottom: '24px' }}>
                 Take the <span className="modern-text-gradient">First Step</span>
               </h2>
               <p className="cta-text" style={{ marginBottom: '40px', fontSize: '1.1rem' }}>Request a topic list or talk to us about how your expertise fits into the FARE ecosystem.</p>
               
               <div className="hero-buttons">
                 <Link to="/contact" className="btn-modern-primary" style={{ padding: '14px 32px' }}>Apply as Trainer</Link>
                 <Link to="/contact" className="btn-premium" style={{ background: 'transparent', border: '1px solid var(--primary-accent)', color: 'var(--primary-accent)', padding: '14px 32px' }}>
                    Book a Discussion Call
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default TrainerPage;
