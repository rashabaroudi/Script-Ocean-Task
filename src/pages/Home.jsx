import React from 'react'
import Headline from '../components/Headline/Headline'
import Hero from '../components/Hero/Hero'
import WithEaseSection from '../components/WithEaseSection/WithEaseSection'
import PortfolioSection from '../components/Portfolio/PortfolioSection'
import CreativePortfolio from '../components/CreativePortfolio/CreativePortfolio'
import Blogging from '../components/BloggingSection/Blogging'

import CarouselSection from '../components/CardsCarousel/CarouselSection'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <div className='bg-slate mx-auto flex flex-col justify-center items-center gap-[80px]  '>
      <Hero/>
      <Headline title='Discover The Power of Ai' paragraph='Create stunning, professional designs effortlessly using our AI-driven tools. Let the AI handle the heavy lifting, so you can focus on your vision' style='text-center' />
      <WithEaseSection/>
      <PortfolioSection/>
      <Headline title='Explore Our AI-Powered Themes' />
      <CreativePortfolio/>
      <Blogging/>
      <CarouselSection/>
      <Footer/>

    </div>
  )
}

export default Home
