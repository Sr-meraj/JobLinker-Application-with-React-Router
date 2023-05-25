/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Job = ({ job }) => {
    return (
        <div>
            <div className="border rounded-xl p-8 cursor-pointer">
                <img src={job.company_logo} alt="" className=" w-44 h-20 object-fill p-4" />
                <h3 className="text-3xl font-semibold mt-4">{job.job_title}</h3>
                <p>{job.company_name}  </p>
                <div className="flex gap-3 py-2">
                    <button className="border border-purple-600 px-4 py-1 rounded my-2"> {job.remote_or_onsite}</button>
                    <button className="border border-purple-600 px-4 py-1 rounded my-2"> {job.fulltime_parttime}</button>
                </div>
                <div className="flex gap-3 font-semibold mb-6">
                    <p>{job.location}</p>
                    <p>{job.salary}</p>
                </div>
                {/* view button */}
                <Link to={`/feature/${job.id}`} className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-2 rounded my-3"> View Details </Link>
            </div>
        </div>
    );
};

export default Job;