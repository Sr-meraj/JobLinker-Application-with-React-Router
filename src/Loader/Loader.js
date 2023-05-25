
const JobsLoader = async () =>
{
    const Jobs = await fetch('/jobs.json');
    const JobsData = await Jobs.json();
    return JobsData;
}

const jobFeature = async ({ params }) => {
    const Jobs = await fetch('/jobs.json');
    const JobsData = await Jobs.json();
    const job = JobsData.find(jb => jb.id === params.jobId)
    return job
}



export { JobsLoader, jobFeature }