/* eslint-disable no-prototype-builtins */
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJob } from '../utilities/fakedb';
import TittleBanner from '../Components/TitleBanner/TittleBanner';
import ListJob from '../Components/AppliedListJob/ListJob';

const AppliedJobs = () => {
    const [ajobs, setAjobs] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('')
    const loadedJB = useLoaderData()
    const appliedDB = getAppliedJob()

    useEffect(() => {
        if (loadedJB) {
            const filteredJobs = loadedJB.filter(job => appliedDB.hasOwnProperty(job.id));
            setAjobs(filteredJobs);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Apply the selected filter
    const filteredAjobs = useMemo(() => {
        if (selectedFilter === '') {
            return ajobs;
        }
        const filterd = ajobs.filter(job => job.remote_or_onsite === selectedFilter);
        console.log(filterd);
        return filterd;

    }, [ajobs, selectedFilter]);

    console.log(selectedFilter);
    console.log(ajobs);
    return (
        <div>
            <TittleBanner>Applied Job: {filteredAjobs ? filteredAjobs.length : ajobs.length}</TittleBanner>
            <div className="container mx-auto py-8">
                <div className="flex justify-end">
                    <div className="relative inline-block w-48">
                        <select
                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                            name='filter'
                            value={selectedFilter}
                            onChange={(e) => setSelectedFilter(e.target.value)}
                        >
                            <option value=''>Filter</option>
                            <option value='Onsite'>OnSite</option>
                            <option value='Remote'>Remote</option>
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {
                    filteredAjobs.map(ajb => <ListJob job={ajb} key={ajb.id} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;