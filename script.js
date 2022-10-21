const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const tablaAnimales = document.getElementById('oferta');

let id = 1;


const agregarAnimal = () => {
  let fila = tablaAnimales.insertRow(id);
  let columnaNum = fila.insertCell(0);
  let columnaPeso = fila.insertCell(1);
  let columnaLitros = fila.insertCell(2);
  columnaNum.innerHTML = id;
  columnaPeso.innerHTML = billInput.value;
  columnaLitros.innerHTML = tipInput.value;
  id++;
}

const calcularSolucion = () => {

}
