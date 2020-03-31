import { filterAtletasForYear } from './data.js';
import data from './data/atletas/atletas.js';
// import atletas from './data/atletas/atletas.js';

// Definicion de variables
const containerMain = document.getElementById('containerMain');
containerMain.classList.remove('hideData');
const byName = document.getElementById('byName');
// byName.classList.remove('hideData');
const btnByName = document.getElementById('btnByName');
// const dVerMas = document.getElementById('dVerMas');
// dVerMas.classList.remove('hideData');
// const btnVerMas = document.getElementById('btnVerMas');


// BOTONES
// botón del menú "MIRA MAS ATLETAS"
btnByName.addEventListener('click', () => {
  containerMain.classList.add('hideData');
  byName.classList.remove('hideData');
  // dVerMas.classList.remove('hideData');
  /* Neliada llama funcion
  const listFuncion = list(data.atletas);
  document.getElementById('atletasRow').innerHTML = listFuncion; */
});

// botón "Ver más atletas" SiFunciona
// btnVerMas.addEventListener('click', () => {
//   document.getElementById('masAtletas').classList.remove('hideData');
// });

const arrDataAtletas = data.atletas;

const h1Element = document.createElement('h1');
const divElement = document.createElement('div');
h1Element.classList.add('title');
h1Element.textContent = 'ATLETAS OLIMPICOS';
divElement.classList.add('counterAndList');
const divTable = document.createElement('div');

// tabla de nombres de atletas y olimpiadas
const markupTable = `
<table id="atletasTb" class="tableContent">
    <thead>
      <th>Nombre <span class="tableTitleLeft"></span></th>
      <th> Olimpiada <span class="tableTitleLeft"></span></th>
    </thead>
    <tbody id="pintarData">
    </tbody>
</table>
`;

const select = `
<select name="year" id="year">
  <option value="2016">Rio de Janeiro 2016</option>  
  <option value="2014">Sochi 2014</option>
  <option value="2012">London 2012</option>
  <option value="2010">Vancouver 2010</option>
  <option value="2008">Beijing 2008</option>
  <option value="2006">Torino 2006</option>
  <option value="2004">Athina 2004</option>
  <option value="2002">Salt Lake City 2002</option>
  <option value="2000">Sydney 2000</option>
  </select id="olimpiadas">
  <p class="counter">Total de atletas ${data.atletas.length}</p>
`;

divElement.innerHTML = select;
divTable.innerHTML = markupTable;

divElement.querySelector('#year').addEventListener('change', (event) => {
  const selectedYear = parseInt(event.target.value);
  const filteredData = filterAtletasForYear(arrDataAtletas, selectedYear);
  let stringTemplate = '';
  for (let i = 0; i < filteredData.length; i++) {
    stringTemplate += `<tr>
                        <td>${filteredData[i].name}<span> ${filteredData[i].sport}</span</td>
                      </tr>`;
  }
  divTable.querySelector('#pintarData').innerHTML = stringTemplate;
  console.log(stringTemplate);
});


// tabla de atletas
document.getElementById('byName').appendChild(h1Element);
document.getElementById('byName').appendChild(divElement);
document.getElementById('byName').appendChild(divTable);

/* NELIDA
// practica filtra nombre y año con forEach (
  data.atletas.forEach((atleta) => {
    if (!atleta.disciplinas) {
      console.dir(atleta);
    }
  });

// practica filtra nombre y año con forEach (
const list = (atleta) => {
  atleta.forEach((element) => {
    let elementos = '';
    const name = element.name;
  //  if (!element.disciplinas) {
    element.disciplinas.forEach((objeto) => {
      elementos = `<tr class=""><td>${name}
        <span class="tableLeft">${objeto.ciudad}
        ${objeto.año}</span></td></tr>`;
    //   console.dir(objeto);
      return elementos;
    });
   //  }
  });
};
*/

// Muestra los 5 primeros registros (HISTORIA 1)
/*
const atletasNames = (element, index) => {
  let elementos = '';
  if (index < 5) {
    elementos = `<tr class=""><td>${element.name}
      <span class="tableLeft">${element.disciplinas[0]['ciudad']}
      ${element.disciplinas[0]['año']}</span></td></tr>`;
  }
  return elementos;
};
// ${data.atletas.map(atletasNames).join('')}
*/

// atletas.map((element, index, year) => {
//   let elementos = '';
//   if (index < 6000) {
//     if (element.disciplinas[0]['año'] === year) {
//       elementos = `<tr class=""><td>${element.name}
//     <span class="tableLeft">${element.disciplinas[0]['ciudad']}
//     ${element.disciplinas[0]['año']}</span></td></tr>`;
//     }
//   }
//   return elementos;
// }).join('');
