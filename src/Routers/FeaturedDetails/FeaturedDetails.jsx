// import { useEffect, useState } from "react";
import { BriefcaseIcon, ClockIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useLoaderData } from "react-router-dom";
// import { toast } from "react-toastify";
import TittleBanner from "../../Components/TitleBanner/TittleBanner";
import { addToDb } from "../../utilities/fakedb";

const FeaturedDetails = () => {
    const LoadedDetails = useLoaderData()
    const { id, job_responsibility, salary, remote_or_onsite, location, job_title, job_description, fulltime_parttime, experiences, contact_information, educational_requirements } = LoadedDetails;

    const applyHandeltoDb = (id) => {
        addToDb(id)
    }
    return (
        <div>
            <TittleBanner>Job Details</TittleBanner>
            <div className="container py-12 mx-auto px-5 sm:p-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                    <div className="col-span-2 px-4">
                        <p className="py-4">
                            <span className="font-bold">Job Description: </span>
                            <span className="block py-2">
                                {`${job_description}`}
                            </span>

                        </p>
                        <p className="py-4">
                            <span className="font-bold">Job Responsibility: </span>
                            <span className="block py-2">
                                {job_responsibility}
                            </span>
                        </p>
                        <p className="py-4">
                            <span className="font-bold">Educational Requirements: </span>
                            <span className="block py-2">
                                {`${educational_requirements}`}
                            </span>

                        </p>
                        <p className="py-4">
                            <span className="font-bold">Job Experiences: </span>
                            <span className="block py-2">
                                {experiences}
                            </span>
                        </p>
                    </div>
                    <div className="">
                        <div className="bg-purple-100 p-4  sm:px-6 sm:py-4 rounded-md">
                            <h3 className="text-2xl py-4 text-black font-bold border-b-2 border-black">Job Details</h3>
                            <div className="sm:text-xl text-base">

                                <p className="py-2  flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <BriefcaseIcon className="w-5 h-5" />
                                    </span>
                                    <span className="font-semibold">Job Salary: </span>
                                    {salary}
                                </p>
                                <p className="py-2 flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <CurrencyDollarIcon className="w-5 h-5" />
                                    </span>
                                    <span className="font-semibold">Job Title: </span>
                                    {job_title}
                                </p>
                                <p className="py-2 flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <BriefcaseIcon className="w-5 h-5" />
                                    </span>
                                    <span className="font-semibold">Job Remote/Onsite: </span>
                                    {remote_or_onsite}
                                </p>
                                <p className="py-2 flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <ClockIcon className="w-5 h-5" />
                                    </span>
                                    <span className="font-semibold">Fulltime/Parttime: </span>
                                    {fulltime_parttime}
                                </p>
                            </div>
                            <h3 className="text-2xl py-4 text-black font-bold border-b-2 border-black">Contact Information</h3>
                            <div className="text-xl">

                                <p className="py-2 flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <PhoneIcon className="w-5 h-5" />
                                    </span>
                                    <span className="font-semibold">Phone: </span>
                                    {contact_information.phone}
                                </p>
                                <p className="py-2 flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <EnvelopeIcon className="w-5 h-5" />
                                    </span>
                                    <span className="font-semibold">Email:</span>
                                    {contact_information.email}
                                </p>
                                <p className="py-2 flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        <MapPinIcon className="w-5 h-5" />
                                    </span>
                                    <span className="font-semibold">Job Location:</span>
                                    {location}
                                </p>
                            </div>

                        </div>
                        <button
                            className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white p-4 text-lg sm:px-4 sm:py-5 sm:text-2xl rounded my-3 w-full transition duration-150 font-bold"
                            onClick={() => { applyHandeltoDb(id) }}> Apply Now </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedDetails;