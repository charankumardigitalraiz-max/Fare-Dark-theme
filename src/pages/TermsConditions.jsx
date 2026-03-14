import React from 'react';
import { motion } from 'framer-motion';
import './TermsConditions.css';

const TermsConditions = () => {
    return (
        <div className="legal-page section-padding">
            <div className="container">
                <header className="legal-header text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="modern-badge mb-6"
                    >
                        User Agreement
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="luxury-title text-4xl"
                    >
                        Terms & <span className="gold-text">Conditions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted max-w-2xl mx-auto text-lg"
                    >
                        The governing rules for the elite training experience at FARE REALITY.
                    </motion.p>
                </header>

                <div className="legal-content glass-effect">
                    <section className="legal-section">
                        <div className="section-number">01</div>
                        <h2 className="section-title">Program Enrollment</h2>
                        <p className="legal-text">
                            By enrolling in any FARE REALITY module, you agree to provide accurate, current,
                            and complete information. Enrollment is subject to approval based on our
                            elite standard requirements.
                        </p>
                    </section>

                    <section className="legal-section">
                        <div className="section-number">02</div>
                        <h2 className="section-title">Financial Obligation</h2>
                        <p className="legal-text">
                            All program fees are clearly stated during the enrollment process. Tuition is non-refundable
                            once you begin the offline training program,
                            except where required by law.
                        </p>
                    </section>

                    <section className="legal-section">
                        <div className="section-number">03</div>
                        <h2 className="section-title">Intellectual Property</h2>
                        <p className="legal-text">
                            All curriculum materials, sales frameworks, and proprietary real estate advisory
                            strategies are the exclusive property of FARE REALITY. Any unauthorized reproduction
                            or distribution is strictly prohibited.
                        </p>
                    </section>

                    <section className="legal-section">
                        <div className="section-number">04</div>
                        <h2 className="section-title">Code of Conduct</h2>
                        <p className="legal-text">
                            Members of our training community must maintain a high standard of professional ethics.
                            We reserve the right to terminate your enrollment for any individual whose behavior undermines
                            the integrity of our high-performance environment.
                        </p>
                    </section>

                    <section className="legal-section">
                        <div className="section-number">05</div>
                        <h2 className="section-title">Limitation of Liability</h2>
                        <p className="legal-text">
                            FARE REALITY provides educational training and advisory. While we prepare you for
                            elite execution, final business results depend on your own implementation and
                            prevailing market conditions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
