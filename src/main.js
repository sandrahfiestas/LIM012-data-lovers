import {
  filterAtletasForYear,
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
const fichaAtleta = document.getElementById('table-container');
const btnDeportes = document.getElementById('btnDeportes');
const logoLeftClick = document.getElementById('logoLeftClick');
const logoRightClick = document.getElementById('logoRightClick');
const h1Click = document.getElementById('h1Click');


// CREANDO ELEMENTOS HISTORIA UNO
const h1Element = document.createElement('h1');
const divElement = document.createElement('div');
h1Element.classList.add('title');
divElement.classList.add('counterAndList');
h1Element.textContent = 'ATLETAS OLIMPICOS';
const divTable = document.createElement('div');


// BOTON DEL MENU "MIRA MAS ATLETAS"
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
    displayTemp2016 += `<tr><td>${orden}  ${myOrderedArray[i].name}</td></tr>`;
  }
  divTable.querySelector('#pintarData').innerHTML = displayTemp2016;
  divElement.querySelector('#cuenta').innerHTML = ` Total de atletas ${myOrderedArray.length}`;
  // divElement.querySelector('#year').value =
});

// BOTON DEPORTES MOSTAR FICHA DE ATLETA
btnDeportes.addEventListener('click', () => {
  containerMain.classList.add('hideData');
  byName.classList.add('hideData');
  fichaAtleta.classList.remove('hideData');
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
      <th>Nombre</th>
      <th> Olimpiada</span></th>
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

divElement.innerHTML = select;
divTable.innerHTML = markupTable;

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
    stringTemplate += `<tr><td>${orden}  ${myOrderedArray[i].name}</td></tr>`;
  }
  divTable.querySelector('#pintarData').innerHTML = stringTemplate;
  divElement.querySelector('#cuenta').innerHTML = ` Total de atletas ${myOrderedArray.length}`;
});


// VENTANA ATLETAS OLIMPICOS
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


/*
  // (PRACTICA) filter SF
  const arrayDisciplinas = data.atletas.filter(arr => arr.hasOwnProperty('disciplinas'));
  const array2016 = arrayDisciplinas.filter(year => year.disciplinas[0].año === 2016);
  console.log(array2016);

*/

/*
  // USANDO JSON
  const aFilteredData = filteredData.filter((valorActual, indiceActual, arreglo) => {
   return arreglo.findIndex(
     valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)
     ) === indiceActual
  });
  */
