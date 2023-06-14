import React from 'react'
import styled from 'styled-components'

function Section(
    {   title, 
        discription, 
        leftBtnText, 
        rightBtnText, 
        backgorundImg,
        speed1,
        speed2,
        speed3,
        discription1,
        discription2,
        discription3,
    }){
    return (
        <Wrap bgImage={backgorundImg}>
            <IteamText>
                <h1>{title}</h1>
                <p>{discription}</p>
            </IteamText>
            <Buttons>
                <Speaks>
                    <SpeedMetrics>{speed1}</SpeedMetrics>
                    <SpeedMetrics>{speed2}</SpeedMetrics>
                    <SpeedMetrics>{speed3}</SpeedMetrics>
                    <SpeedDiscription>{discription1}</SpeedDiscription>
                    <SpeedDiscription>{discription2}</SpeedDiscription>
                    <SpeedDiscription>{discription3}</SpeedDiscription>
                </Speaks>
                <ButtonGrp>
                {leftBtnText &&
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>   
                }
                        {rightBtnText && 
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                    }
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
    background-image: ${props => `url('/images/${props.bgImage}')`};
`
const ButtonGrp = styled.div`
    display: flex;
    gap: 15px;
    margin: 1rem 14rem;
    @media (max-width: 650px) {
        flex-direction: column;
    }
`

const IteamText = styled.h1`
    padding-top: 15vh;
    text-align: center;
    font-weight: inherit;
    font-size: 1.3rem;
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
    font-weight: 700;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background-color: transparent;
    color: white;
`
const Speaks = styled.div`
    display: grid;
    grid-template-rows: 35px 35px;
    grid-template-columns: 160px 160px 160px;
`

const SpeedMetrics = styled.div`
    font-size: 23px;
    font-weight: 700;
    color: white;
`

const Buttons = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction:column;
    align-items: center;
`

const SpeedDiscription = styled.div`
    font-size: 13px;
    font-weight: lighter;
    color: white;
`