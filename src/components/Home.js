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

      />
      <SecondHeader />
      <ImageSection />
      {/* <Section 
        title = ""
        discription = ""
        backgorundImg = "new-interior.jpg"
        leftBtnText = ""
        rightBtnText = ""
        speedspeaks = ""
      />
      <Section /> */}

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`