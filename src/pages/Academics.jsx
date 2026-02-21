import React from 'react'
import AcademicsHero from '../components/academics/AcademicsHero'
import AcademicPhilosophy from '../components/academics/AcademicPhiloshopy'
import AcademicJourneyOverview from '../components/academics/AcademicJourneyOverview'
import AssessmentSystem from '../components/academics/AssessmentSystem'
import AcademicSupport from '../components/academics/AcademicSupport'
import FacilitiesForAcademics from '../components/academics/FacilitiesForAcademics'
import ResultsSnapshot from '../components/academics/ResultsSnapshot'
import AcademicsCTASection from '../components/academics/AcademicsCTASection'
import AcademicLevelsSection from '../components/academics/AcademicLevelsSection'

const Academics = () => {
  return (
    <div>
      <AcademicsHero/>
      <AcademicPhilosophy/>
      <AcademicJourneyOverview/>
      <AcademicLevelsSection/>
     
      <AssessmentSystem/>
      <AcademicSupport/>
      <FacilitiesForAcademics/>
      <ResultsSnapshot/>
      <AcademicsCTASection/>
    </div>
  )
}

export default Academics