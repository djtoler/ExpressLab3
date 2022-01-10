import express from "express";
import Assignment from "../models/assignment";
// import arrayOfAssignments from "../models/starterAssignmentDB";
import idGen from "../models/starterAssignmentDB";
import averageScoreGenerator from "../models/avgScoreGenerator";
import workHome from './workHome';
import arrayOfAssignments from "../models/starterAssignmentDB";
const array = require('./workHome')

const deleteWork = express.Router();

workHome.get("/players/:id/delete", (req, res) => {
    console.log(arrayOfAssignments);
    console.log(array.arrayOfAssignments);
    
    
    const url = req.url;
    const id = parseInt(req.params.id);
    if (url == `/players/${id}/delete`) {
        let i = 0;
        while (i < id) {
            i++;
            if (i !== id) continue;
            res.render('deleteWork', {
                assignment:arrayOfAssignments[i-1].assignment
            });
            arrayOfAssignments.splice(i-1, 1);
        }
    }   
});
        
        
        
    // }
    // res.render('deleteWork', {
    //     // assignment:arrayOfAssignments.
    // });



export default deleteWork;

// console.log(arrayOfAssignments);     
//             console.log("delete");
//             console.log("------------------------------------------------------------------");
//             console.log(array);
//             console.log("------------------------------------------------------------------");
//             console.log(array.arrayOfAssignments);
//             console.log("------------------------------------------------------------------");
//             console.log(array.arrayOfAssignments[2].id);
//             console.log("------------------------------------------------------------------");
//             console.log(array.arrayOfAssignments[2]);
//             console.log("------------------------------------------------------------------");
//             console.log(req.body);
// console.log("hi");

            // console.log( "Logging I's: " + array.arrayOfAssignments[i].id);
            // console.log( "Logging I's pt2: " + id);
            // if (arrayOfAssignments[i].id !== id) {
            //     console.log("hi6");
            //     console.log("Error: Assignment not found");
            // } else {
            //     console.log("made it to 2nd if");
            //     
                
            // }