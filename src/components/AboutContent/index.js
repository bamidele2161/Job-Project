import React from 'react' 
import image from '../../Images/about2.svg';
import {
  AboutContainer,
  AboutWrapper,
  Col1,
  Col2,
  LandingImg,
  LandingH1,
  LandingP,
  LandingButton
} from '../../components/AboutContent/AboutContentElement'
const AboutContent = () => {
  return (
    <div>
      <AboutContainer>
        <AboutWrapper>
          <Col1>
                    <LandingH1>WHO WE ARE </LandingH1>
                    <LandingH1>BAMMY provides available UK jobs</LandingH1>
                    <LandingH1></LandingH1>
                    <LandingP>Find jobs that match your interests with us. <br/> Bammy provides a place to find your freelance job</LandingP>
                    <LandingButton>Get Started</LandingButton>
          </Col1>
          <Col2>
            <LandingImg src={image}/>
          </Col2>
        </AboutWrapper>
      </AboutContainer>
    </div>
  )
}

export default AboutContent
