import express from "express";
const arrayOfAssignments = require('../models/starterAssignmentDB');
const api = express.Router();

let work = arrayOfAssignments.arrayOfAssignments;



api.get("/assignments", (req, res) => {
    console.log( "Assignment Array:" + arrayOfAssignments);
    
    res.status(200)
    res.json(arrayOfAssignments)
})

api.get("/summary", (req, res) => {
    let totalScores: number = 0;
    let totalPossible: number = 0;
    let myAverageScore =0;
    let emptyArray = [];
    function myAverageScore1 () {
        console.log( "length:" + work.length);
        
        for (let i = 0; i < work.length; i++) {
            console.log("total score:" + totalScores);
            console.log("total possible:" + totalPossible);
            if (work[i].completed === "true") {
                totalScores = totalScores + parseInt(work[i].score);
                totalPossible = totalPossible + work[i].total;
            }
        } 
        myAverageScore  = parseFloat(((totalScores / totalPossible) * 100).toFixed(1)) ;
        // console.log(myAverageScore + "%");
        return myAverageScore
    }      
    myAverageScore = myAverageScore1();
    res.status(200)
    res.json({
        "assignments": work, 
        "overallAverage": myAverageScore
    });
})

export default api;

