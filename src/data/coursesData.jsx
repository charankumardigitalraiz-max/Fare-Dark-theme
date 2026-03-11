import { BookOpen, Map, Users, TrendingUp, Handshake, ShieldCheck, Target, Layers, Star, Building, ShieldAlert, Scale, Database, Zap, FileText, HeartHandshake, Briefcase, Mic2, Rocket } from 'lucide-react';
import React from 'react';

export const modulesList = [
    {
        id: 1,
        title: 'Real Estate Industry Fundamentals',
        icon: <TrendingUp size={28} />,
        tagline: 'Understand the Core of Properties',
        duration: '2 Days',
        level: 'Beginner',
        eligibility: 'Freshers',
        category: 'Foundation',
        overview: 'Nature of real estate as an asset class. Learn the differences between residential, commercial, and land, as well as primary vs. resale markets.',
        highlights: [
            'Nature of real estate as an asset class',
            'Residential vs commercial vs land',
            'Primary vs resale market',
            'Developer sales vs channel partner model',
            'Career scope in real estate'
        ],
        outcomes: [
            'Understand the fundamental layout of the real estate industry sector.'
        ],
        topics: [
            { week: 'Day 1', title: 'Asset Classes', desc: 'Nature of real estate and types of property' },
            { week: 'Day 2', title: 'Sales Models', desc: 'Developer sales vs channel partner model and career scope' }
        ],
    },
    {
        id: 2,
        title: 'Real Estate Ecosystem & Legal Basics',
        icon: <ShieldCheck size={28} />,
        tagline: 'Grasp the Framework',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Legal',
        overview: 'Understand the ecosystem of developers, brokers, and channel partners, alongside a crucial RERA overview and essential legal documents.',
        highlights: [
            'Developers, brokers, channel partners',
            'Role of banks & financial institutions',
            'RERA overview',
            'OC, CC, Sale Deed, EC',
            'Importance of documentation clarity'
        ],
        outcomes: [
            'Navigate the basic legal structures like OC, CC, Sale Deeds and RERA.'
        ],
        topics: [
            { week: 'Day 1', title: 'Key Stakeholders', desc: 'Understanding developers, brokers, channels and banking' },
            { week: 'Day 2', title: 'Legal Foundations', desc: 'RERA, OC, CC, Sale Deed, and EC documentation' }
        ],
    },
    {
        id: 3,
        title: 'Property & Product Mastery',
        icon: <BookOpen size={28} />,
        tagline: 'Master Apartments & Villas',
        duration: '3 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Product Mastery',
        overview: 'Master the differences between properties like high-rise, low-rise, gated communities and villas. Understand core concepts like UDS, carpet, and super built-up areas.',
        highlights: [
            'High-rise vs low-rise',
            'Gated vs non-gated communities',
            'Carpet vs built-up vs super built-up',
            'UDS concept',
            'Master plan & floor plan understanding'
        ],
        outcomes: [
            'Confidently explain property dimensions, master plans, and floor layouts.'
        ],
        topics: [
            { week: 'Day 1', title: 'Property Structures', desc: 'High/low rise, gated communities, villas' },
            { week: 'Day 2', title: 'Calculations', desc: 'Carpet, built-up, super built-up and UDS' },
            { week: 'Day 3', title: 'Floor Plans', desc: 'Master plan and floor plan reading analysis' }
        ],
    },
    {
        id: 4,
        title: 'Buyer Psychology & Market Segmentation',
        icon: <Users size={28} />,
        tagline: 'Understand Your Client',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Sales Psychology',
        overview: 'Segment and analyze buyer mental models. Differentiate between end users, investors, NRIs, and logic vs emotion-driven buyers.',
        highlights: [
            'End users vs investors',
            'NRI buyers',
            'Emotional vs logical buying',
            'Lifestyle vs appreciation mindset'
        ],
        outcomes: [
            'Categorize intent and tailor the sales approach to match buyer psychology.'
        ],
        topics: [
            { week: 'Day 1', title: 'Target Segments', desc: 'Investors, end-users, and NRIs' },
            { week: 'Day 2', title: 'Buying Mindsets', desc: 'Logical vs emotional, lifestyle vs appreciation' }
        ],
    },
    {
        id: 5,
        title: 'Buying Journey & Sales Funnel',
        icon: <Map size={28} />,
        tagline: 'Map the Client Path',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Sales Strategy',
        overview: 'Track the flow from awareness to registration. Learn about funnel drop-offs, lead to closure transitions, and the utmost importance of follow-ups.',
        highlights: [
            'Awareness to registration flow',
            'Lead → prospect → site visit → closure',
            'Funnel drop-offs',
            'Follow-up importance'
        ],
        outcomes: [
            'Navigate and minimize drop-offs throughout the sales life cycle.'
        ],
        topics: [
            { week: 'Day 1', title: 'Journey Flow', desc: 'Awareness to registration and site visit closure' },
            { week: 'Day 2', title: 'Funnel Mechanics', desc: 'Drop-offs and tactical follow-ups' }
        ],
    },
    {
        id: 6,
        title: 'Lead Handling & Qualification',
        icon: <Handshake size={28} />,
        tagline: 'Qualify with Precision',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Sales Tactics',
        overview: 'Understand lead sources, identify purposes, and construct a framework for budget and timeline qualification utilizing basic discovery questioning.',
        highlights: [
            'Lead sources',
            'Budget & timeline qualification',
            'Purpose identification',
            'Basic discovery questioning'
        ],
        outcomes: [
            'Qualify budgets, timelines and buyer purposes rapidly and effectively.'
        ],
        topics: [
            { week: 'Day 1', title: 'Lead Origination', desc: 'Sources and early identification' },
            { week: 'Day 2', title: 'Qualification Questions', desc: 'Budgets, timelines, and discovery' }
        ],
    },
    {
        id: 7,
        title: 'Open Plots Advisory & Sales',
        icon: <TrendingUp size={28} />,
        tagline: 'Sell the Highest-Margin Product',
        duration: '4 Days',
        level: 'Specialized',
        eligibility: 'Freshers',
        category: 'Advisory',
        overview: 'Learn why buyers invest in plots, analyze the HMDA/DTCP legalities, and master basic closing and probing techniques specific to land development.',
        highlights: [
            'Why buyers invest in plots',
            'Common concerns in plot buying',
            'Location & approval clarity (HMDA/DTCP)',
            'Past growth and appreciation narrative',
            'Basic closing techniques'
        ],
        outcomes: [
            'Pitch plot investments, assuage development fears, and confidently close land deals.'
        ],
        topics: [
            { week: 'Day 1', title: 'Plot Psychology', desc: 'Why people buy plots and common fears' },
            { week: 'Day 2', title: 'Probing & Fit', desc: 'Investment probing and risk assessment' },
            { week: 'Day 3', title: 'Narrative & Pitch', desc: 'Location growth, ROA, and legal clarity' },
            { week: 'Day 4', title: 'Closure', desc: 'Risk reduction, appreciation anchors and structured booking' }
        ],
    },
    {
        id: 8,
        title: 'Requirement Discovery & Probing',
        icon: <BookOpen size={28} />,
        tagline: 'Ask the Right Questions',
        duration: '3 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Sales Psychology',
        overview: 'Master the "TOE - TALK" framework. Implement listening disciplines to dig into deep vs surface needs and uncover hidden objections.',
        highlights: [
            'Listening discipline',
            'Deep vs surface needs',
            'Funnel questioning',
            'Hidden objection identification'
        ],
        outcomes: [
            'Use TOE - TALK framework to perfectly uncover hidden objections and true buyer needs.'
        ],
        topics: [
            { week: 'Day 1', title: 'Active Listening', desc: 'Practicing the discipline of deep listening' },
            { week: 'Day 2', title: 'Deep Probing', desc: 'Surface needs vs true motivations' },
            { week: 'Day 3', title: 'Objection Mapping', desc: 'Finding the hidden blocks via funnel questions' }
        ],
    },
    {
        id: 9,
        title: 'Single Project Sales Model',
        icon: <Target size={28} />,
        tagline: 'Maximize Focused Inventory',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Sales Strategy',
        overview: 'Learn to handle solely one-project inventory, relentlessly highlighting strengths while managing comparisons and basic rejections.',
        highlights: [
            'Handling one-project inventory',
            'Highlighting strengths',
            'Managing comparisons',
            'Basic rejection handling'
        ],
        outcomes: [
            'Position a singular project dynamically against wide-market selections.'
        ],
        topics: [
            { week: 'Day 1', title: 'Feature Pitching', desc: 'Highlighting project strengths' },
            { week: 'Day 2', title: 'Contrast & Rejection', desc: 'Comparison and handling singular rejection' }
        ],
    },
    {
        id: 10,
        title: 'Multi Project Advisory Model',
        icon: <Layers size={28} />,
        tagline: 'Structure Multiple Options',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Advisory',
        overview: 'Suggest structured options without overloading the client, providing project comparison clarity and positioning as a neutral advisor.',
        highlights: [
            'Suggesting 2–3 structured options',
            'Project comparison clarity',
            'Avoiding overload',
            'Neutral advisory positioning'
        ],
        outcomes: [
            'Avoid overwhelming buyers while effectively comparing multiple options.'
        ],
        topics: [
            { week: 'Day 1', title: 'Structured Options', desc: 'Limiting choices and maintaining comparison clarity' },
            { week: 'Day 2', title: 'Neutral Positioning', desc: 'Assuming the advisory, non-salesman posture' }
        ],
    },
    {
        id: 11,
        title: 'Strategic Property Advisory',
        icon: <Map size={28} />,
        tagline: 'Logical Alignments',
        duration: '2 Days',
        level: 'Advanced',
        eligibility: 'Freshers',
        category: 'Advisory',
        overview: 'Execute high-level need-to-product mapping, determining must-haves versus negotiable features for logical shortlisting.',
        highlights: [
            'Need-to-product mapping',
            'Must-have vs negotiable filtering',
            'Logical shortlisting'
        ],
        outcomes: [
            'Align products intelligently with exact client must-haves.'
        ],
        topics: [
            { week: 'Day 1', title: 'Need to Product', desc: 'Connecting mapped needs to inventory' },
            { week: 'Day 2', title: 'Filtering Models', desc: 'Negotiables, non-negotiables, and logical filters' }
        ],
    },
    {
        id: 12,
        title: 'High-Impact Presentation & Influence',
        icon: <Star size={28} />,
        tagline: 'Structure the Perfect Pitch',
        duration: '3 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Sales Psychology',
        overview: 'Execute the "TOE - TALK Practice" by structuring a pitch using the Feature → Advantage → Benefit framework and utilizing simple storytelling.',
        highlights: [
            'Structuring a pitch',
            'Feature → Advantage → Benefit',
            'Benefit framing',
            'Simple storytelling'
        ],
        outcomes: [
            'Deliver persuasive, structured narrative pitches effortlessly.'
        ],
        topics: [
            { week: 'Day 1', title: 'Pitch Structure', desc: 'Opening, establishing, and closing the pitch' },
            { week: 'Day 2', title: 'FAB Framework', desc: 'Features, Advantages, Benefits modeling' },
            { week: 'Day 3', title: 'Influence', desc: 'Benefit framing and practical storytelling' }
        ],
    },
    {
        id: 13,
        title: 'Site Visit Conversion Architecture',
        icon: <Building size={28} />,
        tagline: 'Master the Walkthrough',
        duration: '3 Days',
        level: 'Advanced',
        eligibility: 'Freshers',
        category: 'Sales Tactics',
        overview: 'Learn the "TOE - ENGAGE" methodology. Develop pre-visit planning, structured walkthrough routines, buyer signal reading and post-visit follow-ups.',
        highlights: [
            'Pre-visit planning',
            'Structured walkthrough',
            'Reading buyer signals',
            'Post-visit follow-up'
        ],
        outcomes: [
            'Architect a site visit that naturally progresses toward an immediate close.'
        ],
        topics: [
            { week: 'Day 1', title: 'Preparation', desc: 'Pre-visit planning and structure' },
            { week: 'Day 2', title: 'On-Site Execution', desc: 'The walkthrough and reading buyer signals' },
            { week: 'Day 3', title: 'Follow-Through', desc: 'Post-visit tracking and next-step actions' }
        ],
    },
    {
        id: 14,
        title: 'Objection Handling Fundamentals',
        icon: <ShieldAlert size={28} />,
        tagline: 'Deflect and Re-engage',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Sales Tactics',
        overview: 'Master anticipating and tackling common objections through listening, acknowledgment, structured responses, and confidence control.',
        highlights: [
            'Common objections',
            'Listening & acknowledgment',
            'Clear response structure',
            'Confidence control'
        ],
        outcomes: [
            'Disarm clients smoothly when confronted with friction or doubt.'
        ],
        topics: [
            { week: 'Day 1', title: 'Standard Objections', desc: 'The most common frictions in real estate' },
            { week: 'Day 2', title: 'Response Structures', desc: 'Acknowledging and confidently controlling the pivot' }
        ],
    },
    {
        id: 15,
        title: 'Basic Negotiation Skills',
        icon: <Scale size={28} />,
        tagline: 'Protect Maximum Value',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Sales Psychology',
        overview: 'Establish a win-win mindset, practice value protection, and efficiently handle discount discussions without eroding trust or margin.',
        highlights: [
            'Win-win mindset',
            'Value protection',
            'Handling discount discussions'
        ],
        outcomes: [
            'Negotiate without yielding core profitability.'
        ],
        topics: [
            { week: 'Day 1', title: 'Mindset & Value', desc: 'Establishing value boundaries early' },
            { week: 'Day 2', title: 'Discounts', desc: 'Handling and redirecting price drops' }
        ],
    },
    {
        id: 16,
        title: 'Funnel Discipline & CRM Basics',
        icon: <Database size={28} />,
        tagline: 'Organize Your Success',
        duration: '2 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Operations',
        overview: 'Implement "TOE - ORGANIZE". Master lead stage tracking, prioritization techniques, and stringent follow-up discipline via CRM.',
        highlights: [
            'Lead stage clarity',
            'Prioritization',
            'Follow-up discipline'
        ],
        outcomes: [
            'Never drop a lead organically again due to operational indiscipline.'
        ],
        topics: [
            { week: 'Day 1', title: 'Stages & Priority', desc: 'Mapping lead stages and prioritizing time' },
            { week: 'Day 2', title: 'CRM Routines', desc: 'Building unbreakable operational discipline' }
        ],
    },
    {
        id: 17,
        title: 'Closing Techniques & Decision Acceleration',
        icon: <Zap size={28} />,
        tagline: 'Force the Action',
        duration: '2 Days',
        level: 'Advanced',
        eligibility: 'Freshers',
        category: 'Sales Tactics',
        overview: 'Utilize "TOE - ENGAGE Acceleration". Spot final buying signals, utilize summary closes, option closes, and execute the booking transition.',
        highlights: [
            'Buying signals',
            'Summary close',
            'Option close',
            'Booking transition'
        ],
        outcomes: [
            'Accelerate the timeline from consideration to immediate signing.'
        ],
        topics: [
            { week: 'Day 1', title: 'The Tipping Point', desc: 'Recognizing absolute buying readiness signals' },
            { week: 'Day 2', title: 'Closing Types', desc: 'Summary options and the ultimate transition' }
        ],
    },
    {
        id: 18,
        title: 'Transaction Execution & Documentation',
        icon: <FileText size={28} />,
        tagline: 'Execute Flawlessly',
        duration: '3 Days',
        level: 'Intermediate',
        eligibility: 'Freshers',
        category: 'Legal',
        overview: 'Learn the exact fundamentals of the booking process, agreements, loan basics, and the flow of official registration.',
        highlights: [
            'Booking process',
            'Agreement overview',
            'Loan basics',
            'Registration flow'
        ],
        outcomes: [
            'Process a finalized deal thoroughly from token to deed.'
        ],
        topics: [
            { week: 'Day 1', title: 'Booking to Agreement', desc: 'The transition from yes to paper' },
            { week: 'Day 2', title: 'Finance Flow', desc: 'Interacting with basic loan processing' },
            { week: 'Day 3', title: 'Registration', desc: 'The final flow of government registration' }
        ],
    },
    {
        id: 19,
        title: 'Post-Sale Relationship Handling',
        icon: <HeartHandshake size={28} />,
        tagline: 'Generate Referrals & Retention',
        duration: '2 Days',
        level: 'Beginner',
        eligibility: 'Freshers',
        category: 'Advisory',
        overview: 'Manage handover communication cleanly, instigate repeat business loops, and deliver unparalleled professional client management.',
        highlights: [
            'Handover communication',
            'Repeat business',
            'Professional client management'
        ],
        outcomes: [
            'Transform a one-time buyer into a lifetime referral mechanism.'
        ],
        topics: [
            { week: 'Day 1', title: 'The Handover', desc: 'Executing professional, warm handovers' },
            { week: 'Day 2', title: 'The Farm', desc: 'Generating repeat business and managing relationships' }
        ],
    },
    {
        id: 20,
        title: 'Career Pathways in Real Estate',
        icon: <Briefcase size={28} />,
        tagline: 'Design Your Future',
        duration: '3 Days',
        level: 'Beginner',
        eligibility: 'Freshers',
        category: 'Foundation',
        overview: 'Explore the Employment Track (corporate structures, incentives), the Freelancing Track (Residential, Commercial, Investments), and Personal Branding dynamics.',
        highlights: [
            'Builder payroll model vs Freelancing',
            'Compensation & incentive logic',
            'Advisory niches: Residential vs Commercial vs Land',
            'Personal identity & reputation building'
        ],
        outcomes: [
            'Map a strict, 5-year personal career trajectory within the industry ecosystem.'
        ],
        topics: [
            { week: 'Day 1', title: 'Employment vs Freelance', desc: 'Structures, limitations, and advantages of both routes' },
            { week: 'Day 2', title: 'Specialty Niches', desc: 'Residential vs Commercial vs Appreciation Advisory' },
            { week: 'Day 3', title: 'Personal Brand', desc: 'Digital presence, authority, and positioning' }
        ],
    },
    {
        id: 21,
        title: 'Industry Masterclasses & Performance',
        icon: <Mic2 size={28} />,
        tagline: 'Live Expert Mentoring',
        duration: '4 Days',
        level: 'Advanced',
        eligibility: 'Freshers',
        category: 'Specialized Advisory',
        overview: 'Engage with industry leaders. Topics include developer expectations, real-world builder relationship management, and live site visit mirroring.',
        highlights: [
            'Developer & Sales Leadership Interaction',
            'Expectations and common industry mistakes',
            'Channel Partner & Freelancer Exposure',
            'Site Visit Mirroring & Live Observation'
        ],
        outcomes: [
            'Mirror live performance norms and decode leader-level execution expectations.'
        ],
        topics: [
            { week: 'Day 1', title: 'Developer Interaction', desc: 'Expectations vs Realities with leadership' },
            { week: 'Day 2', title: 'Partner Models', desc: 'Real exposure to inventory discipline and networking' },
            { week: 'Day 3', title: 'Site Mirroring', desc: 'Live observation of matching body language and energy' },
            { week: 'Day 4', title: 'Field Debrief', desc: 'Group analysis of live observation tasks' }
        ],
    },
    {
        id: 22,
        title: 'Placement Assistance & Career Support',
        icon: <Rocket size={28} />,
        tagline: 'Launch Your Business or Job',
        duration: '5 Days',
        level: 'Advanced',
        eligibility: 'Freshers',
        category: 'Advisory',
        overview: 'Complete career acceleration spanning resume refinement, mock interviews, developer interview scheduling, or intensive freelance onboarding support.',
        highlights: [
            'Resume refinement & mock interviews',
            'Hiring & placement coordination',
            'Curated project onboarding for freelancers',
            'Lead generation & deal-closing guidance'
        ],
        outcomes: [
            'Transition smoothly from trainee to employed executive or active freelancer.'
        ],
        topics: [
            { week: 'Day 1', title: 'Resume & Interviews', desc: 'Employment prep and staging' },
            { week: 'Day 2', title: 'Hiring Coordination', desc: 'Scheduling and managing interviews directly' },
            { week: 'Day 3', title: 'Freelancer Tools', desc: 'Project onboarding and compliance frameworks' },
            { week: 'Day 4', title: 'Lead Gen Roadmap', desc: 'Starting your independent acquisition machine' },
            { week: 'Day 5', title: 'First Deal Support', desc: 'Safety-nets and guidance for early-stage closures' }
        ],
    }
];

export default modulesList;
