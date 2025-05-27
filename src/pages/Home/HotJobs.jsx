import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {

    const jobsData = use(jobsPromise)
    console.log(jobsData);

    
        return (
        <div>
            <h2 className='text-4xl text-center my-4 font-bold'>Hot Jobs of the Day</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4" >
            {
                
                jobsData.map((job)=> <JobCard key={job._id} job={job}></JobCard>)
            }
            </div>
        </div>
    );
};

export default HotJobs;