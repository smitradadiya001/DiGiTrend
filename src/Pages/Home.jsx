import React from 'react'

import Hero from '../Component/Hero'

import Third from '../Component/Third'
import FeatureCards from '../Component/Feature'
import SpiralBrands from '../Component/Spiral'
import CurvedImageScroll from '../Component/Graphics'
import ServicesComponent from '../Component/Service'
import OurWork from '../Component/OurWork'
import ReviewSection from '../Component/Review'
import Client from '../Component/Client'
import FAQSection from '../Component/FAQ'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'




function Home() {
  return (
    <>
      <Hero id="hero" />
      <main className="flex flex-col gap-8 sm:gap-10 md:gap-0">
         <Third /> 
        <section>
          <FeatureCards id="features" />
        </section>
        <SpiralBrands id="partners" />
        <CurvedImageScroll id="design" />
        <ServicesComponent id="services" />
        <OurWork id="work" />
        <ReviewSection id="review" />
        <Contact id="contact" />
        <Client id="client_talk" />
        <FAQSection id="faqs" />
        <Footer />
      </main>


    </>
  )
}

export default Home
