import {
  filterAtletasForYear,
  displayAllData,
} from './data.js';
import data from './data/atletas/atletas.js';
// import atletas from './data/atletas/atletas.js';


// DEFINICION DE VARIABLES
const arrDataAtletas = data.atletas;
const containerMain = document.getElementById('containerMain');
containerMain.classList.remove('hideData');
const byName = document.getElementById('byName');
const btnByName = document.getElementById('btnByName');
// const dVerMas = document.getElementById('dVerMas');
// dVerMas.classList.remove('hideData');
// const btnVerMas = document.getElementById('btnVerMas');
const logoLeftClick = document.getElementById('logoLeftClick');
const logoRightClick = document.getElementById('logoRightClick');
const h1Click = document.getElementById('h1Click');


// CREANDO ELEMENTOS
const h1Element = document.createElement('h1');
const divElement = document.createElement('div');
h1Element.classList.add('title');
divElement.classList.add('counterAndList');
h1Element.textContent = 'ATLETAS OLIMPICOS';
const divTable = document.createElement('div');
// Overlay
const divTableContainer = document.createElement('div');
divTableContainer.setAttribute('id', 'divTableContainer');
divTableContainer.classList.add('hideData');
// Modal
const divFichaModal = document.createElement('div');
divFichaModal.setAttribute('id', 'divFichaModal');
divFichaModal.classList.add('modalContainer');
// Botón cerrar
const btnCloseModal = document.createElement('button');
btnCloseModal.textContent = 'X';
btnCloseModal.setAttribute('id', 'btnCloseModal');
btnCloseModal.classList.add('closeModal');
// Titulo
const modalTitle = document.createElement('h1');
modalTitle.textContent = 'INFORMACIÓN DE ATLETAS';
// Div1 datos personales
const divAll1 = document.createElement('div');
divAll1.classList.add('colorFondo1');
// Div2 datos disciplinas
const divAll2 = document.createElement('div');
divAll2.classList.add('colorFondo2');


