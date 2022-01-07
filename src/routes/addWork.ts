import express from "express";
import Assignment from "../models/assignment";
// import arrayOfAssignments from "../models/starterAssignmentDB";
// import idGen from "../models/starterAssignmentDB";
import averageScoreGenerator from "../models/avgScoreGenerator";
import addWorkCon from "./addWorkCon";
import workHome from "./workHome";
const addWork = express.Router();

let newAssignment: Assignment;
let newId: number = 7;




addWork.get("/", (req, res) => {
    res.render('addWork');
});


// addWork.post("/", (req, res) => {
    
//     console.log("hi");
    
//     const newAssignment: Assignment = {
//         id: parseInt(req.body.id),
//         assignment: req.body.assignment,
//         score: parseInt(req.body.score),
//         total: parseInt(req.body.total),
//         completed: req.body.completed
//     }
//     res.render('addWorkCon', {
//         id : newAssignment.id,
//         assignment : newAssignment.assignment,
//         score : newAssignment.score,
//         total : newAssignment.total,
//         completed : newAssignment.completed
//     })
// })

// addWork.put("/", (req, res) => {

// })


    // let fullArray: Assignment[] = [];
   
    // console.log(newAssignment)
    // console.log("hi");
    // console.log("hiii");
    // console.log(arrayOfAssignments);
    // console.log(arrayOfAssignments.length);
    // console.log(arrayOfAssignments[arrayOfAssignments.length -1]);
//     let id = req.body.id;
//     let assignment = req.body.assignment;
//     let score = req.body.score;
//     let tPossibleScore = req.body.total;
//     let completed = req.body.completed;
//     let deleteEditAssignment =
//     `<p><a href="http://localhost:8787/deletework">Delete</a> <a href="http://localhost:8787/editwork">Edit</a></p>`
    
    
// console.log("--------------------FULL----------------");




    // newAssignment = req.body;

    // newAssignment.id = id
    // newAssignment.assignment = assignment;
    // newAssignment.score = score;
    // newAssignment.total = tPossibleScore;
    // newAssignment.completed = completed;
    // newAssignment.editDelete = deleteEditAssignment

    // arrayOfAssignments.push(newAssignment);
    // let assignmentLoop = Object.values(newAssignment);
    // console.log(newAssignment);

        // res.render('workHome', {
        // newAssignment:newAssignment,
        // id:id,
        // assignment:assignment,
        // score: score,
        // total: tPossibleScore,
        // completed: completed,
        // trash: deleteEditAssignment
        // });
    
    // fullArray.push(arrayOfAssignments)
    // fullArray.push(deleteEditAssignment)
    

    // console.log(Object.values(fullArray));

    // console.log("--------------------FULL----------------");
    // console.log(fullArray.length);
    // console.log(fullArray[0][0].id);
    // console.log(fullArray[0][0])


    

    

    // console.log("hiii");
    // console.log(newAssignment);
    // console.log(arrayOfAssignments);
    // console.log(arrayOfAssignments.length);
    
    
    // averageScoreGenerator();
    // console.log(newAssignment);
    // console.log("-------------------------------------");
    // console.log(arrayOfAssignments);
    // console.log("____________________________");
    // console.log(newAssignment.completed);


//     next()
    
// }, (req, res, next) => {
//     console.log("2nd waaaaaaaaaaaaaaaaaaave");
    
//     console.log(newAssignment);
//     console.log(req.body.assignment);
//     console.log("hiii");
//     console.log(arrayOfAssignments);
//     console.log(arrayOfAssignments.length);
//     console.log(arrayOfAssignments[arrayOfAssignments.length -1]);

    
    // res.render('workHome', {
    //     id:req.body.id,
    //     assignment:req.body.assignment,
    //     score:req.body.score,
    //     tPossibleScore:req.body.total,
    //     completed:req.body.completed
    // })
// });

// addWork.post("/", (req, res, next) => {
//     let id = req.body.id
//     let assignment = req.body.assignment,
//     score = req.body.score,
//     tPossibleScore = req.body.total,
//     completed = req.body.completed;

//     newAssignment = req.body;

//     newAssignment.id = id
//     newAssignment.assignment = assignment;
//     newAssignment.score = score;
//     newAssignment.total = tPossibleScore;
//     newAssignment.completed = completed;

//     arrayOfAssignments.push(newAssignment)
//     console.log("EEEEEEEEEEEEEEEEEEEEEE");
//     console.log(req.body.assignment);
//     console.log("EEEEEEEEEEEEEEEEEEEEEEE");
//     console.log(arrayOfAssignments);
//     console.log(arrayOfAssignments.length);
//     console.log(newAssignment);
//     console.log(arrayOfAssignments[arrayOfAssignments.length -1]);


//     res.render('workHome', {
//         id:req.body.id,
//         assignment:req.body.assignment,
//         score:req.body.score,
//         tPossibleScore:req.body.total,
//         completed:req.body.completed
//     })
// });

export default addWork;


