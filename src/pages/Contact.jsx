import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactInfoSection from '../components/contact/ContactInfoSection'
import ContactFormSection from '../components/contact/ContactFormSection'
import MapSection from '../components/contact/MapSection'
import QuickContactCTA from '../components/contact/QuickContactCTA'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactInfoSection/>
      <ContactFormSection/>
      <MapSection/>
      <QuickContactCTA/>
    </div>
  )
}

export default Contact