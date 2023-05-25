// import { useEffect, useState } from "react";
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
            <div className="container py-12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                        <div className="bg-purple-100  px-6 py-4 rounded-md">
                            <h3 className="text-2xl py-4 text-black font-bold border-b-2 border-black">Job Details</h3>
                            <div className="text-base">

                                <p className="py-2">
                                    <span className="font-bold">Job Title: </span>
                                    {job_title}
                                </p>
                                <p className="py-2">
                                    <span className="font-bold">Job Salary: </span>
                                    {salary}
                                </p>
                                <p className="py-2">
                                    <span className="font-bold">Job Remote/Onsite: </span>
                                    {remote_or_onsite}
                                </p>
                                <p className="py-2">
                                    <span className="font-bold">Fulltime/Parttime: </span>
                                    {fulltime_parttime}
                                </p>
                            </div>
                            <h3 className="text-2xl py-4 text-black font-bold border-b-2 border-black">Contact Information</h3>
                            <div className="text-base">

                                <p className="py-2">
                                    <span className="font-bold">Phone: </span>
                                    {contact_information.phone}
                                </p>
                                <p className="py-2">
                                    <span className="font-bold">Email:</span>
                                    {contact_information.email}
                                </p>
                                <p className="py-2">
                                    <span className="font-bold">Job Location:</span>
                                    {location}
                                </p>
                            </div>

                        </div>
                        <button
                            className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-5 text-2xl rounded my-3 w-full transition duration-150 font-bold"
                            onClick={() => { applyHandeltoDb(id) }}> Apply Now </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedDetails;