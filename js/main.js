var totalDaysSince = 0;

function calculateDaysSince(){

    let originalDate = new Date('July 23, 2021');
    let todaysDate = new Date(Date.now())


    let oneDay = 1000 * 60 * 60 * 24;

    let timeDifference = todaysDate.getTime() - originalDate.getTime();

    totalDaysSince = Math.round(timeDifference / oneDay) - 1;

    document.getElementById("total").innerHTML = totalDaysSince;

}

// function calculateProtesterHunger(days){

//     switch(days) {
//         case x:
//           // code block
//           break;
//         case y:
//           // code block
//           break;
//         default:
//           // code block
//       }

// }


calculateDaysSince()
// calculateProtesterHunger(totalDaysSince)
