import React from 'react'
import ResultsHero from '../components/results/ResultHero'
import ResultsStatsSection from '../components/results/ResultsStatsSection'
import ToppersSection from '../components/results/ToppersSection'
import BoardResultsTableSection from '../components/results/BoardResultsTableSection'
import AcademicAchievementsSection from '../components/results/AcademicAchievementsSection'
import ResultsCTA from '../components/results/ResultsCTA'

const Results = () => {
  return (
    <div>
      <ResultsHero/>
      <ResultsStatsSection/>
      <ToppersSection/>
      <BoardResultsTableSection/>
      <AcademicAchievementsSection/>
      <ResultsCTA/>
    </div>
  )
}

export default Results