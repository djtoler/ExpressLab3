import express from "express";
import Assignment from "../models/assignment";
import arrayOfAssignments from "../models/starterAssignmentDB";
import idGen from "../models/starterAssignmentDB";
import averageScoreGenerator from "../models/avgScoreGenerator";
const array = require('./workHome')
import workHome from './workHome';


const deleteWorkCon = express.Router();

workHome.get("/players/:id/deleteCon", (req, res) => {
    const url = req.url;
    const id = parseInt(req.params.id);
    if (url == `/players/${id}/deleteCon`) {
        let i = 0;
        while (i < id) {
            i++;
            if (i !== id) continue;
            res.render('deleteWorkCon', {
                assignment:array.arrayOfAssignments[i-1].assignment,
                id:id
            });
            
        }
    }
    
});

export default deleteWorkCon;