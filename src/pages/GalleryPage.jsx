import React from 'react';
import { motion } from 'framer-motion';
import './GalleryPage.css';

const GalleryPage = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
            title: "Elite Corporate Campus",
            category: "Institute"
        },
        {
            url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
            title: "Our Expert Faculty",
            category: "Staff Members"
        },
        {
            url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
            title: "Celebration Selfie",
            category: "Student Life"
        },
        {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            title: "Institutional Infrastructure",
            category: "Institute"
        },
        {
            url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
            title: "Senior Mentors Meet",
            category: "Staff Members"
        },
        {
            url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
            title: "Group Learning Selfie",
            category: "Student Life"
        }
    ];

    return (
        <div className="gallery-page section-padding">
            <div className="container">
                <header className="gallery-header text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="modern-badge mb-6"
                    >
                        Visual Experience
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="luxury-title text-6xl mb-6"
                    >
                        Inside the <span className="gold-text">Elite</span> Campus
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-text-muted max-w-2xl mx-auto text-lg"
                    >
                        Glimpse into our world of high-stakes real estate training,
                        where theoretical learning meets ground-level execution.
                    </motion.p>
                </header>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="gallery-item-wrapper"
                        >
                            <div className="gallery-img-container">
                                <img src={img.url} alt={img.title} className="gallery-img" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <span className="gallery-category">{img.category}</span>
                                        <h3 className="gallery-img-title">{img.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
