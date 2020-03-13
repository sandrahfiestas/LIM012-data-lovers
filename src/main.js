// import athletesList  from './data.js';
import data from './data/atletas/atletas.js';

// const miraMasDeAtletas = document.getElementsById('miraMasDeAtletas');

// miraMasDeAtletas.addEventListener('click', () => {
// //   const miraMasDeAtleta = document.getElementById('miraMasDeAtletas');
//   miraMasDeAtletas.style.visibility = 'visible';
// });


const olympic = data;
document.getElementsByTagName('td')[0].innerHTML = olympic.atletas[0].name;
document.getElementsByTagName('td')[1].innerHTML = olympic.atletas[1].name;
// document.getElementsByName('td').innerHTML=
// console.log(olympic.atletas[0]);
/*
document.body.table.td.onload = addElement;
function addElement () {
  let newTd = document.createElement('td');
  let newContent = document.createElement(atletas.name[3]);
  newTd.appendChild(newContent);
  let currentTd = document.getElementsByName('td');
  document.body.table.insertBefore(newTd, currentTd);
}
*/
const newTd = document.createElement('td');
const newContent = document.createTextNode('aloha');
const tableContent = document.getElementsByTagName('tbody')[0];
tableContent.appendChild(newTd);
newTd.innerHTML = newContent;
