import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

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