// BOTON DEL MENU "MIRA MAS ATLETAS"
btnByName.addEventListener('click', () => {
  containerMain.classList.add('hideData');
  byName.classList.remove('hideData');
  // dVerMas.classList.remove('hideData');

  const filterAtletas2016 = filterAtletasForYear(arrDataAtletas, 2016);
  const myOrderedArray = filterAtletas2016.reduce((acc, currentValue) => {
    if (acc.indexOf(currentValue) === -1) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  let displayTemp2016 = '';
  for (let i = 0; i < myOrderedArray.length; i += 1) {
    const orden = i + 1;
    displayTemp2016 += `<tr class="olympiCelda" id="value">  
                          <td class="small">${orden}</td>
                          <td class="">${myOrderedArray[i].name}</td>
                          <td class="texEnd">${myOrderedArray[i].sport}</td>
                        </tr>  
                       `;
  }
  divTable.querySelector('#pintarData').innerHTML = displayTemp2016;
  divElement.querySelector('#cuenta').innerHTML = `Total de atletas ${myOrderedArray.length}`;
  // Selecciona celda y muestra datos personales
  const celda = divTable.querySelectorAll('.olympiCelda');
  for (let i = 0; i < celda.length; i += 1) {
    celda[i].addEventListener('click', () => {
      divTableContainer.classList.add('overlay');
      divTableContainer.classList.remove('hideData');
      divAll1.innerHTML = `
                          <table id="" class="tableProfile">
                           <tr><th>Nombre:</th><td>${myOrderedArray[i].name}</td></tr>
                           <tr><th>Genero:</th><td>${myOrderedArray[i].gender}</td></tr>
                           <tr><th>Altura:</th><td>${myOrderedArray[i].height}</td></tr>
                           <tr><th>Peso:</th><td>${myOrderedArray[i].weight}</td></tr>
                           <tr><th>Años</th><td>AÑOS</td></tr>
                           <tr><th>Deporte</th><td>${myOrderedArray[i].sport}</td></tr>
                           <tr><th>Equipo</th><td>${myOrderedArray[i].team}</td></tr>
                          </table>
                          `;

      const displayDisciplina = displayAllData(myOrderedArray);
      let displayDivAll2 = '';

      displayDivAll2 += `<tr class="" id=""> 
                            <td class="">${displayDisciplina[i].disciplina}</td>
                            <td class="">${displayDisciplina[i].temporada}</td>
                            <td class="">${displayDisciplina[i].año}</td>
                            <td class="">${displayDisciplina[i].ciudad}</td>
                            <td class="">${displayDisciplina[i].medalla}</td>
                          </tr>  
                         `;
      divAll2.querySelector('#pintarAll2').innerHTML = displayDivAll2;
    });
  }
});

// BOTON CERRAR MODAL
btnCloseModal.addEventListener('click', () => {
  divTableContainer.classList.remove('overlay');
  divTableContainer.classList.add('hideData');
});


// BOTONES TITULO 'JUEGOS OLIMPICOS SIGLO XXI' Y LOGOS
h1Click.addEventListener('click', () => {
  // event.preventDefault();
  window.location.reload();
});
logoLeftClick.addEventListener('click', () => {
  // event.preventDefault();
  window.location.reload();
});
logoRightClick.addEventListener('click', () => {
  // event.preventDefault();
  window.location.reload();
});


/*
// BOTON "VER MAS ATLETAS" SF
btnVerMas.addEventListener('click', () => {
  document.getElementById('masAtletas').classList.remove('hideData');
});
*/


// TABLA NOMBRES DE ATLETAS Y OLIMPIADAS
const markupTable = `
<table id="atletasTb" class="tableContent">
  <thead>
    <th>NOMBRE DE ATLETA</th>
    <th>DEPORTE</th>
  </thead>
    <tbody id="pintarData">
    </tbody>
</table>
`;

const select = `
<select name="year" id="year">
  <option value="2016" selected>Rio de Janeiro 2016</option>  
  <option value="2014">Sochi 2014</option>
  <option value="2012">London 2012</option>
  <option value="2010">Vancouver 2010</option>
  <option value="2008">Beijing 2008</option>
  <option value="2006">Torino 2006</option>
  <option value="2004">Athina 2004</option>
  <option value="2002">Salt Lake City 2002</option>
  <option value="2000">Sydney 2000</option>
  </select>
  <p id="cuenta" class ="counter"</p>
`;

const fichaTable = `
<table class="tableDetail">
  <thead>
    <th>Olimpiada</th>
    <th>Disciplina</th>
    <th>Temporada</th>
    <th>Medallas</th>
  </thead>
    <tbody id="pintarAll2">
    </tbody>
</table>
`;

divElement.innerHTML = select;
divTable.innerHTML = markupTable;
divAll2.innerHTML = fichaTable;


divElement.querySelector('#year').addEventListener('change', (event) => {
  const selectedYear = parseInt(event.target.value, 10);
  const filteredData = filterAtletasForYear(arrDataAtletas, selectedYear);

  const myOrderedArray = filteredData.reduce((acc, currentValue) => {
    if (acc.indexOf(currentValue) === -1) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  // console.log(filteredData);
  // console.log(myOrderedArray);
  let stringTemplate = '';
  for (let i = 0; i < myOrderedArray.length; i += 1) {
    const orden = i + 1;
    stringTemplate += `<tr id="value" class="olympiCelda">
                        <td class="small">${orden}</td>
                        <td>${myOrderedArray[i].name}</td>
                        <td class="texEnd">${myOrderedArray[i].sport}</td>
                      </tr>`;
  }
  divTable.querySelector('#pintarData').innerHTML = stringTemplate;
  divElement.querySelector('#cuenta').innerHTML = `Total de atletas ${myOrderedArray.length}`;
});


// VENTANA ATLETAS OLIMPICOS
document.getElementById('byName').appendChild(h1Element);
document.getElementById('byName').appendChild(divElement);
document.getElementById('byName').appendChild(divTable);
document.getElementById('byName').appendChild(divTableContainer);
document.getElementById('divTableContainer').appendChild(divFichaModal);
document.getElementById('divFichaModal').appendChild(btnCloseModal);
document.getElementById('divFichaModal').appendChild(modalTitle);
document.getElementById('divFichaModal').appendChild(divAll1);
document.getElementById('divFichaModal').appendChild(divAll2);
