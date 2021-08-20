function avgTime() {


    let minutes = 0;
    for (i = 0; i < tasks.length; i++) {

        var start = tasks[i].starttime.split(":");
        // console.log(start);
        var end = tasks[i].endtime.split(":");
        // console.log(end);
        var startMin = parseInt(start[0]) * 60 + parseInt(start[1]);
        // console.log(hour);
        var endMin = parseInt(end[0]) * 60 + parseInt(end[1]);
        console.log("difference ", endMin - startMin);
        minutes = minutes + (endMin - startMin);

        let t = minutes / tasks.length;
        console.log(t);
        var mins = t % 60;
        var hr = (t - mins) / 60;
        console.log(hr + "Hrs" + ":" + mins + " Mins");
    }
    document.getElementById("averageTime").innerHTML = hr + "Hrs" + ":" + mins + " Mins";
}
function totalMinutes() {

    for (i = 0; i < tasks.length; i++) {

        var start = tasks[i].starttime.split(":");
        // console.log(start);
        var end = tasks[i].endtime.split(":");
        // console.log(end);
        var startMin = parseInt(start[0]) * 60 + parseInt(start[1]);
        // console.log(hour);
        var endMin = parseInt(end[0]) * 60 + parseInt(end[1]);
        console.log("difference ", endMin - startMin);
        totalTaskMinutes = totalTaskMinutes + (endMin - startMin);


    }

}

function retriveData() {

    var retrivedata = window.localStorage.getItem("Tasks");

    if (retrivedata != null) {
        tasks = JSON.parse(retrivedata);
    }





}

