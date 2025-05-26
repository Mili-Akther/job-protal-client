import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
      const {_id,title, company, deadline} = useLoaderData();
    
      return (
        <div>
          <h2 className="text-4xl">job Details for {title}</h2>
          <p>Apply for : {company}</p>
          <p>deadline: {deadline}</p>
          <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      );
};

export default JobDetails;