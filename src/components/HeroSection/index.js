import React, {useState} from 'react'
import Axios from 'axios'
import {
    HeroContainer,
    HeroDetails,
    HeroH1,
    Hero2H1,
    HeroP,
    Search,
    SearchOne,
    SearchTwo,
    Button
} from './HeroElement'

const HeroSection = () => {

    return (
        <div>
            <HeroContainer>
                <HeroDetails>
                    <HeroH1>  Get The <span style={{color: "#260A81"}}> Right Job </span></HeroH1>
                    <Hero2H1>You Deserve</Hero2H1>
                    <HeroP>This is for searching for available jobs</HeroP>
                    <Search>
                        <SearchOne placeholder="Job type"  />
                        <SearchTwo placeholder="Your city" />
                        <Button > Search </Button>
                    </Search>
                </HeroDetails>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
