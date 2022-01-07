import express from "express";
import Assignment from "../models/assignment";
import arrayOfAssignments from "../models/starterAssignmentDB";
import idGen from "../models/starterAssignmentDB";
import averageScoreGenerator from "../models/avgScoreGenerator";


const updateWork = express.Router();

updateWork.get("/", (req, res) => {
    res.render('updateWork');
});

export default updateWork;