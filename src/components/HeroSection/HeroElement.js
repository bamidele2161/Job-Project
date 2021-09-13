import styled from 'styled-components'

export const HeroContainer = styled.div`
    height: 500px;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    display: flex;
    @media only screen and (max-width: 600px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas: 
            "Left"
            "Right"
            ;
            height: 700px;
            
    }
`
export const Left = styled.div`
    width: 40%;
    height: 500px;
    padding: 0 0 0 5rem;
    @media only screen and (max-width: 600px) {
        grid-area: Left;
        width: 350px;
        height: 250px;
        margin-left: 1rem;
        padding: 0rem 2rem 0rem 0rem;
    }
`
export const Right = styled.div`
    
    width: 60%;
    height: 500px;
    @media only screen and (max-width: 600px) {
        grid-area: Right;

        width: 350px;
        height: 350px;
        margin-left: 3rem;
        padding:2rem 1rem 3rem 1rem;
    }
`
export const SearchImage = styled.img`
    width: 100%;
    height: 90%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-item: center;
    @media only screen and (max-width: 600px) {
        grid-area: Right;
    }
    
`
export const HeroDetails = styled.div`
    justify-content: center;
    padding: 5rem 0 2rem 2rem;

`

export const HeroH1 = styled.h1`
    width: 100%;
    font-size: 3rem;
    margin-top: 100px;
    @media only screen and (max-width: 600px) {
        font-size: 2.3rem;
        margin-top: 0px;
    }
`
export const Hero2H1 = styled.h1`
    width: 100%;
    font-size: 3rem;
    margin-bottom: 30px;
    @media only screen and (max-width: 600px) {
        font-size: 2.4rem;
        margin-top: 0px;
    }
`
export const HeroP = styled.p`
    width: 100%;
    font-size: 1.5rem;
    @media only screen and (max-width: 600px) {
        font-size: 1.3rem;
        margin-top: 0px;

    }
`
// export const Search = styled.div`
//     padding: 0 3rem;
//     display: flex;
//     margin-top: 4rem;
//     border-radius: 0.8rem;
//     box-shadow: 5px 5px 50px 5px #e5e4e2;
//     padding: 1.5rem;

    
// `
// export const SearchOne = styled.input`
// margin: 0 1rem;
// border-radius: 0.7rem;
// width: 250px;
// background: #e5e4e2;
// padding: 1rem;
// border: none;
// font-weight: bold;
// font-size: 18px;
// `
// export const SearchTwo = styled.input`
// margin: 0 1rem;
// border-radius: 0.7rem;
// border: none;
// background: #e5e4e2;
// width: 250px;
// padding: 1rem;
// font-weight: bold;
// font-size: 18px;
// `
// export const Button = styled.button`
// border-radius: 50px;
// padding: 3 2rem;
// width: 7rem;
// height: 3rem;
// cursor: pointer;
// color: white;
// background: #260A81;
// outline: none;
// white-space: nowrap;
// border: none;
// text-decoration: none;
// transition: all 0.2s ease-in-out;

// &:hover{
//     background: white;
//     color: #260A81;
//     border: solid #260A81;
// }

// `