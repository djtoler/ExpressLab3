import arrayOfAssignments from "../models/starterAssignmentDB";
import idGen from "../models/starterAssignmentDB";

const averageScoreGenerator = (array: string | any[]) => {
    let totalScores: number = 0;
    let totalPossible: number = 0;
    let myAverageScore: number = 0;
    if (array.length == 0) {
        return 0;
    }
    for (let index: any = 0; index <= array.length; index++) {
        if (!array[index].hasOwnProperty('score') || 
            !array[index].hasOwnProperty('total') || 
            !array[index].hasOwnProperty('completed')) 
            {
            return `N.A.`;
            }
        for (const status in index) {
            if (status == "completed" && index[status] == "true") {
                totalScores += parseInt(array[index].score);
                totalPossible += totalPossible + array[index].total;
            }
        }
    }         
    myAverageScore = (totalScores / totalPossible) * 100 ;
    return myAverageScore.toFixed(1) + "%"
};

export default averageScoreGenerator;
