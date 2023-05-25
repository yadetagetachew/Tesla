import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>
            <IteamText>
                <h1>Model S</h1>
                <p>Plaid</p>
            </IteamText>
            <Speaks>

            </Speaks>
            <Buttons>
            <ButtonGrp>
                <LeftButton>
                    Order Now
                </LeftButton>
                <RightButton>
                    Demo Drive
                </RightButton>
            </ButtonGrp>
            </Buttons>
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const ButtonGrp  =styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 4rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const IteamText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const LeftButton = styled.div`
    height: 40px;
    width: 250px;
    border-radius: 5px;
    background-color: white;
    color: black;
    font-size: 14px;
    text-transfom: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    border: 4px solid white;
    padding: 4px 24px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background-color: transparent;
    color: white;
`
const Speaks = styled.div``

const Buttons = styled.div``