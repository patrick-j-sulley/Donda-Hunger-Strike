var totalDaysSince = 0;
var totalHoursSince = 0;
var totalMinsSince = 0;
var totalSecsSince = 0;

var originalDate = new Date('July 23, 2021');
var todaysDate = new Date(Date.now())

var days, hours, mins, secs;


function calculateDaysSince() {

    let oneDay = 1000 * 60 * 60 * 24;

    let timeDifference = todaysDate.getTime() - originalDate.getTime();

    totalDaysSince = Math.round(timeDifference / oneDay) - 1;

    totalHoursSince = Math.round(todaysDate.getHours())

    totalMinsSince = Math.round(todaysDate.getMinutes())

    totalSecsSince = Math.round(todaysDate.getSeconds())

    document.getElementById("total").innerHTML = totalDaysSince;
    document.title = 'DONDA Hunger Strike Day ' + totalDaysSince

}

function calculateProtesterHunger(days) {

    if (days <= 3) {
        document.getElementById("protester").src = "./images/hungerstrike1-3.jpg"
    }
    else if (days <= 7) {
        document.getElementById("protester").src = "./images/hungerstrike4-7.jpg"
    }
    else if (days <= 12) {
        document.getElementById("protester").src = "./images/hungerstrike8-12.jpg"
    }
    else if (days <= 17) {
        document.getElementById("protester").src = "./images/hungerstrike13-17.jpg"
    }
    else if (days <= 21) {
        document.getElementById("protester").src = "./images/hungerstrike18-21.jpg"
    }
    else {
        document.getElementById("protester").src = "./images/hungerstrike22.jpg"
    }

}

function startCount() {
    days = totalDaysSince;
    hours = totalHoursSince;
    mins = totalMinsSince;
    secs = totalSecsSince;
    timer = setInterval(count, 1000);
}
function count() {



    secs++;
    if (secs == 60) {
        secs = 0;
        mins = mins + 1;
    }
    if (mins == 60) {
        mins = 0;
        hours = hours + 1;
    }
    if (hours == 13) {
        hours = 1;
    }

    document.getElementById('timer').innerHTML = (days + " Days, " + hours + " Hours, " + mins + " Minutes, and " + secs + " Seconds.");

}



calculateDaysSince()
calculateProtesterHunger(totalDaysSince)
startCount();
