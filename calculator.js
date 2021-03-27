document.getElementById("totalTip").style.display = "none";

document.getElementById("each").style.display = "none";

var sel = document.querySelector("select");
var opt = document.createElement("option");
opt.appendChild(document.createTextNode("1% - Too poor"));
opt.value = 0.01
sel.appendChild(opt)
var calculate = document.getElementById("calculate");







function calculateTip() {
    var amount = document.getElementById("billAmount").value;

    var rating = document.getElementById("serviceQuality").value;

    var person = document.getElementById("totalPeople").value;


    if (amount === "" || rating == 0) {
        window.alert("Please fill in the input");
        return;
    }
    if (person > 1) {
        document.getElementById("each").style.display = "block";
    } else { person = 1 }
    var total = (amount * rating) / person;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2)



    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total;

}