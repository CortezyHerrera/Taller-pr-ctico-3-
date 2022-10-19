const form = document.getElementById("formain")

form.addEventListener("submit", function(event){
   event.preventDefault();

   let formainData = new FormData();
   let tableR = document.getElementById("tableResults");
   let newformainRow = tableR.insertRow(-1);

   let newformainCell = newformainRow.insertCell(0);
   newformainCell.textContent= 



})
