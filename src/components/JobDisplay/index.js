import React from 'react'
import image from '../../Images/landing.jpg';
import {

    JobsContainer,
    JobsWrapper,
    JobH1,
    Job2H1,
    JobsH2,
    JobsCard,
    JobsP,
    JobImage,
    JobApply
} from './JobDisplayElement'

const JobDisplay = () => {
    return (
        <div>
            <JobsContainer>
                <JobH1>
                    Available Jobs
                </JobH1>
                <Job2H1>   <span style={{color: "#260A81"}}>  </span> </Job2H1>
            <JobsWrapper>
                <JobsCard>
                            <JobImage src={image}/>
                        <JobsH2>Marketing & Communication</JobsH2>
                        <JobsP>We help reduce your fees and increase your overall revenue.</JobsP>
                        <JobApply>Ap</JobApply>
                    </JobsCard>

                    <JobsCard>
                    <JobImage src={image}/>
                        <JobsH2>Design & Development</JobsH2>
                        <JobsP>We help reduce your fees and increase your overall revenue.</JobsP>
                        <JobApply>Ap</JobApply>
                    </JobsCard>

                    <JobsCard>
                    <JobImage src={image}/>
                        <JobsH2>Human Research & Development</JobsH2>
                        <JobsP>We help reduce your fees and increase your overall revenue.</JobsP>
                        <JobApply>Ap</JobApply>
                    </JobsCard>

                    <JobsCard>
                    <JobImage src={image}/>
                        <JobsH2>Human Research & Development</JobsH2>
                        <JobsP>We help reduce your fees and increase your overall revenue.</JobsP>
                        <JobApply>Ap</JobApply>
                    </JobsCard>

            </JobsWrapper>

            <JobsWrapper>
                <JobsCard>
                <JobImage src={image}/>
                        <JobsH2>Armforce Guide & Security</JobsH2>
                        <JobsP>We help reduce your fees and increase your overall revenue.</JobsP>
                        <JobApply>Ap</JobApply>
                    </JobsCard>

                    <JobsCard>
                    <JobImage src={image}/>
                        <JobsH2>Business & Consulting</JobsH2>
                        <JobsP>We help reduce your fees and increase your overall revenue.</JobsP>
                        <JobApply>Ap</JobApply>
                    </JobsCard>

                    <JobsCard>
                    <JobImage src={image}/>
                        <JobsH2>Customer Support Care</JobsH2>
                        <JobsP>We help reduce your fees and increase your overall revenue.</JobsP>
                        <JobApply>Ap</JobApply>
                    </JobsCard>

                    <JobsCard>
                    <JobImage src={image}/>
                        <JobsH2>Human Research & Development</JobsH2>
                        <JobsP>We help reduce your fees and increase your overall revenue.</JobsP>
                        <JobApply>Ap</JobApply>
                    </JobsCard>
            </JobsWrapper>

            </JobsContainer>
        </div>
    )
}

export default JobDisplay
