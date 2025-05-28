import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://job-protal-server-zeta.vercel.app/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div>
      <h2 className="text-3xl">My Posted Jobs: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Email Address</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>
                  <Link to={`/viewApplication/${job._id}`}>
                    <button className="btn btn-link">View Application</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
