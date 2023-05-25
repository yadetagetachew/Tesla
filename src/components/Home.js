import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      {/* Home */}
      <Section 
      title = "Model S"
      discription = "Plaid"
      backgorundImg = "model-s.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Demo Drive"

      />
      <Section 
        title = ""
        discription = ""
        backgorundImg = "model-y.jpg"
        leftBtnText = ""
        rightBtnText = ""
      />
      <Section />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`