import React from 'react'
import styled from 'styled-components'

function Second_header() {
  return (
    <div>
      <BannerContainer> 
      Interior of the Future
      </BannerContainer>
    </div>
  )
}

export default Second_header

const BannerContainer = styled.div`
    height: 200px;
    width: 100%;
    font-size: 28px;
    letter-spacing: .5px;
    font-weight: 600;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`