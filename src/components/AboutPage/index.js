import React from 'react'
import {
    AboutContainer,
    AboutWrapper,
    HeadLine,
    Col1,
    Col2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Button,
    ImgWrap,
    Img
} from './AboutElement'
import image1 from '../../Images/landing.jpg';


const TestimonyPage = ({imgStart, getStarted, topLine, lightShadow, headLine, description, buttonLabel, img, lightBg, lightText, darkText}) => {


    return (
        <div>
           <AboutContainer lightBg={lightBg}>
           <HeadLine>{getStarted}</HeadLine>
                <AboutWrapper imgStart={imgStart}>
    
                    
                        <Col1>
                            <TextWrapper lightShadow={lightShadow} >
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button>
                                    {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Col2>
                    
                </AboutWrapper>
      </AboutContainer>

        </div>
    )
}

export default TestimonyPage
