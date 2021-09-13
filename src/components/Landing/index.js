import React from 'react';
import image from '../../Images/about.svg';
import {
    LandingContainer,
    LandingLeft,
    LandingRight,
    LandingImg,
    LandingH1,
    LandingP,
    LandingButton
} from './LandingElement'
const Landing = () => {
    return (
        <div>
            <LandingContainer>
                <LandingLeft> 
                    <LandingH1>Find a Job With </LandingH1>
                    <LandingH1>Your Interests and</LandingH1>
                    <LandingH1>Abilities</LandingH1>
                    <LandingP>Find jobs that match your interests with us. <br/> Bammy provides a place to find your freelance job</LandingP>
                    <LandingButton>Get Started</LandingButton>
                </LandingLeft>
                <LandingRight> 
                    <LandingImg src={image}/>
                </LandingRight>
            </LandingContainer>
        </div>
    )
}

export default Landing
