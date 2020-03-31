import data from './data/atletas/atletas.js';
// estas funciones son de ejemplo
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

export const filterAtletasForYear = (arr, num) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arrDataAtletas[i].disciplinas);
    if (arr[i].hasOwnProperty('disciplinas')) {
      const arrayDisciplinas = arr[i].disciplinas;
      for (let j = 0; j < arrayDisciplinas.length; j++) {
        if (arrayDisciplinas[j]['año'] === num) {
          newArr.push(arr[i]);
        }
      }
    }
  }
  return newArr;
};

export default data.js;
