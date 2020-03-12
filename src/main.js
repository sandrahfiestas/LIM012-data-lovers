// import { example } from './data.js';
import data from './data/atletas/atletas.js';

const olympic = data;
document.getElementsByTagName('td').innerHTML = olympic.atletas[0].name;
console.log(olympic.atletas[0].name);
