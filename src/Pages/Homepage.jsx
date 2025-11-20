import React from 'react'
import MainImage from '../MyComponent/MainImage'
import Nav from '../MyComponent/Nav'
import Discover from '../MyComponent/Discover'
import Image from '../MyComponent/Image'
import TestimonialCarousel from '../MyComponent/Testomonial'


export default function Homepage() {
  return (
    <div>
      <Nav/>
      <MainImage/>
      <Discover/>
      <Image/>
      <TestimonialCarousel/>
    </div>
  )
}
