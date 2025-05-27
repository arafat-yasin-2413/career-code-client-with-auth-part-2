import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  console.log(jobId);

  const { user } = useAuth();
  console.log(user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    // ekhon ekta object create korbo.
    // jeikhane job and applicant er info thakbe.
    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" border mx-auto max-w-2xl">
      <h3 className="text-4xl text-center my-4">
        Apply For this this job :{" "}
        <Link className="link-hover" to={`/jobs/${jobId}`}>
          Details
        </Link>
      </h3>

      <form onSubmit={handleApplyFormSubmit} className=" mx-auto max-w-xs my-4">
        <fieldset className="fieldset bg-purple-200 border-base-300 rounded-box border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            className="input"
            name="linkedIn"
            placeholder="your linked in profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            className="input"
            name="github"
            placeholder="your github profile link"
          />

          <label className="label">Resume Link</label>
          <input
            type="text"
            className="input"
            name="resume"
            placeholder="resume link"
          />

          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
