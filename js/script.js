

const form = document.getElementById("formain")
form.addEventListener("submit", function(event){
   event.preventDefault();
   let formainD = new FormData(form);
   let formObj  = convertformdataobj(formainD)
   saveformObj(formObj)
   insertTableslulw(formObj)
})

function convertformdataobj(formainD){
   let nombreUsuario = formainD.get("nombre-usuario");
   let dui= formainD.get("dui");
   let nit = formainD.get("nit");
   let marca =formainD.get("marca");
   let modelo= formainD.get("modelo");
   let anio =formainD.get("anio");
   let color = formainD.get("Color");
   let placas = formainD.get("placa");
   let problema = formainD.get("problema");
   return{      
      "nombre-usuario":nombreUsuario,
      "dui": dui,
      "nit":nit,
      "marca" :marca,
      "modelo" :modelo,
      "anio" :anio,
      "Color" :color,
      "placa" :placas,
      "problema" :problema
      
   }

}

function insertTableslulw(formObj){
   let tableR = document.getElementById("tableResults");

   let newformainRow = tableR.insertRow(-1);

   let newformainCell = newformainRow.insertCell(0);
   newformainCell.textContent = formObj["nombre-usuario"];

   newformainCell = newformainRow.insertCell(1);
   newformainCell.textContent = formObj["dui"];

   newformainCell = newformainRow.insertCell(2);
   newformainCell.textContent = formObj["nit"];

   newformainCell = newformainRow.insertCell(3);
   newformainCell.textContent = formObj["marca"];
   
   newformainCell = newformainRow.insertCell(4);
   newformainCell.textContent = formObj["modelo"];

   newformainCell = newformainRow.insertCell(5);
   newformainCell.textContent = formObj["anio"];

   newformainCell = newformainRow.insertCell(6);
   newformainCell.textContent = formObj["Color"];

   newformainCell = newformainRow.insertCell(7);
   newformainCell.textContent = formObj["placas"];

   newformainCell = newformainRow.insertCell(8);
   newformainCell.textContent = formObj["problema"];

}

function saveformObj(formObj){
   let saveformObjJSON = JSON.stringify(formObj);
   localStorage.setItem("formData", saveformObjJSON)
}


