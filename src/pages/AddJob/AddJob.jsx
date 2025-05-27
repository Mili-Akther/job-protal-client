import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
      const {user} =useAuth()
      const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("/n");
    newJob.responsibilities = newJob.responsibilities.split("/n");
    console.log(newJob);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job has been added has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl mb-6">Post a new Job</h2>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleAddJob} className="card-body">
            {/* job title */}
            <fieldset className="fieldset space-y-4">
              <label className="label">Job Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Job Title"
                name="title"
              />

              {/* job location */}
              <label className="label">Job Location</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Job Location"
                name="location"
              />

              {/* job type */}
              <label className="label">Job Type</label>
              <select
                defaultValue="Pick a Job Type"
                className="select select-ghost w-full"
              >
                <option disabled value="">
                  Pick a Job Type
                </option>
                <option>Full-Time</option>
                <option>Intern</option>
                <option>Part-Time</option>
              </select>

              {/* job Category */}
              <label className="label">Job Field</label>
              <select
                className="select select-ghost w-full"
                defaultValue=" Pick a Job Field"
              >
                <option disabled value="">
                  Pick a Job Field
                </option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Teaching</option>
              </select>

              {/* salary range */}
              <label className="label">Expected Salary Range</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Minimum Salary"
                name="min"
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Maximum Salary"
                name="max"
              />
              <select
                name="currency"
                className="select select-ghost w-full"
                defaultValue="Currency"
              >
                <option disabled value="">
                  Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>

              {/* company name */}
              <label className="label">Company Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Company Name"
                name="company"
              />

              {/* company logo */}
              <label className="label">Company Logo URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="https://example.com/logo.png"
                name="company_logo"
              />

              {/* HR Name */}
              <label className="label">HR Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="HR Name"
                name="hr_name"
              />

              {/* HR Email */}
              <label className="label">HR Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="hr@example.com"
                name="hr_email"
                defaultValue={user?.email}
              />
              {/* Application Deadline */}
              <label className="label">Deadline</label>
              <input
                type="date"
                className="input w-full"
                placeholder="Deadline"
                name="applicationDeadline"
          
              />

              {/* job description */}
              <label className="label">Job Description</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Job Description"
                name="description"
                required
              ></textarea>

              {/*Requirements */}
              <label className="label">Job Requirements</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Put each requirement in a new line"
                name="requirements"
                required
              ></textarea>

              {/*Responsibilities */}
              <label className="label">Job Responsibilities</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Write each responsibility in a new line"
                name="responsibilities"
                required
              ></textarea>

              {/* submit btn */}
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Submit</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
