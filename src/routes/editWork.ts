import express from "express";
import Assignment from "../models/assignment";
import arrayOfAssignments from "../models/starterAssignmentDB";
import idGen from "../models/starterAssignmentDB";
import averageScoreGenerator from "../models/avgScoreGenerator";
import workHome from "./workHome";
const array = require('./workHome')



const editWork = express.Router();

editWork.get("/players/edit/:id", (req, res) => {
    const url = req.url;
    const id = parseInt(req.params.id);
    if (url == `/players/edit/${id}`) {
        let i = 0;
        while (i < id) {
            i++;
            if (i !== id) continue;
            res.render('editWork', {
                assignment:array.arrayOfAssignments[i-1].assignment,
                score:array.arrayOfAssignments[i-1].score,
                total:array.arrayOfAssignments[i-1].total,
                completed:array.arrayOfAssignments[i-1].completed
            });
            
        }
    }
});


editWork.post("/players/edit/:id", (req, res) => {
    let id = req.params.id;
    let assignment = req.body.assignment;
    let score = req.body.score;
    let total = req.body.total;
    let completed = req.body.completed;
    res.render('editWorkCon', {
        id : id,
        assignment : assignment,
        score : score,
        total : total,
        completed : completed
    })
})


export default editWork;