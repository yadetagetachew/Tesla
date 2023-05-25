import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Banner>
      Receive 3 years unlimited free Supercharging. Finance your purchase for as low as 3.99%. <a href="https://www.tesla.com/models/design#overview">Learn more</a>
    </Banner>
  )
}

export default Header


const Banner = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`