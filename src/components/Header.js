import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Banner>
      <p>3 Years Unlimited Free Supercharging<span>  With</span><a href="https://www.tesla.com/models/design#overview"> Model S purchase</a></p>
    </Banner>
  )
}

export default Header


export const Banner = styled.p`
    height: 3rem;
    margin: 0px 60px;
    display: flex;
    font-size: 15px;
    font-weight: inherit;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        height: 4.5rem;
    }
    span{
      margin-left: 5px;
    }
`