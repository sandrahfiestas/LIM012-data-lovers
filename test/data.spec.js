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
    "name": "Hassan Aliazam Yazdanicharati",
    "gender": "M",
    "height": "181",
    "weight": "74",
    "date-birth": 1995,
    "sport": "Wrestling",
    "game": "2016 Summer",
    "team": "Iran",
    "noc": "IRI",
    "disciplinas": [
      {
        "disciplina": "Wrestling Men's Middleweight, Freestyle",
        "temporada": "Summer",
        "año": 2016,
        "ciudad": "Rio de Janeiro",
        "medalla": "Gold"
      }
    ]
  },
  {
    "id": 134448,
    "name": "Zhang Fengliu",
    "gender": "F",
    "height": "172",
    "weight": "77",
    "date-birth": 1990,
    "sport": "Wrestling",
    "game": "2016 Summer",
    "team": "China",
    "noc": "CHN",
    "disciplinas": [
      {
        "disciplina": "Wrestling Women's Heavyweight, Freestyle",
        "temporada": "Summer",
        "año": 2016,
        "ciudad": "Rio de Janeiro",
        "medalla": "Bronze"
      }
    ]
  },
  {
    "id": 134776,
    "name": "Valeriya Sergeyevna Zholobova-Koblova",
    "gender": "F",
    "height": "164",
    "weight": "58",
    "date-birth": 1993,
    "sport": "Wrestling",
    "game": "2016 Summer",
    "team": "Russia",
    "noc": "RUS",
    "disciplinas": [
      {
        "disciplina": "Wrestling Women's Lightweight, Freestyle",
        "temporada": "Summer",
        "año": 2016,
        "ciudad": "Rio de Janeiro",
        "medalla": "Silver"
      }
    ]
  },
];

describe('filterAtletasForYear', () => {
  it('filterAtletasForYear is a function', () => {
    expect(typeof filterAtletasForYear).toBe('function');
  });

  it('Debería retornar un nuevo array con las olimpiadas 2016', () => {
    expect(filterAtletasForYear(data.atletas, 2016)).toBe('example');
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
