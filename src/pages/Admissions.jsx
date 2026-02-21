import React from 'react'
import AdmissionsHero from '../components/admissions/AdmissionsHero'
import WhyJoinGDA from '../components/admissions/WhyJoinGDA'
import AdmissionProcess from '../components/admissions/AdmissionProcess'
import EligibilityCriteria from '../components/admissions/EligibilityCriteria'
import DocumentsRequired from '../components/admissions/DocumentsRequired'
import ImportantDates from '../components/admissions/ImportantDates'
import AdmissionFAQ from '../components/admissions/AdmissionFAQ'
import AdmissionFormCTA from '../components/admissions/AdmissionFormCTA'

const Admissions = () => {
  return (
    <div>
      <AdmissionsHero/>
      <WhyJoinGDA/>
      <AdmissionProcess/>
      <EligibilityCriteria/>
      <DocumentsRequired/>
      <ImportantDates/>
      <AdmissionFAQ/>
      <AdmissionFormCTA/>
    </div>
  )
}

export default Admissions