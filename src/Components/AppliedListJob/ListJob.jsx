/* eslint-disable react/prop-types */

const ListJob = ({ job }) => {
    const { company_logo, company_name, salary, remote_or_onsite, location, job_title, fulltime_parttime } = job
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 my-4">
                <div className="flex justify-between items-center px-5">
                    <div className="flex gap-8 flex-grow items-center">

                        <div className="w-52 h-32 rounded-md ">
                            <img src={company_logo} alt="Product Image" className="w-full h-full object-contain rounded-md" />
                        </div>

                        <div className=" flex-grow">
                            <h3 className="text-lg font-semibold mb-2">{job_title}</h3>
                            <p className="text-sm text-gray-500 mb-1">{company_name} </p>
                            <div className="flex gap-3 py-2">
                                <button className="border border-purple-600 px-4 py-1 rounded my-2"> {remote_or_onsite}</button>
                                <button className="border border-purple-600 px-4 py-1 rounded my-2"> {fulltime_parttime}</button>
                            </div>
                            <div className="flex gap-3 font-semibold mb-6">
                                <p className="text-sm text-gray-500 mb-1">{location}</p>
                                <p className="text-sm text-gray-500 mb-1">{salary}</p>
                            </div>
                        </div> 
                    </div>

                    <div className="p-4 flex justify-between items-center">
                        <button className="py-4 px-6 text-xl font-bold rounded-lg text-white bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-500 hover:to-purple-600 focus:outline-none">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListJob;