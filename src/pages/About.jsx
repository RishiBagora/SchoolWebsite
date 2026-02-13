import React from 'react'
import AboutIntro from '../components/about/AboutIntro';
import AboutHero from '../components/about/AboutHero';
import VisionMission from '../components/about/VissionMission';
import MessageFromPrincipal from '../components/about/MessageFromPrincipal';
import OurApproach from '../components/about/OurApproach';
import CampusGalleryPreview from '../components/about/CampusGalleryPreview';
import WhyGDA from '../components/about/WhyGDA';

const About = () => {
  return (
    <div>
    <AboutHero/>
    <AboutIntro/>
    <VisionMission/>
    <MessageFromPrincipal/>
    <OurApproach/>
    <CampusGalleryPreview/>
    <WhyGDA/>
    </div>
  )
}

export default About