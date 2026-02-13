import React from 'react'
import AcademicsHero from '../components/academics/AcademicsHero'
import AcademicPhilosophy from '../components/academics/AcademicPhiloshopy'
import AcademicJourneyOverview from '../components/academics/AcademicJourneyOverview'
import PrePrimarySection from '../components/academics/PrePrimarySection'
import PrimarySection from '../components/academics/PrimarySection'
import MiddleSchoolSection from '../components/academics/MiddleSchoolSection'
import SecondarySection from '../components/academics/SecondarySection'
import SeniorSecondarySection from '../components/academics/SeniorSecondarySection'
import AssessmentSystem from '../components/academics/AssessmentSystem'
import AcademicSupport from '../components/academics/AcademicSupport'
import FacilitiesForAcademics from '../components/academics/FacilitiesForAcademics'
import ResultsSnapshot from '../components/academics/ResultsSnapshot'
import AcademicsCTASection from '../components/academics/AcademicsCTASection'

const Academics = () => {
  return (
    <div>
      <AcademicsHero/>
      <AcademicPhilosophy/>
      <AcademicJourneyOverview/>
      <PrePrimarySection/>
      <PrimarySection/>
      <MiddleSchoolSection/>
      <SecondarySection/>
      <SeniorSecondarySection/>
      <AssessmentSystem/>
      <AcademicSupport/>
      <FacilitiesForAcademics/>
      <ResultsSnapshot/>
      <AcademicsCTASection/>
    </div>
  )
}

export default Academics