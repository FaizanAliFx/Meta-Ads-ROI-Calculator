function calculateROI(){

let revenue = document.getElementById("revenue").value;
let spend = document.getElementById("spend").value;

let profit = revenue - spend;
let roi = (profit / spend) * 100;

document.getElementById("result").innerHTML =
"Profit: $" + profit + " | ROI: " + roi.toFixed(2) + "%";

}
