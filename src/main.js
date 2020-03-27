// import { example } from './data.js';
import data from './data/atletas/atletas.js';
import atletas from './data/atletas/atletas.js';
// import atletasNames from './data.js';
// import markupTable from './data.js';

// definicion de variables
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
});
// botón "Ver más atletas" SiFunciona
// btnVerMas.addEventListener('click', () => {
//   document.getElementById('masAtletas').classList.remove('hideData');
// });

// Muestra los 5 primeros registros (HISTORIA 1)
// const atletasNames = (element, index) => {
//   let elementos = '';
//   if (index < 5) {
//     elementos = `<tr class=""><td>${element.name}
//       <span class="tableLeft">${element.disciplinas[0]['ciudad']} ${element.disciplinas[0]['año']}</span></td></tr>`;
//   }
//   return elementos;
// };

// muestra los registros restantes (apartir del sexto registro)
/*
const muestraTodo = (names, index) => {
  let masElementos = '';
  if (index > 4) {
    masElementos = `<tr id="masAtletas" class="mostrarTr hideData"><td>${names.name}
    <span class="tableLeft"></span></td></tr>`;
  }
  return masElementos;
};

// ${data.atletas.map(atletasNames).join('')}
// ${data.atletas.map(muestraTodo).join('')}
// */
/*
// Create element a select dropdown list
const yearList = (ele) => {
 const list = ` <option value="${ele.disciplinas[0]['ciudad']} ${ele.disciplinas[0]['año']}">
 ${ele.disciplinas[0]['ciudad']} ${ele.disciplinas[0]['año']}</option>
  `;
  console.log(list);
  return list;
};
// data.atletas.map(yearList);
*/

const atletasNames = (element, index) => {
  let elementos = '';
  if (index < 6000) {
    if (element.disciplinas[0]['año'] === 2012) {
      elementos = `<tr class=""><td>${element.name}
    <span class="tableLeft">${element.disciplinas[0]['ciudad']}
    ${element.disciplinas[0]['año']}</span></td></tr>`;
    }
  }
  return elementos;
};

// tabla de nombres de atletas ${createOption(data.atletas)}
const markupTable = `
<h1 class="title">ATLETAS OLIMPICOS</h1>
<div class ="counterAndList">
  <select name="year" id="year">
  <option value="Rio de Janeiro 2016">Rio de Janeiro 2016</option>  
  <option value="Sochi 2014">Sochi 2014</option>
  <option value="London 2012">London 2012</option>
  <option value="Vancouver 2010">Vancouver 2010</option>
  <option value="Beijing 2008">Beijing 2008</option>
  <option value="Torino 2006">Torino 2006</option>
  <option value="Athina 2004">Athina 2004</option>
  <option value="Salt Lake City 2002">Salt Lake City 2002</option>
  <option value="Sydney 2000">Sydney 2000</option>
  </select id="olimpiadas">
  <p class="counter">Total de atletas ${data.atletas.length}</p>
</div>
<div>
<table id="atletasTb" class="tableContent">
    <thead>
      <th>Nombre <span class="tableTitleLeft"></span></th>
      <th> Olimpiada <span class="tableTitleLeft"></span></th>
    </thead>
    <tbody>
    ${data.atletas.map(atletasNames).join('')}
    </tbody>
</table>
</div>
`;
// tabla de atletas
document.getElementById('byName').innerHTML = markupTable;


// muestra una lista de atletas y las olimpiadas 2016
// const atletasNames = (element, index) => {
//   let elementos = '';
//   element.disciplinas.forEach((objeto) => {
//     if (objeto.año === 2016) {
//       elementos = `<tr id="masAtletas" class="hideData"><td>${element.name}
//       <span class="tableLeft">${objeto.ciudad} ${objeto.año}</span></td></tr>`;
//     } if (index < 5) {
//       elementos = `<tr id="masAtletas" class="hideData"><td>${element.name}
//       <span class="tableLeft">${objeto.ciudad} ${objeto.año}</span></td></tr>`;
//     } else {
//       return 'no encuentro index';
//     }
//     console.log(elementos);
//     return elementos;
//   });
// };


// DOM
// dropdown division document.getElementsByClassName('counterAndList').innerHTML = dropDownList;
// document.getElementById('drop').innerHTML = dropDownList;

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


// const atletasNames = names => `<tr><td>${names.name}
// <span class="tableLeft">${names.sport}</span></td></tr>`;


// practica filtra nombre y año con forEach (BETSY)
/*
const atletasData = data.atletas.forEach((element) => {
  element.disciplinas.forEach((objeto) => {
    console.log(element.name + objeto.ciudad + objeto.año);
  });
});
*/
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

// const aNamesList = (ele) => {
//   // console.log(ele.name);
//   let name = '';
//   name = `<tr class='mostrarTr'><td>${ele.name}
//     <span class="tableLeft"></span></td></tr>`;
//     return name;
//   };
//   const atletasNamesList = data.atletas
//     .filter(aNamesList => aNamesList.);
//     .forEach(aNamesList => console.log(aNamesList.name));

// const atletasData = data.atletas.forEach((element) => {
//   element.disciplinas.forEach((objeto) => {
//     // console.log(element.name + objeto.ciudad + objeto.año);
//     element.filter((ele) => {
//       let elementos = '';
//       if (ele.año === 2016) {
//         elementos = `<tr id="masAtletas" class="mostrarTr hideData"><td>${element.name}
//         <span class="tableLeft">${objeto.ciudad} ${objeto.año}</span></td></tr>`;
//         console.log(elementos);
//       }
//       return elementos;
//     });
//   });
// });

// separa dos func
// una que filtre (testeo)
// lista
// filtre
