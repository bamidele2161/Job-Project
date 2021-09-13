import React, {useState} from 'react'
import { get } from 'react-scroll/modules/mixins/scroller';
import image from '../../Images/landing.jpg';
import Axios from 'axios';
import {

    JobsContainer,
    JobsWrapper,
    JobH1,
    Job2H1,
    JobsH2,
    JobsCard,
    JobsP,
    JobImage,
    JobApply,
    JobSalary,
    Search,
    SearchOne,
    SearchTwo,
    Button,
    NoResult,
    EntireResult,
    JobsAvailable
} from './JobDisplayElement'

const JobDisplay = () => {
    const [state, setState] = useState("");
    const [searchparam] = useState(["title", "display_name"]);
    const [IsLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState([]);


    const url=`http://localhost:8010/proxy/v1/api/jobs/gb/search/1?app_id=664b2493&app_key=d9314186dc86a4cad83bc813ca68b092`;
    const getData = async (e) => {
        e.preventDefault();
        const result = await Axios.get(url);
        console.log(result)
        setResult(result.data.results);
        setIsLoading(true);
    }

    const getInput = (event) => {
        setState(event.target.value);
        return result.filter((items) => {
            return searchparam.some((newItem) => {
                return (
                    items[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(state.toLowerCase()) > -1
                );
            });
        });
    }
    
    return (
        <div>
            <JobsContainer>
                <Job2H1>   <span style={{color: "#260A81"}}>  </span> </Job2H1>
                <Search>
                        <SearchOne placeholder="Job type" value={state} onChange={getInput} />
                        <Button onClick={getData}> Search </Button>
                    </Search>
                    
            <JobsWrapper>
                
                {
                    IsLoading ? result.map((items)=>(
                        
                    <JobsCard>
                        <JobImage>UK JOB</JobImage>
                        <JobsH2>{items.title}</JobsH2>
                        <JobsP>Location: {items.location.display_name}</JobsP>
                        <JobSalary>range of (£{items.salary_min} - £{items.salary_max})</JobSalary>
                        <JobApply href={items.redirect_url}>Click here</JobApply>
                        
                    </JobsCard>
                    )): <NoResult>Input the Job Type and your Location</NoResult>
                }
                    
            </JobsWrapper>

            </JobsContainer>

        </div>
    )
}

export default JobDisplay
