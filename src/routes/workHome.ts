import express from "express";
import Assignment from "../models/assignment";
// import arrayOfAssignments from "../models/starterAssignmentDB";
// import idGen from "../models/starterAssignmentDB";
import averageScoreGenerator from "../models/avgScoreGenerator";
import addAssignment from './addWork';
import addWork from "./addWork";



const workHome = express.Router();

let arrayOfAssignments: Assignment[] = [
    {id: 1, assignment: "countapples", score:10, total:10, completed:'true'},
    {id: 2, assignment: "countBears", score:9, total:10, completed:'true'},
    {id: 3, assignment: "countCats", score:10, total:10, completed:'true'},
    {id: 4, assignment: "countDogs", score:9, total:10, completed:'true'},
    {id: 5, assignment: "countEl", score:9, total:10, completed:'true'},
    {id: 6, assignment: "countFunny", score:"na", total:10, completed:'false'}
];
let nextId = 7;
let myAverageScore:any;

workHome.get("/", (req, res) => {
    let totalScores = 0;
    let totalPossible = 0;
    let myAverageScore =0;
    let emptyArray = [];
    function myAverageScore1 () {
        for (let i = 0; i < arrayOfAssignments.length; i++) {
            console.log("total score:" + totalScores);
            console.log("total possible:" + totalPossible);
            if (arrayOfAssignments[i].completed === "true") {
                totalScores = totalScores + parseInt(arrayOfAssignments[i].score);
                totalPossible = totalPossible + arrayOfAssignments[i].total;
            }
        } 
        return myAverageScore  = parseFloat(((totalScores / totalPossible) * 100).toFixed(1)) ;
        console.log(myAverageScore + "%");
    }      
    myAverageScore1();
 
    res.render('workHome', { 
        arrayOfAssignments:arrayOfAssignments,
        myAverageScore:myAverageScore
    });
});

addWork.post("/", (req, res) => { 
    const newAssignment: Assignment = {
        // id: parseInt(req.body.id),
        id: nextId,
        assignment: req.body.assignment,
        score: parseInt(req.body.score),
        total: parseInt(req.body.total),
        completed: req.body.completed,
    };
    arrayOfAssignments.push(newAssignment);
    nextId = nextId +1;

    res.render('addWorkCon', {
        id : newAssignment.id,
        assignment : newAssignment.assignment,
        score : newAssignment.score,
        total : newAssignment.total,
        completed : newAssignment.completed
    })
})


    










export default workHome;
module.exports.arrayOfAssignments = arrayOfAssignments