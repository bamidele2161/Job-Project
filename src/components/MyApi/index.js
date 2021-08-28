import React from 'react'
import Axios from 'axios'
import './MyApi.css'

const MyApi = () => {

    const url = `https://remotive.io/api/remote-jobs`
    const getData = async () => {
        
        const result = await Axios.get(url);

        // console.log(result);
    }


    return (
        <div className="container">
        <div className="Search">
            <h1 className="job-title">Get the <span className="another">Right Job</span> </h1>
            <h1 className="job-title2">You Deserve</h1>
            <p className="job-p">This is for searching available jobs</p>
            <form className="search-form">
                <input type="text" placeholder="job type" className="input-job"
                />

                <input type="submit" value="search" className="search-job-button" onClick={getData}/>

            </form>
        </div>
        </div>
    )
}

export default MyApi
