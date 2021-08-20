var arr = new Array();
var selectedRow = null;
var timerow =  null;
var timeArray = new Array();
var finalhour = new Array();
var finalminute = new Array();
displayTable()

var p=null;
var val=null;
var ele=null;

function retriveData() {

    var retrivedata = window.localStorage.getItem("Tasks");
    var timedata = window.localStorage.getItem("time");
    timeArray = JSON.parse(timedata);
    if (retrivedata != null) {
        arr = JSON.parse(retrivedata);
    } 


}

function displayTable() {
    retriveData();

    var tb = document.getElementById("tasklist")
    var len = tb.rows.length;
    while (--len) {
        tb.deleteRow(len);
    }
    for (i = 0; i < arr.length; i++) {

        var row = tb.insertRow();

        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.insertCell();
        


        cell1.innerHTML = arr[i].tittle
        cell2.innerHTML = arr[i].description
        cell3.innerHTML = arr[i].date
        cell4.innerHTML = arr[i].starttime
        cell5.innerHTML = arr[i].endtime
        cell6.innerHTML = `<button type="delete" class="btn btn-dark btn-sm " onclick="deleterow(this)">DELETE</button>
        <button  type="edit" class="btn btn-dark btn-sm " onclick ="editrow(this)">EDIT</button>`;
        
        
    }
}

function finaladdData() {
    // addData();
    //retriveData();
    

    arr.push({


        tittle: document.getElementById("tittle").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value,
        starttime: document.getElementById("starttime").value,
        endtime: document.getElementById("endtime").value

    });
    window.localStorage.setItem("Tasks", JSON.stringify(arr));


    alert("Data is submitted");
    displayTable();

    timeArray.push({
        starttime: document.getElementById("starttime").value,
        endtime: document.getElementById("endtime").value
    });
    window.localStorage.setItem("time",JSON.stringify(timeArray));


}
function deleterow(td) {
    retriveData();
    var deleterowdata = td.parentElement.parentElement.rowIndex;
    var actualindex = deleterowdata - 1;
    //console.log(actualindex);
    document.getElementById("tasklist").deleteRow(deleterowdata);
    arr.splice(actualindex, 1);
    //console.log(arr)
    window.localStorage.setItem("Tasks", JSON.stringify(arr));
    //data.splice(deleterowdata,1);
    //console.llog(data);


}
var selectrow = null;
var lsrowIndex = null;



function editrow(td) {

    selectedRow = td.parentElement.parentElement;
    selectrow = selectedRow.rowIndex;
    lsrowIndex = selectrow - 1;


    console.log(selectrow);
    document.getElementById('tittle').value = selectedRow.cells[0].innerHTML;
    document.getElementById('description').value = selectedRow.cells[1].innerHTML;
    document.getElementById('date').value = selectedRow.cells[2].innerHTML;
    document.getElementById('starttime').value = selectedRow.cells[3].innerHTML;
    document.getElementById('endtime').value = selectedRow.cells[4].innerHTML;


}
function updatedRow(td) {
    var table = document.getElementById("tasklist");
    console.log(table);


    table.rows[selectrow].cells[0].innerHTML = document.getElementById("tittle").value;
    table.rows[selectrow].cells[1].innerHTML = document.getElementById("description").value;
    table.rows[selectrow].cells[2].innerHTML = document.getElementById("date").value;
    table.rows[selectrow].cells[3].innerHTML = document.getElementById("starttime").value;
    table.rows[selectrow].cells[4].innerHTML = document.getElementById("endtime").value;

    retriveData();
    arr[lsrowIndex] = ({

        tittle: table.rows[selectrow].cells[0].innerHTML,
        description: table.rows[selectrow].cells[1].innerHTML,
        date: table.rows[selectrow].cells[2].innerHTML,
        starttime: table.rows[selectrow].cells[3].innerHTML,
        endtime: table.rows[selectrow].cells[4].innerHTML,
    });
    localStorage.setItem("Tasks", JSON.stringify(arr));

}
