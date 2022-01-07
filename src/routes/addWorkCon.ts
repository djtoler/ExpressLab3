import express from "express";
import Assignment from "../models/assignment";
import arrayOfAssignments from "../models/starterAssignmentDB";
import idGen from "../models/starterAssignmentDB";
import averageScoreGenerator from "../models/avgScoreGenerator";


const addWorkCon = express.Router();

addWorkCon.get("/", (req, res) => {
    res.render('addWorkCon');
});

export default addWorkCon;