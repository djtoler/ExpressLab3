import Assignment from "../models/assignment";

// let editDelete = `<p><a href="http://localhost:8787/deletework">Delete</a> <a href="http://localhost:8787/editwork">Edit</a></p>`;
let arrayOfAssignments: Assignment[] = [
    {assignment: "countapples", score:10, total:10, completed:'true', },
    {assignment: "countBears", score:9, total:10, completed:'true', },
    {assignment: "countCats", score:8, total:10, completed:'true',  },
    {assignment: "countDogs", score:7, total:10, completed:'true',},
    {assignment: "countEl", score:6, total:10, completed:'true',},
    {assignment: "countFunny", score:"na", total:10, completed:'false',},
];


// const idGen: any = arrayOfAssignments.slice(-1)[0].id + 1; 

// module.exports.arrayOfAssignments = arrayOfAssignments
export default arrayOfAssignments;
module.exports.arrayOfAssignments = arrayOfAssignments