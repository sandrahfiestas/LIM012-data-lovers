import data from './data/atletas/atletas.js';
// estas funciones son de ejemplo
// export const example = () => 'example';
// export const anotherExample = () => 'OMG';

export const filterAtletasForYear = (arr, num) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    // console.log(arrDataAtletas[i].disciplinas);
    if (arr[i].hasOwnProperty('disciplinas')) {
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

// export const filterAtletasForYearTwo = (atleta) => {
//   atleta.forEach((element) => {
//     let elementos = '';
//     const name = element.name;
//   //  if (!element.disciplinas) {
//     element.disciplinas.forEach((objeto) => {
//       elementos = `<tr class=""><td>${name}
//         <span class="tableLeft">${objeto.ciudad}
//         ${objeto.año}</span></td></tr>`;
//     //   console.dir(objeto);
//       return elementos;
//     });
//    //  }
//   });
// };


export default data.js;
