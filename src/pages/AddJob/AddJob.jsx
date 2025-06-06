import React from "react";

const AddJob = () => {
    return (
        <div className="my-10 w-3xl mx-auto">
            addjob page
            <form>
                {/* Basic Infos */}
                <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        className="input"
                        placeholder="Job title"
                    />

                    <label className="label">Company</label>
                    <input
                        type="text"
                        name="company"
                        className="input"
                        placeholder="company name"
                    />

                    <label className="label">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input"
                        placeholder="company location"
                    />

                    <label className="label">Company Logo</label>
                    <input
                        type="text"
                        name="company_logo"
                        className="input"
                        placeholder="company logo URL"
                    />
                </fieldset>

                {/* Job Type fieldset */}
                <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>

                    <div className="filter">
                        <input
                            className="btn filter-reset"
                            type="radio"
                            name="jobType"
                            aria-label="All"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="On-Site"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Remote"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Hybrid"
                        />
                    </div>
                </fieldset>

                {/* Job Category fieldset */}
                <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select
                        defaultValue="Job category"
                        name="category"
                        className="select"
                    >
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                </fieldset>

                {/* Application Deadline fieldset */}
                <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">
                        Application Deadline
                    </legend>

                    <input
                        type="date"
                        name="deadline"
                        className="input"
                        id=""
                    />
                </fieldset>

                {/* salary range fieldset */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input
                                type="text"
                                name="salaryMin"
                                className="input"
                                placeholder="minimum salary"
                            />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input
                                type="text"
                                name="salaryMax"
                                className="input"
                                placeholder="maximum salary"
                            />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select
                                defaultValue="Select a currency"
                                name="currency"
                                className="select"
                            >
                                <option disabled={true}>
                                    Select a currency
                                </option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EUD</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>
                </fieldset>
                <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>
                </fieldset>
                <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>
                </fieldset>
                <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;
