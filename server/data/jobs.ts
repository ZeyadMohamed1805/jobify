import { nanoid } from "nanoid";

let jobsData: Array< { id: string, company: string, position: string } > = [
    { id: nanoid(), company: "apple", position: "front-end" },
    { id: nanoid(), company: "google", position: "back-end" }
];

export { jobsData };