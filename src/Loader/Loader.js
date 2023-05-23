
const JobsLoader = async () =>
{
    const Jobs = await fetch('jobs.json');
    const JobsData = await Jobs.json();
    return JobsData.jobs;
}

export { JobsLoader }