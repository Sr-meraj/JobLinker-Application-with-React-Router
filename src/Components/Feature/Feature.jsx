import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Feature = () => {
    const loadedJobs = useLoaderData()
    const [jobs, setJobs] = useState([])
    const [showjobs, setShowjobs] = useState(4)
    useEffect(() => {
        setJobs(loadedJobs)
    }, [loadedJobs])

    return (
        <div>
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-center text-gray-800">Featured Jobs</h2>
                <p className='text-sm text-gray-400 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4 mt-10 py-4">
                    {jobs.slice(0, showjobs).map((job) => <Job key={job.id} job={job} />)}
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-gradient-to-l from-indigo-600 to-purple-500 text-white px-4 py-2 rounded my-2"
                        onClick={() => setShowjobs(showjobs < 10 ? showjobs + 2 : showjobs - 6)}>
                        {showjobs < 10 ? "Show More Jobs" : "Show Less Jobs"}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Feature;