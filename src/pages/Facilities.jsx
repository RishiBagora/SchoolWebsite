import React from 'react'
import FacilitiesHero from '../components/facilities/FacilitiesHero'
import CampusOverviewSection from '../components/facilities/CampusOverviewSection'
import SmartClassroomsSection from '../components/facilities/SmartClassroomsSection'
import ScienceLabsSection from '../components/facilities/ScienceLabsSection'
import ComputerLabSection from '../components/facilities/ComputerLabSection'
import LibrarySection from '../components/facilities/LibrarySection'
import SportsFacilitiesSection from '../components/facilities/SportsFacilitiesSection'
import SafetyAndSecuritySection from '../components/facilities/SafetySection'
import TransportFacilitySection from '../components/facilities/TransportInfo'
import FinalFacilitiesCTA from '../components/facilities/FinalFacilitiesCTA'

const Facilities = () => {
  return (
    <div>
      <FacilitiesHero/>
      <CampusOverviewSection/>
      <SmartClassroomsSection/>
      <ScienceLabsSection/>
      <ComputerLabSection/>
      <LibrarySection/>
      <SportsFacilitiesSection/>
      <SafetyAndSecuritySection/>
      <TransportFacilitySection/>
      <FinalFacilitiesCTA/>
    </div>
  )
}

export default Facilities