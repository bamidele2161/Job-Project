import React from 'react'
import {FaFacebook, FaTwitter, FaBeer, FaGg, FaChrome, FaCodepen, FaGitAlt} from 'react-icons/fa'
import {

    DetailsContainer,
    DetailsWrapper,
    DetailH1,
    Detail2H1,
    DetailsH2,
    DetailsCard,
    DetailsP,
    SocialIconLink
} from './DetailsElement'

const Details = () => {
    return (
        <div>
            <DetailsContainer>
                <DetailH1>
                    One Platform,
                </DetailH1>
                <Detail2H1>  Many <span style={{color: "#260A81"}}> Solution </span> </Detail2H1>
            <DetailsWrapper>
                <DetailsCard>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaTwitter />
                            </SocialIconLink>
                        <DetailsH2>Marketing & Communication</DetailsH2>
                        <DetailsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DetailsP>
                    </DetailsCard>

                    <DetailsCard>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaBeer />
                            </SocialIconLink>
                        <DetailsH2>Design & Development</DetailsH2>
                        <DetailsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DetailsP>
                    </DetailsCard>

                    <DetailsCard>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaCodepen />
                            </SocialIconLink>
                        <DetailsH2>Finance Management</DetailsH2>
                        <DetailsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DetailsP>
                    </DetailsCard>
            </DetailsWrapper>

            <DetailsWrapper>
                <DetailsCard>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        <DetailsH2>Armforce Guide & Security</DetailsH2>
                        <DetailsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DetailsP>
                    </DetailsCard>


                    <DetailsCard>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaCodepen />
                            </SocialIconLink>
                        <DetailsH2>Customer Support Care</DetailsH2>
                        <DetailsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DetailsP>
                    </DetailsCard>

                    <DetailsCard>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaGg />
                            </SocialIconLink>
                        <DetailsH2>Project Management</DetailsH2>
                        <DetailsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DetailsP>
                    </DetailsCard>
            </DetailsWrapper>

            </DetailsContainer>
        </div>
    )
}

export default Details
