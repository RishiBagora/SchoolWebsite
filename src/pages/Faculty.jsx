import React from 'react'
import FacultyHero from '../components/faculty/FacultyHero'
import FacultyIntroSection from '../components/faculty/FacultyIntroSection'
import LeadershipSection from '../components/faculty/LeadershipSection'
import TeachersGridSection from '../components/faculty/TeachersGridSection'
import TeachingApproachSection from '../components/faculty/TeachingApproachSection'
import FacultyCTA from '../components/faculty/FacultyCTA'

const Faculty = () => {
  return (
    <div>
      <FacultyHero/>
      <FacultyIntroSection/>
      <LeadershipSection/>
      <TeachersGridSection/>
      <TeachingApproachSection/>
      <FacultyCTA/>
    </div>
  )
}

export default Faculty