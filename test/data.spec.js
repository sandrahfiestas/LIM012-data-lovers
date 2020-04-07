// import { example, anotherExample } from '../src/data.js';

import { filterAtletasForYear } from '../src/data.js';

const testOne = [
  {
    id: 132665,
    name: 'Selim Yaar',
    sport: 'Wrestling',
    game: '2016 Summer',
    disciplinas: [
      {
        disciplina: "Wrestling Men's Light-Heavyweight, Freestyle",
        temporada: 'Summer',
        año: 2016,
        ciudad: 'Rio de Janeiro',
        medalla: 'Silver',
      },
    ],
  },
  {
    id: 132729,
    name: 'Hassan Aliazam Yazdanicharati',
    sport: 'Wrestling',
    game: '2016 Summer',
    disciplinas: [
      {
        disciplina: "Wrestling Men's Middleweight, Freestyle",
        temporada: 'Summer',
        año: 2016,
        ciudad: 'Rio de Janeiro',
        medalla: 'Gold',
      },
    ],
  },
  {
    id: 134448,
    name: 'Zhang Fengliu',
    sport: 'Wrestling',
    game: '2016 Summer',
    disciplinas: [
      {
        disciplina: "Wrestling Women's Heavyweight, Freestyle",
        temporada: 'Summer',
        año: 2016,
        ciudad: 'Rio de Janeiro',
        medalla: 'Bronze',
      },
    ],
  },
  {
    id: 134776,
    name: 'Valeriya Sergeyevna Zholobova-Koblova',
    sport: 'Wrestling',
    game: '2016 Summer',
    disciplinas: [
      {
        disciplina: "Wrestling Women's Lightweight, Freestyle",
        temporada: 'Summer',
        año: 2012,
        ciudad: 'Rio de Janeiro',
        medalla: 'Silver',
      },
    ],
  },
];

const testAnswer2016 = [
  {
    id: 132665,
    name: 'Selim Yaar',
    sport: 'Wrestling',
    game: '2016 Summer',
    disciplinas: [
      {
        disciplina: "Wrestling Men's Light-Heavyweight, Freestyle",
        temporada: 'Summer',
        año: 2016,
        ciudad: 'Rio de Janeiro',
        medalla: 'Silver',
      },
    ],
  },
  {
    id: 132729,
    name: 'Hassan Aliazam Yazdanicharati',
    sport: 'Wrestling',
    game: '2016 Summer',
    disciplinas: [
      {
        disciplina: "Wrestling Men's Middleweight, Freestyle",
        temporada: 'Summer',
        año: 2016,
        ciudad: 'Rio de Janeiro',
        medalla: 'Gold',
      },
    ],
  },
  {
    id: 134448,
    name: 'Zhang Fengliu',
    sport: 'Wrestling',
    game: '2016 Summer',
    disciplinas: [
      {
        disciplina: "Wrestling Women's Heavyweight, Freestyle",
        temporada: 'Summer',
        año: 2016,
        ciudad: 'Rio de Janeiro',
        medalla: 'Bronze',
      },
    ],
  },
];

describe('filterAtletasForYear', () => {
  it('filterAtletasForYear is a function', () => {
    expect(typeof filterAtletasForYear).toBe('function');
  });
  it('Debería retornar un nuevo array con las olimpiadas 2016', () => {
    expect(filterAtletasForYear(testOne, 2016)).toEqual(testAnswer2016);
  });
});


/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });
  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
