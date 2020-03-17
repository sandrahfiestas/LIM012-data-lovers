// import { example } from './data.js';
import data from './data/atletas/atletas.js';
// import atletasNames from './data.js';
// import markupTable from './data.js';


const atletasNames = names => `<tr><td>${names.name} <span class="tableLeft">${names.sport}</span></td></tr>`;
const createOption = () => ` <option value="default">default</option> 
`;

// dropDown list con las olimpiadas
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
const markupTable = `
<div>
<h1 class="title">ATLETAS OLIMPICOS</h1>
${dropDownList}
<table class="tableContent">
    <thead>
      <th>Nombre <span class="tableTitleLeft">Deporte</span></th>
    </thead>
    <tbody>
    ${data.atletas.map(atletasNames).join('')}
    </body>    
  </table>
  </div>
`;

// DOM

document.getElementById('byName').innerHTML = markupTable;
document.getElementsByClassName('olympicsDropdownList').innerHTML = dropDownList;
