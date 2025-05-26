import React from "react";
import { data, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const {user} = useAuth();
//   console.log(id, user);

  const submitJonApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
//     console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume
    }
    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){          
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <h1 className="text-5xl font-bold text-center">Apply job and Good Luck</h1>
      <form onSubmit={submitJonApplication} className="card-body">
        <fieldset className="fieldset">
          <label className="label">LinkedIn URL</label>
          <input
            name="linkedIn"
            type="url"
            className="input"
            placeholder="LinkedIn URL"
          />
          <label className="label">GitHub URL</label>
          <input
            name="github"
            type="url"
            className="input"
            placeholder="GitHub URL"
          />
          <label className="label">Resume URL</label>
          <input
            name="resume"
            type="url"
            className="input"
            placeholder="Resume URL"
          />

          <button className="btn btn-primary mt-4">Apply</button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
