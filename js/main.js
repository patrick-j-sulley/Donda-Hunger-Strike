var totalDaysSince = 0;

function calculateDaysSince(){

    let originalDate = new Date('July 23, 2021');
    let todaysDate = new Date(Date.now())


    let oneDay = 1000 * 60 * 60 * 24;

    let timeDifference = todaysDate.getTime() - originalDate.getTime();

    totalDaysSince = Math.round(timeDifference / oneDay) - 1;

    document.getElementById("total").innerHTML = totalDaysSince;

}

function calculateProtesterHunger(days){

    if(days <= 3)
    {
        document.getElementById("protester").src = "./images/hungerstrike1-3.jpg"
    }
    else if(days <= 7)
    {
        document.getElementById("protester").src = "./images/hungerstrike4-7.jpg"
    }
    else if(days <= 12)
    {
        document.getElementById("protester").src = "./images/hungerstrike8-12.jpg"
    }
    else if(days <= 17)
    {
        document.getElementById("protester").src = "./images/hungerstrike13-17.jpg"
    }
    else if(days <= 21)
    {
        document.getElementById("protester").src = "./images/hungerstrike18-21.jpg"
    }
    else
    {
        document.getElementById("protester").src = "./images/hungerstrike22.jpg"
    }

}


calculateDaysSince()
calculateProtesterHunger(totalDaysSince)
