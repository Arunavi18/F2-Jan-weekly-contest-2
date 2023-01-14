

var employeedata[];


function displayTableData(){
    var html = "<table border = '1|1' class='table'>";
    setTimeout(() => {
        html+="<thead>";
        html+="<tr>";
        html+="<td>"+'slNo.'+"</td>";
        html+="<td>"+'Name'+"</td>";
        html+="<td>"+'Profession'+"</td>";
        html+="<td>"+'Age'+"</td>";
        html+="<td>"+'Action'+"</td>";
        html+="</tr>";
        html+="</thead>";
        for(var i=0;i<employeedata.length;i++) {
            var slNo=i+1;
            html+="<tr>";
            html+="<td>" + slNo + "</td>";
            html+="<td>"+employeedata[i].name+"</td>";
            html+="<td>"+employeedata[i].profession+"</td>";
            html+="<td>"+employeedata[i].age+"</td>";
            html+="</tr>";
        }
        html+="</table>";
        document.getElementById("table").innerHTML -html
    },200);
}
displayTableData()

function addonclick(){
    var name = document.getElementById('name').value;
    var profession = document.getElementById('profession').value;
    var age = document.getElementById('age').value;

    if(name && profession && age){
        let id = form.length + 1
        form.push({name:name,profession:profession,age:age,id:id})
        displayTableData();
        clear();
    }
}

function clear(){
    document.getElementById('name').value ="";
    document.getElementById('profession').value ="";
    document.getElementById('age').value ="";
}

function removeData(rec){
    console.log(rec);


}