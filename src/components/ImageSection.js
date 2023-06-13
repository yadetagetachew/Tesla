import React from 'react'
import styled from 'styled-components'


function ImageSection() {
    return(
        <Image> </Image>
    )
}

export default ImageSection

const Image = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    background-image: url('/images/new-interior.jpg');
`