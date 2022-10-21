const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const tablaAnimales = document.getElementById('oferta');
const solucion = document.getElementById('perPersonTotal');

let id = 1;
let listaAnimales = [];

const agregarAnimal = () => {
  let fila = tablaAnimales.insertRow(id);
  let columnaNum = fila.insertCell(0);
  let columnaPeso = fila.insertCell(1);
  let columnaLitros = fila.insertCell(2);
  columnaNum.innerHTML = id;
  columnaPeso.innerHTML = billInput.value;
  columnaLitros.innerHTML = tipInput.value;
  let animal = [id, +billInput.value, +tipInput.value];
  listaAnimales.push(animal)
  id++;
  // calcularSolucion();
}

const calcularSolucion = () => {
  let listaLeche = [];
  let listaPeso = [];
  
  let lecheEficiencia = [];
  let tmp;
  let min;
  let j;
  const carga = 900;
  let cargaActual = 0;
  let maxLeche = 0;
  
  for(const animal of listaAnimales) {
    listaLeche.push(animal[1]);
    listaPeso.push(animal[2]);
  }
  
  for(let i = 0; i < listaAnimales.length; i++) {
    lecheEficiencia.push(listaLeche[i]/listaPeso[i]*listaLeche[i]);
  }

  for(let i = 0; i < listaAnimales.length; i++) {
    min = i;
    for(j = i + 1; listaAnimales.length; j++) {
      if(lecheEficiencia[j] > lecheEficiencia[min]) {
        min = j;
      }
    }
    tmp = lecheEficiencia[i];
    lecheEficiencia[i] = lecheEficiencia[min];
    lecheEficiencia[min] = tmp;

    tmp = leche[i];
    listaLeche[i] = listaLeche[min];
    listaLeche[min] = tmp;

    tmp = listaPeso[i]
    listaPeso[i] = listaPeso[min];
    listaPeso[min] = tmp;
  }

  for(let i = 0; i < listaAnimales.length; i++) {
    cargaActual = cargaActual + peso[i];
    if(cargaActual >= carga) {
      cargaActual = cargaActual - listaPeso[i];
    } else {
      maxLeche += listaLeche[i];
    }
  }
  solucion.innerHTML = `${cargaActual} kg/ ${maxLeche} L`;
  // console.log(maxLeche, cargaActual);

  // console.log(listaLeche);
  // console.log(listaPeso);
}
