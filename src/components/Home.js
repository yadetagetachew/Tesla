import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import SecondHeader from './SecondHeader'
import ImageSection from './ImageSection'

function Home() {
  return (
    <Container>
      {/* Home */}
      <Section 
      title = "Model S"
      discription = "Plaid"
      backgorundImg = "model-s.jpg"
      leftBtnText = "Order Now"
      rightBtnText = "Demo Drive"
      speed1 = "396 mi"
      speed2 = '1.99 s'
      speed3 = '200 mph'
      discription1 = "Range (EPA est.)"
      discription2 = "0-60 mph"
      discription3 = "Top Speed"
      />
      <SecondHeader />
      <ImageSection />
        {/* carosel goes here */}
        {/* car discription in a grid of 6 (three per row) goes here */}
      <Section 
      title = ""
      discription = ""
      backgorundImg = "Model-S-Performance.jpg"
      leftBtnText = ""
      rightBtnText = ""
      speed1 = "1,020hp"
      speed2 = '9.23 s'
      speed3 = '1.99 s'
      discription1 = "Peak Power"
      discription2 = "@155 mph 1/4 mile"
      discription3 = "0-60 mph"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`