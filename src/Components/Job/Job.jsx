/* eslint-disable react/prop-types */

const Job = ({job}) => {
    return (
        <div>
            <div className="bg-purple-50 hover:bg-purple-100 rounded-xl p-8 cursor-pointer">
                <img src={job.company_logo} alt="" className="bg-purple-200 rounded p-2" />
                <h3 className="text-2xl font-bold mt-4">{job.job_title}</h3>
                <p>{job.company_name}  </p>
                <div className="flex gap-3">
                    <button className="border border-purple-600 px-4 py-1 rounded my-2"> {job.remote_or_onsite}</button>
                    <button className="border border-purple-600 px-4 py-1 rounded my-2"> {job.fulltime_parttime}</button>
                </div>
                <div className="flex gap-3">
                <p>{job.location}</p> 
                <p>{job.salary}</p>
                </div>
                {/* view button */}
                <button className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-2 rounded my-2"> View Details </button>
            </div>
        </div>
    );
};

export default Job;