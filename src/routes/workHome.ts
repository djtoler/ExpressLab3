import express from "express";
import Assignment from "../models/assignment";

const workHome = express.Router();

const arrayOfAssignments: Assignment[] = [
    {id: 1, assignment: "countapples", score:10, total:10, completed:true, action: false },
    {id: 2, assignment: "countBears", score:9, total:10, completed:true, action: false },
    {id: 3, assignment: "countCats", score:8, total:10, completed:true, action: false },
    {id: 4, assignment: "countDogs", score:7, total:10, completed:true, action: false },
    {id: 5, assignment: "countEl", score:6, total:10, completed:true, action: false },
    {id: 6, assignment: "countFunny", score:"na", total:10, completed:false, action: false },
];

let lastId = arrayOfAssignments.slice(-1);
console.log(lastId);
const idGenerator = (id: number) => {

    
    
}


