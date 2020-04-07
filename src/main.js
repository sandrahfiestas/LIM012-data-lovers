import {
  filterAtletasForYear,
  filterAtletasForTemporada,
} from './data.js';
import data from './data/atletas/atletas.js';
// import atletas from './data/atletas/atletas.js';

// DEFINICION de variables
const arrDataAtletas = data.atletas;

const containerMain = document.getElementById('containerMain');
containerMain.classList.remove('hideData');
const byName = document.getElementById('byName');
const btnByName = document.getElementById('btnByName');
// const dVerMas = document.getElementById('dVerMas');
// dVerMas.classList.remove('hideData');
// const btnVerMas = document.getElementById('btnVerMas');
const fichaAtleta = document.getElementById('table-container');
// const btnDeportes = document.getElementById('btnDeportes');
const logoLeftClick = document.getElementById('logoLeftClick');
const logoRightClick = document.getElementById('logoRightClick');
const h1Click = document.getElementById('h1Click');


/* CREANDO ELEMENTOS HISTORIA UNO */
const h1Element = document.createElement('h1');
const divElement = document.createElement('div');
h1Element.classList.add('title');
divElement.classList.add('counterAndList');
h1Element.textContent = 'ATLETAS OLIMPICOS';
const divTable = document.createElement('div');


// BOTONES
// botón del menú "--MIRA MAS ATLETAS--"
btnByName.addEventListener('click', () => {
  containerMain.classList.add('hideData');
  fichaAtleta.classList.add('hideData');
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
    displayTemp2016 += `<tr id="value" class="ficha">
                          <td class="small">${orden}</td>
                          <td>${myOrderedArray[i].name}</td>
                          <td class="textEnd">${myOrderedArray[i].sport}</td>
                        </tr>`;
  }
  divTable.querySelector('#pintarData').innerHTML = displayTemp2016;
  divElement.querySelector('#cuenta').innerHTML = ` Total de atletas ${myOrderedArray.length}`;
});

// divTable.querySelector('.ficha').addEventListener('click', () => {
//   containerMain.classList.add('hideData');
//   byName.classList.add('hideData');
//   fichaAtleta.classList.remove('hideData');
//   const dataValue = divTable.querySelector('#value').textContent;
//   console.log(dataValue);
// });

// BOTON DEPORTES MOSTAR FICHA DE ATLETA
// btnDeportes.addEventListener('click', () => {
//   containerMain.classList.add('hideData');
//   byName.classList.add('hideData');
//   fichaAtleta.classList.remove('hideData');
// });

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

// botón "Ver más atletas" SiFunciona
// btnVerMas.addEventListener('click', () => {
//   document.getElementById('masAtletas').classList.remove('hideData');
// });


// tabla de nombres de atletas y olimpiadas
const markupTable = `
<table id="atletasTb" class="tableContent">
      <th>Nombre</th>
      <th><span>DEPORTE</span></th>
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

divElement.innerHTML = select;
divTable.innerHTML = markupTable;

divElement.querySelector('#year').addEventListener('change', (event) => {
  const selectedYear = parseInt(event.target.value, 10);
  const filteredData = filterAtletasForYear(arrDataAtletas, selectedYear);
  let stringTemplate = '';

  const myOrderedArray = filteredData.reduce((acc, currentValue) => {
    if (acc.indexOf(currentValue) === -1) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  // console.log(filteredData);
  // console.log(myOrderedArray);
  for (let i = 0; i < myOrderedArray.length; i += 1) {
    const orden = i + 1;
    stringTemplate += `<tr id="value" data-href="#table-container">
                          <td class="small">${orden}</td>
                          <td>${myOrderedArray[i].name}</td>
                          <td class="textEnd">${myOrderedArray[i].sport}</td>
                       </tr>`;
  }
  divTable.querySelector('#pintarData').innerHTML = stringTemplate;
  divElement.querySelector('#cuenta').innerHTML = ` Total de atletas ${myOrderedArray.length}`;
});

// tabla de atletas
document.getElementById('byName').appendChild(h1Element);
document.getElementById('byName').appendChild(divElement);
document.getElementById('byName').appendChild(divTable);

// ----BUSQUEDA POR DEPORTE----//
const btnWinter = document.getElementById('winter');
const winterSecction = document.getElementById('TemporadaInvierno');
const winterContent = document.createElement('div');
winterContent.classList.add('depotesdiv');
winterSecction.appendChild(winterContent);

const btnSummer = document.getElementById('summer');
const summerSecction = document.getElementById('TemporadaVerano');
const summerContent = document.createElement('div');
summerContent.classList.add('depotesdiv');
summerSecction.appendChild(summerContent);

btnWinter.addEventListener('click', () => {
  containerMain.classList.add('hideData');
  winterSecction.classList.remove('hideData');
  summerSecction.classList.add('hideData');
  // DEPORTES FILTRADO POR TEMPORADA INVIERNO
  const temporada = filterAtletasForTemporada(arrDataAtletas, 'Winter');
  const myReduceTempSports = temporada.reduce((acc, currentValue) => {
    if (acc.indexOf(currentValue) === -1) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  const orderedtemp = myReduceTempSports.sort();
  let strTemplate = '';
  for (let i = 0; i < orderedtemp.length; i += 1) {
    strTemplate += `<div id="listDiv"class="sportContainer">
                         <p class="sportTitle">${orderedtemp[i]}</p>
                   </div>`;
  }
  // console.log(orderedtemp);
  // console.log(strTemplate);
  winterContent.innerHTML = strTemplate;
});

const btnSortW = document.getElementById('btnSort');
btnSortW.addEventListener('click', () => {
  const sportDiv = winterContent.querySelectorAll('.sportTitle');
  console.log(sportDiv);
  // console.log(winterContent.querySelectorAll('.sportTitle'));
});

btnSummer.addEventListener('click', () => {
  containerMain.classList.add('hideData');
  summerSecction.classList.remove('hideData');
  winterSecction.classList.add('hideData');
  // DEPORTES FILTRADO POR TEMPORADA VERANO
  const temporada = filterAtletasForTemporada(arrDataAtletas, 'Summer');
  // console.log(temporada);

  const myReduceTempSports = temporada.reduce((acc, currentValue) => {
    if (acc.indexOf(currentValue) === -1) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  // console.log(myReduceTempSports);
  const orderedtemp = myReduceTempSports.sort();
  let strTemplate = '';
  for (let i = 0; i < orderedtemp.length; i += 1) {
    strTemplate += `<div class="sportContainer">
                         <p class="sportTitle">${orderedtemp[i]}</p>
                   </div>`;
  }
  // console.log(orderedtemp);
  summerContent.innerHTML = strTemplate;
});
