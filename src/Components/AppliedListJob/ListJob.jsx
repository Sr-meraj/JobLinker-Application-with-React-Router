/* eslint-disable react/prop-types */
import { CurrencyDollarIcon, MapIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const ListJob = ({ job }) => {
    const { company_logo, company_name, salary, remote_or_onsite, location, job_title, fulltime_parttime } = job
    return (
        <div>
            <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden px-4 py-2 my-6">
                <div className="flex justify-between items-center px-5">
                    <div className="flex gap-12 flex-grow items-center">

                        <div className="w-52 h-40 rounded-md bg-gray-200  p-6 ">
                            <img src={company_logo} alt="Product Image" className="w-full h-full object-contain rounded-md" />
                        </div>

                        <div className=" flex-grow">
                            <h3 className="text-2xl font-bold mb-2">{job_title}</h3>
                            <h4 className="text-xl text-gray-500 mb-1">{company_name} </h4>
                            <div className="flex gap-3 py-2">
                                <button className="border border-purple-600 px-4 py-1 rounded my-2"> {remote_or_onsite}</button>
                                <button className="border border-purple-600 px-4 py-1 rounded my-2"> {fulltime_parttime}</button>
                            </div>
                            <div className="flex gap-3 font-semibold mb-6">
                                <p className=" text-lg text-gray-500 mb-1 flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <MapIcon className="w-5 h-5" />
                                    </span> {location} ,
                                </p>
                                <p className=" text-lg text-gray-500 mb-1 flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <CurrencyDollarIcon className="w-5 h-5" />
                                    </span>    {salary}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 flex justify-between items-center">
                        {/* view button */}
                        <Link to={`/feature/${job.id}`}>
                            <button className="py-4 px-4 text-lg font-bold rounded-lg text-white bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-500 hover:to-purple-600 focus:outline-none hover:text-black">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListJob;