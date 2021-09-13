import styled from "styled-components";

export const AboutContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#e5e4e2')};

`
export const AboutWrapper = styled.div`

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:  ${({imgStart}) => (imgStart ? `"Col2
        Col1"` : `"Col1 Col2"`)};
        justify-content: center;

        @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1.5fr 1.5fr;
            grid-template-areas: 
            "Col2"
            "Col1"
            ;
        }
        
`
    

export const Col1 = styled.div`
    padding: 0 15px;
    grid-area: Col1;


`

export const Col2 = styled.div`
    padding: 4rem 0 0 4rem;
    grid-area: Col2;
    @media only screen and (max-width: 600px) {
        padding: 2rem 1rem 0 2rem;
    }

`
export const TextWrapper = styled.div`
    margin: 4rem 0 3rem 4rem;
    transition: all 0.2s ease-in-out;
    box-shadow: ${({lightShadow}) => (lightShadow ? '5px 5px 50px 5px #f9f9f9' : '5px 5px 50px 5px #e5e4e2')};
    max-width: 540px;
    padding: 4rem 4rem 6rem 4rem;
    border-radius: 3rem;
    @media only screen and (max-width: 600px) {
        margin: 4rem 2rem 2rem 2rem;
        padding: 4rem 4rem 2rem 4rem;
    }

`
export const HeadLine = styled.h1`
        color: #260A81;
        font-size: 40px;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        padding: 2rem 0 1rem 0;
        @media only screen and (max-width: 600px) {
            font-size: 30px;
        }



`
export const TopLine = styled.p`
        color: #260A81;
        font-size: 20px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        margin-bottom: 16px;
        @media only screen and (max-width: 600px) {
            font-size: 18px;
        }



`
export const Heading = styled.h1`
        margin-bottom: 24px;
        font-size: 48px;
        line-height: 1.1;
        font-weight: 600;
        color: ${({lightText}) => 
        (lightText ? '#fff' : '#010606')};
        @media only screen and (max-width: 600px) {
            font-size: 36px;
        }

`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 22px;
line-height: 24px;
color: ${({darkText}) => 
        (darkText ? '#010606' : '#fff')};
        @media only screen and (max-width: 600px) {
            font-size: 20px;
        }
`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;

`

export const Button = styled.button`
    border: none;
    margin-top: 30px;
    background-color: #260A81;
    border-radius: 10px;
    cursor: pointer;
    padding: 16px;
    font-size: 20px;
    color: white;
    font-weight: bold;
    outline: none;

    &:hover {
        color: #260A81;
        background: white;
        border: solid #260A81;
        transition: all 0.2s ease-in-out;
    }
    @media only screen and (max-width: 600px) {
        padding: 14px;
        font-size: 18px;
    }

`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    @media only screen and (max-width: 600px) {
        max-width: 450px;
        margin: 0 2rem 0 1.5rem;
        height: 80%;
       
    }
`

export const Img = styled.img`
    width: 100%;
    height: 80%;
    padding-right: 0;
    @media only screen and (max-width: 600px) {
        height: 100%;
    }
`