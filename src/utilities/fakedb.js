import { toast } from "react-toastify";

// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (quantity) {
        toast.warn('you already applied this job')
    }
    else {
        appliedJob[id] = 1;
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

const removeFromDb = id => {
    const appliedJob = getAppliedJob();
    if (id in appliedJob) {
        delete appliedJob[id];
        localStorage.setItem('applied-job', JSON.stringify(appliedJob));
    }
}

const getAppliedJob = () => {
    let appliedJob = {};

    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job');
    if (storedJob) {
        appliedJob = JSON.parse(storedJob);
    }
    return appliedJob;
}

const deleteAppliedJob = () => {
    localStorage.removeItem('applied-job');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJob,
    deleteAppliedJob
}
