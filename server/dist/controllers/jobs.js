import { jobsData } from "../data/jobs.js";
import { nanoid } from "nanoid";
// GET Jobs
const getAllJobs = async (request, response) => {
    return response.status(200).json({ success: true, message: "Jobs Request Is Successful", jobs: jobsData });
};
// GET Job
const getJob = async (request, response) => {
    const { id } = request.params;
    const job = jobsData.find(job => job.id === id);
    if (!job)
        return response.status(404).json({ success: false, message: "No Job Was Found With The Requested ID." });
    return response.status(200).json({ success: true, message: "Job Request Is Successful", job: job });
};
// POST Job
const postJob = async (request, response) => {
    const { company, position } = request.body;
    if (!company || !position)
        return response.status(400).json({ success: false, message: "Request Is Missing Company Or Position" });
    const newJob = { id: nanoid(), company: company, position: position };
    jobsData.push(newJob);
    return response.status(200).json({ success: true, message: "Job Posted Successfully", job: newJob });
};
// PATCH Job
const patchJob = async (request, response) => {
    const { company, position } = request.body;
    if (!company || !position)
        return response.status(400).json({ success: false, message: "Request Is Missing Company Or Position" });
    const { id } = request.params;
    const job = jobsData.find(job => job.id === id);
    if (!job)
        return response.status(404).json({ success: false, message: "No Job Was Found With The Requested ID." });
    job.company = company;
    job.position = position;
    return response.status(200).json({ success: true, message: "Job Edit Is Successful", job: job });
};
// DELETE Job
const deleteJob = async (request, response) => {
    const { id } = request.params;
    const job = jobsData.find(job => job.id === id);
    if (!job)
        return response.status(404).json({ success: false, message: "No Job Was Found With The Requested ID." });
    jobsData.splice(jobsData.indexOf(job), 1);
    return response.status(200).json({ success: true, message: "Job Delete Is Successful", job: job });
};
// Exports
export { getAllJobs, getJob, postJob, patchJob, deleteJob };
