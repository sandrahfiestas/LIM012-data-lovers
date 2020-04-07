import data from './data/atletas/atletas.js';
// estas funciones son de ejemplo
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';


export const filterAtletasForYear = (arr, num) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(arr[i], 'disciplinas')) {
      const arrayDisciplinas = arr[i].disciplinas;
      for (let j = 0; j < arrayDisciplinas.length; j += 1) {
        if (arrayDisciplinas[j]['año'] === num) {
          newArr.push(arr[i]);
        }
      }
    }
  }
  return newArr;
};


export const displayAllData = (arry) => {
  const newArr = [];
  arry.forEach((element) => {
    if (Object.prototype.hasOwnProperty.call(element, 'disciplinas')) {
      element.disciplinas.forEach((objeto) => {
        newArr.push(objeto);
      });
    }
  });
  return newArr;
};

// };


// const topMedallistas = (arr, num) => {
//   const medallistas = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Object.prototype.hasOwnProperty.call(arr[i], 'disciplinas')) {
//       const arrayDisciplina = arr[i].disciplinas;
//       for (let j = 0; j < arrayDisciplina.length; j++) {
//         // const element = array[j];
//         console.log(arrayDisciplina[j].medalla);
//       }
//     }
//     // const element = arr[i];
//   }
// };
// topMedallistas(data.atletas, 2016);

export default data.js;
