import React from 'react'
import {
    FooterContainer,
    FooterBelow,
    FooterElement,
    FooterCopy,
    FooterIcon,
    SocialIconLink,
    FooterCard,
    FooterH2,
    FooterP,
    FooterHrDiv,
    FooterHr
} from './FooterElement'
import {
    FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterElement>
                    <FooterCard>
                        <FooterH2>About Us</FooterH2>
                        <FooterP>How it works</FooterP>
                        <FooterP>Testimonies</FooterP>
                        <FooterP>Carrers</FooterP>
                        <FooterP>Investors</FooterP>
                    </FooterCard>
                    <FooterCard>
                        <FooterH2>Contact Us</FooterH2>
                        <FooterP>Contact</FooterP>
                        <FooterP>Support</FooterP>
                        <FooterP>Fax</FooterP>
                        <FooterP>Destinations</FooterP>
                    </FooterCard>
                    <FooterCard>
                        <FooterH2>Video</FooterH2>
                        <FooterP>Submit Video</FooterP>
                        <FooterP>Influencer</FooterP>
                        <FooterP>Demo</FooterP>
                        <FooterP>Services</FooterP>
                    </FooterCard>
                    <FooterCard>
                        <FooterH2>Social Media</FooterH2>
                        <FooterP>Instagram</FooterP>
                        <FooterP>Facebook</FooterP>
                        <FooterP>Linkedin</FooterP>
                        <FooterP>Twitter</FooterP>
                    </FooterCard>
                </FooterElement>
                <FooterBelow>
                    <FooterIcon>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaLinkedin />
                        </SocialIconLink>
                    </FooterIcon>
                    <FooterCopy>Bamidele copyright</FooterCopy>
                </FooterBelow>
            </FooterContainer>
        </div>
    )
}

export default Footer
