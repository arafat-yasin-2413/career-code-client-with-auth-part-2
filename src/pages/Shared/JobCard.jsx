import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    description,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
  } = job || {};

  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="flex items-center gap-2">
        <figure>
          <img className="w-12" src={company_logo} alt={`logo of ${company}`} />
        </figure>

        <div>
          <h3 className="text-2xl">{company}</h3>

          <p className="text-gray-400 flex items-center gap-1 text-xs">
            <FaLocationDot></FaLocationDot> {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>{description}</p>
        <div className="card-actions">
          {Array.isArray(requirements) ? (
            requirements.map((skill, index) => (
              <div key={index} className="badge badge-outline">
                {skill}
              </div>
            ))
          ) : (
            <div className="badge badge-outline">{requirements}</div>
          )}

        </div>

          <div className="card-actions justify-end">
            <Link to={`/jobs/${_id}`}>
            
            <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>


          <div>
            
          </div>

      </div>
    </div>
  );
};

export default JobCard;
