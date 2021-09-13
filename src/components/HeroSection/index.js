import React, {useState} from 'react'
import Axios from 'axios'
import {
    HeroContainer,
    HeroDetails,
    HeroH1,
    Hero2H1,
    HeroP,
    Left,
    Right,
    SearchImage,
    Button
} from './HeroElement'
import image from '../../Images/search.svg';

const HeroSection = () => {

    return (
        <div>
            <HeroContainer>
                <Left className="left">
                    <HeroDetails>
                        <HeroH1>  Get The <span style={{color: "#260A81"}}> Right Job </span></HeroH1>
                        <Hero2H1>You Deserve</Hero2H1>
                        <HeroP>This is page searching for available jobs</HeroP>
                        
                    </HeroDetails>
                </Left>
                <Right className="right">
                    <SearchImage src={image}/>
                </Right>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
