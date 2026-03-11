import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Modules from '../components/Modules';
import Edge from '../components/Edge';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import GalleryPreview from '../components/GalleryPreview';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Modules />
            <Edge />
            <WhyChooseUs />
            <FAQ />
            <GalleryPreview />
            <section className="home-contact-section section-padding">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <ContactForm centered={true} />
                </div>
            </section>
        </>
    );
};

export default HomePage;
