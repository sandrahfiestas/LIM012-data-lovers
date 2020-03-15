import { example } from './data.js';
import data from './data/atletas/atletas.js';


const datAtletas = document.getElementById('atletasData');
const olympic = data;

const allAtletas = (olympic) => {
  let info = '';
  olympic.atletas.forEach((obj) => {
    info += `
        <div>
             <p>${obj.name}</p>
        </div>
        `;
  });
  return info;
};
const btnMostrar = document.getElementById('btnMostrar');
btnMostrar.addEventListener('click', () => {
  datAtletas.innerHTML = allAtletas(olympic);
});

console.log(example, data);
