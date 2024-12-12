import React from 'react'
import Hero from '../Components/Home/Hero'
import CounsellingSection from '../Components/Home/CounsellingSection'
import WhyUsSection from '../Components/Home/WhyUsSection'
import NewsSection from '../Components/Home/NewsSection'
import Stats from '../Components/Home/Stats'
import Testimonials from '../Components/Home/Testimonials'
import ContactBanner from '../Components/Home/ContactBanner'
import Footer from '../Components/Home/Footer'
import Navbar from '../Components/Home/Navbar'

const Home = () => {
    return (
        <>
        <Navbar/>
            <Hero />
            <CounsellingSection />
            <WhyUsSection />
            <NewsSection />
            <Stats />
            <Testimonials />
            <ContactBanner/>
            <Footer/>
        </>
    )
}

export default Home