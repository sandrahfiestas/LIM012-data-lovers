import data from './data/atletas/atletas.js';
// estas funciones son de ejemplo
// export const example = () => 'example';
export const anotherExample = () => 'OMG';


export const filterAtletasForYear = (arr, num) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    // console.log(arrDataAtletas[i].disciplinas);
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
/*
const arrDataAtletas = data.atletas;

const fFilter = (arr, n) => {
  // const disciplinasArr = [];
  arr.forEach((element) => {
    if (element.disciplinas) {
      element.disciplinas.forEach((e) => {
        console.log(e);
        // for (const key in object) {
        //   if (object.hasOwnProperty(key)) {
        //     const element = object[key];
        //   }
        // }

        // const disciplinasKeys = Object.keys(e);
        // const vals = Object.values(e);
        // console.log(disciplinasKeys);
        // e.filter()
      });
    } else {
      // console.log('chau');
    }
  });
};

fFilter(arrDataAtletas, 2016);
*/
// if (e['año'] === n) {
//   const year = e['año'];
//   // disciplinasArr.push(year);
//   // console.log(`${element.names}: ${year}`);
//   console.log(year);
// }


// console.log(Object.entries(arrDataAtletas)); //
// console.log(Object.keys(arrDataAtletas.disciplinas));

// Object.entries(data).forEach((key, value) => console.log(`${key}: ${value}`));

// export const exampleDisciplinas = (arr, num) => {

// };

// export const reduceArray = (array) => {
//   array.reduce((acc, currentValue) => {
//     if (acc.indexOf(currentValue) === -1) {
//       acc.push(currentValue);
//     }
//     return acc;
//   }, []);
// };

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
