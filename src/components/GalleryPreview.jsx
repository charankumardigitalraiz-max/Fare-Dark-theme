import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './GalleryPreview.css';

const GalleryPreview = () => {
    const previewImages = [
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
        }
    ];

    return (
        <section className="gallery-preview-section section-padding">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="modern-badge mb-4"
                    >
                        Our Campus Life
                    </motion.span>
                    <h2 className="luxury-title text-3xl mb-6">Visual <span className="gold-text">Highlights</span></h2>
                </div>

                <div className="preview-grid">
                    {previewImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="preview-item-wrapper"
                        >
                            <img src={img.url} alt={img.title} className="preview-img" />
                            <div className="preview-overlay">
                                <span className="category-tag">{img.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '20px' }}>
                    <Link to="/gallery" className="btn-gold-outline">
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
