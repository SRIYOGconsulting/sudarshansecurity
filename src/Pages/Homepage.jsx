import React from 'react'
import MainImage from '../MyComponent/MainImage'
import Nav from '../MyComponent/Nav'
import Discover from '../MyComponent/Discover'

import TestimonialCarousel from '../MyComponent/Testomonial'
import OurCommitment from '../MyComponent/OurCommitment'
import Footer from '../MyComponent/Footer'


export default function Homepage() {
  return (
    <div>
      
      <MainImage/>
      <Discover/>
      <TestimonialCarousel/>
      <OurCommitment/>
      
    </div>
  )
}
