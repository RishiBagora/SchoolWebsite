import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import HeroSection from '../components/home/HeroSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import StatsSection from '../components/home/StatsSection'
import AcademicsPreview from '../components/home/AcademicPreview'
import FacilitiesPreview from '../components/home/FacilitiePreview'
import ResultsHighlight from '../components/home/ResulHighlight'
import NewsEventsPreview from '../components/home/NewsEventsPreview'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      
      <StatsSection/>
      <AcademicsPreview/>
      <FacilitiesPreview/>
      <ResultsHighlight/>
      <NewsEventsPreview/>
      <Testimonials/>
      <CTASection/>
    </div>
  )
}

export default Home