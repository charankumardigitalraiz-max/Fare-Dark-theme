import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "Is this training practical or just theoretical?",
        answer: "Our training is 100% result-oriented and practical. We focus on real-world scenarios, site visit conversions, and aggressive sales psychology rather than just classroom theory."
    },
    {
        question: "Do you provide placement support after the course?",
        answer: "Yes, we offer elite placement support with direct recruitment links to top-tier developers and real estate firms across residential and commercial sectors."
    },
    {
        question: "Is the syllabus updated for current RERA laws?",
        answer: "Absolutely. Our curriculum covers all deep technical compliance and RERA legalities to ensure you are fully equipped for modern real estate transactions."
    },
    {
        question: "Can I join as a complete beginner?",
        answer: "Yes, our Foundation & Ecosystem module is designed specifically for beginners to build a strong base before moving into advanced sales and advisory modules."
    },
    {
        question: "Are the instructors industry experts?",
        answer: "Learn directly from seasoned real estate industry experts who have years of experience in high-ticket negotiations and large-scale project execution."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item-wrapper ${isOpen ? 'active' : ''}`}>
            <button className="faq-trigger" onClick={onClick}>
                <div className="faq-question-content">
                    <HelpCircle size={20} className="faq-icon-lead" />
                    <span className="faq-question-text">{question}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={20} className="faq-chevron" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="faq-answer-container"
                    >
                        <div className="faq-answer-inner">
                            <p>{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="faq-header mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="modern-badge mb-6"
                    >
                        Questions & Answers
                    </motion.span>
                    <h2 className="luxury-title text-4xl">Common <span className="gold-text">Queries</span></h2>
                </div>

                <div className="faq-container-modern">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
