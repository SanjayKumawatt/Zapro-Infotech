import React from 'react'
import Hero from '../Components/Hero'
import HomeSections from '../Components/HomepageScitons'
import CTASection from '../Components/CTASection'
import UseCasesAndCTA from '../Components/UseCaseCTA'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HomeSections/>
        <UseCasesAndCTA/>
        {/* <CTASection/> */}
        
    </div>
  )
}

export default Home