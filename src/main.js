// import { example } from './data.js';
import data from './data/atletas/atletas.js';
// import atletasNames from './data.js';
// import markupTable from './data.js';

/*
En este archivo se muestra los 5 primeros elementos de la data atletas
----------------------------------------------------------------------
*/

// const atletasNames = names => `<tr><td>${names.name}
// <span class="tableLeft">${names.sport}</span></td></tr>`;


// practica filtra nombre y año con forEach
/*
const atletasData = data.atletas.forEach((element) => {
  element.disciplinas.forEach((objeto) => {
    console.log(element.name + objeto.ciudad + objeto.año);
  });
});
*/

// dropDown list con las olimpiadas
const createOption = () => ` <option value="default">default</option>
`;
const dropDownList = `
  <div class = counterAndList>
  <select class="olympicsDropdownList">
    ${createOption}
  </select>
  <p class="counter">Resultado total de atletas ${data.atletas.length}</p>
  <p>${data.atletas[10]}</p>
  </div>
`;

// tabla de atletas nombres y deportes
/*
const atletasNames = (names, index) => {
  let elements = '';
  if (index < 5) {
    elements = `<tr class='mostrarTr'><td>${names.name}
    <span class="tableLeft"></span></td></tr>`;
  }
  return elements;
};
const nameList = data.atletas.map(atletasNames).join('');
// console.log(nameList);
*/


// PARCTICE DE LA LISTA DE NOMBRES POR MEDIO DE FOR EACH
/*
const aNamesList = (ele) => {
  console.log(ele.name);
  // let name = '';
  // name = `<tr class='mostrarTr'><td>${ele.name}
  // <span class="tableLeft"></span></td></tr>`;
  return ele.name;
};
const atletasNamesList = data.atletas.forEach(aNamesList);
*/
// muestra los 5 primeros registros
const atletasNames = (names, index) => {
  let elements = [];
  if (index < 5) {
    elements = `<tr class="mostrarTr"><td>${names.name}
    <span class="tableLeft"></span></td></tr>`;
  }
  console.log(elements);
  return elements;
};
// muestra los registros restantes (apartir del sexto registro)
const muestraTodo = (names, index) => {
  let masElementos = '';
  if (index > 4) {
    masElementos = `<tr id="masAtletas" class="mostrarTr hideData"><td>${names.name}
    <span class="tableLeft"></span></td></tr>`;
  }
  return masElementos;
};
// tabla de nombres de atletas
const markupTable = `
<div>
<h1 class="title">ATLETAS OLIMPICOS</h1>
<table class="tableContent">
    <thead>
      <th >Nombre <span class="tableTitleLeft"></span></th>
      <th> Olimpiada <span class="tableTitleLeft"></span></th>
    </thead>
    <tbody>
    ${data.atletas.map(atletasNames).join('')}
    ${data.atletas.map(muestraTodo).join('')}
    </tbody>
</table>
`;
/*
const markupTable = `
<div>
<h1 class="title">ATLETAS OLIMPICOS</h1>
${dropDownList}
<table class="tableContent">
    <thead>
      <th>Nombre <span class="tableTitleLeft">Olimpiadas</span></th>
    </thead>
    <tbody>
    ${nameList}
    </body>
  </table>
  <button id = "myBtn" class = "myBtn" type = "button" name = "VerMas">Ver Mas</button>
  </div>
`;

// ${data.atletas.map(atletasNames).join('')}
*/
// DOM
// tabla de atletas
document.getElementById('byName').innerHTML = markupTable;
// drompdown division
document.getElementsByClassName('olympicsDropdownList').innerHTML = dropDownList;
// definicion de variables
const containerMain = document.getElementById('containerMain');
containerMain.classList.remove('hideData');
const byName = document.getElementById('byName');
const btnByName = document.getElementById('btnByName');
const dVerMas = document.getElementById('dVerMas');
const btnVerMas = document.getElementById('btnVerMas');
// botón del menú "MIRA MAS ATLETAS"
btnByName.addEventListener('click', () => {
  containerMain.classList.add('hideData');
  byName.classList.remove('hideData');
  dVerMas.classList.remove('hideData');
});
// botón "Ver más atletas"
btnVerMas.addEventListener('click', () => {
  document.getElementById('masAtletas').classList.remove('hideData');
});
