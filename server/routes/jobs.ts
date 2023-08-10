// Modules
import { Router } from "express";
import { getAllJobs, getJob, postJob, patchJob, deleteJob } from "../controllers/jobs.js";

// Declare The Router
const router = Router();

// API Routes
router.route( "/" )
.get( getAllJobs )
.post( postJob )

router.route( "/:id" )
.get( getJob )
.patch( patchJob )
.delete( deleteJob )

// Exports
export default router;