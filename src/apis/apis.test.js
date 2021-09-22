import { numeroAleatorio } from "../functions/numeroAleatorio";
import { getFiltroGender } from "./getFiltroGender";
import { getFiltroPersonajes } from "./getFiltroPersonajes";
import { getObtenerPersonajeEspecifico } from "./getObtenerPersonajeEspecifico";
import { getTodoPersonajesPaginacion } from "./getObtenerTodosPersonajesPaginacion";
import { obtenerPersonajes } from "./obtenerPersonajes";
import {
  obtenerPersonajesInteresantes,
} from "./ObtenerPersonajesInteresantes";

jest.mock("../functions/numeroAleatorio.js");

const dataFiltroPersonaje = {
  info: {
    count: 4,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 290,
      name: "Rick Sanchez",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Evil Rick's Target Dimension)",
        url: "https://rickandmortyapi.com/api/location/34",
      },
      location: {
        name: "Earth (Evil Rick's Target Dimension)",
        url: "https://rickandmortyapi.com/api/location/34",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/290.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10"],
      url: "https://rickandmortyapi.com/api/character/290",
      created: "2017-12-31T20:15:25.716Z",
    },
    {
      id: 293,
      name: "Rick Sanchez",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/293.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/6"],
      url: "https://rickandmortyapi.com/api/character/293",
      created: "2017-12-31T20:22:29.032Z",
    },
    {
      id: 631,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "Soulless Puppet",
      gender: "Male",
      origin: {
        name: "Story Train",
        url: "https://rickandmortyapi.com/api/location/96",
      },
      location: {
        name: "Story Train",
        url: "https://rickandmortyapi.com/api/location/96",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/631.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/37"],
      url: "https://rickandmortyapi.com/api/character/631",
      created: "2020-08-06T16:39:08.485Z",
    },
  ],
};

const dataFiltroGeneroPersonaje = {
  info: {
    count: 499,
    pages: 25,
    next: "https://rickandmortyapi.com/api/character/?page=2&gender=Male",
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/5",
      created: "2017-11-04T19:26:56.301Z",
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      type: "Genetic experiment",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Testicle Monster Dimension",
        url: "https://rickandmortyapi.com/api/location/21",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
      ],
      url: "https://rickandmortyapi.com/api/character/7",
      created: "2017-11-04T19:59:20.523Z",
    },
    {
      id: 8,
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/28"],
      url: "https://rickandmortyapi.com/api/character/8",
      created: "2017-11-04T20:03:34.737Z",
    },
    {
      id: 9,
      name: "Agency Director",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/24"],
      url: "https://rickandmortyapi.com/api/character/9",
      created: "2017-11-04T20:06:54.976Z",
    },
    {
      id: 10,
      name: "Alan Rails",
      status: "Dead",
      species: "Human",
      type: "Superhuman (Ghost trains summoner)",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Worldender's lair",
        url: "https://rickandmortyapi.com/api/location/4",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/25"],
      url: "https://rickandmortyapi.com/api/character/10",
      created: "2017-11-04T20:19:09.017Z",
    },
    {
      id: 11,
      name: "Albert Einstein",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/12"],
      url: "https://rickandmortyapi.com/api/character/11",
      created: "2017-11-04T20:20:20.965Z",
    },
    {
      id: 12,
      name: "Alexander",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Anatomy Park",
        url: "https://rickandmortyapi.com/api/location/5",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/3"],
      url: "https://rickandmortyapi.com/api/character/12",
      created: "2017-11-04T20:32:33.144Z",
    },
    {
      id: 14,
      name: "Alien Morty",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10"],
      url: "https://rickandmortyapi.com/api/character/14",
      created: "2017-11-04T20:51:31.373Z",
    },
    {
      id: 15,
      name: "Alien Rick",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10"],
      url: "https://rickandmortyapi.com/api/character/15",
      created: "2017-11-04T20:56:13.215Z",
    },
    {
      id: 16,
      name: "Amish Cyborg",
      status: "Dead",
      species: "Alien",
      type: "Parasite",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/15"],
      url: "https://rickandmortyapi.com/api/character/16",
      created: "2017-11-04T21:12:45.235Z",
    },
    {
      id: 18,
      name: "Antenna Morty",
      status: "Alive",
      species: "Human",
      type: "Human with antennae",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/28",
      ],
      url: "https://rickandmortyapi.com/api/character/18",
      created: "2017-11-04T22:25:29.008Z",
    },
    {
      id: 19,
      name: "Antenna Rick",
      status: "unknown",
      species: "Human",
      type: "Human with antennae",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "unknown",
        url: "",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10"],
      url: "https://rickandmortyapi.com/api/character/19",
      created: "2017-11-04T22:28:13.756Z",
    },
    {
      id: 20,
      name: "Ants in my Eyes Johnson",
      status: "unknown",
      species: "Human",
      type: "Human with ants in his eyes",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Interdimensional Cable",
        url: "https://rickandmortyapi.com/api/location/6",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/8"],
      url: "https://rickandmortyapi.com/api/character/20",
      created: "2017-11-04T22:34:53.659Z",
    },
    {
      id: 21,
      name: "Aqua Morty",
      status: "unknown",
      species: "Humanoid",
      type: "Fish-Person",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/22",
      ],
      url: "https://rickandmortyapi.com/api/character/21",
      created: "2017-11-04T22:39:48.055Z",
    },
    {
      id: 22,
      name: "Aqua Rick",
      status: "unknown",
      species: "Humanoid",
      type: "Fish-Person",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/28",
      ],
      url: "https://rickandmortyapi.com/api/character/22",
      created: "2017-11-04T22:41:07.171Z",
    },
    {
      id: 23,
      name: "Arcade Alien",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Immortality Field Resort",
        url: "https://rickandmortyapi.com/api/location/7",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
      ],
      url: "https://rickandmortyapi.com/api/character/23",
      created: "2017-11-05T08:43:05.095Z",
    },
    {
      id: 24,
      name: "Armagheadon",
      status: "Alive",
      species: "Alien",
      type: "Cromulon",
      gender: "Male",
      origin: {
        name: "Signus 5 Expanse",
        url: "https://rickandmortyapi.com/api/location/22",
      },
      location: {
        name: "Signus 5 Expanse",
        url: "https://rickandmortyapi.com/api/location/22",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/16"],
      url: "https://rickandmortyapi.com/api/character/24",
      created: "2017-11-05T08:48:30.776Z",
    },
    {
      id: 25,
      name: "Armothy",
      status: "Dead",
      species: "unknown",
      type: "Self-aware arm",
      gender: "Male",
      origin: {
        name: "Post-Apocalyptic Earth",
        url: "https://rickandmortyapi.com/api/location/8",
      },
      location: {
        name: "Post-Apocalyptic Earth",
        url: "https://rickandmortyapi.com/api/location/8",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/23"],
      url: "https://rickandmortyapi.com/api/character/25",
      created: "2017-11-05T08:54:29.343Z",
    },
  ],
};

const dataPersonajeEspecifico = {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
  ],
  url: "https://rickandmortyapi.com/api/character/2",
  created: "2017-11-04T18:50:21.651Z",
};

const dataTodosPersonajesPaginacion = {
  info: {
    count: 671,
    pages: 34,
    next: "https://rickandmortyapi.com/api/character/?page=2",
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/3",
      created: "2017-11-04T19:09:56.428Z",
    },
    {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/4",
      created: "2017-11-04T19:22:43.665Z",
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
      ],
      url: "https://rickandmortyapi.com/api/character/5",
      created: "2017-11-04T19:26:56.301Z",
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female",
      origin: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      location: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/27"],
      url: "https://rickandmortyapi.com/api/character/6",
      created: "2017-11-04T19:50:28.250Z",
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      type: "Genetic experiment",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Testicle Monster Dimension",
        url: "https://rickandmortyapi.com/api/location/21",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
      ],
      url: "https://rickandmortyapi.com/api/character/7",
      created: "2017-11-04T19:59:20.523Z",
    },
    {
      id: 8,
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/28"],
      url: "https://rickandmortyapi.com/api/character/8",
      created: "2017-11-04T20:03:34.737Z",
    },
    {
      id: 9,
      name: "Agency Director",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/24"],
      url: "https://rickandmortyapi.com/api/character/9",
      created: "2017-11-04T20:06:54.976Z",
    },
    {
      id: 10,
      name: "Alan Rails",
      status: "Dead",
      species: "Human",
      type: "Superhuman (Ghost trains summoner)",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Worldender's lair",
        url: "https://rickandmortyapi.com/api/location/4",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/25"],
      url: "https://rickandmortyapi.com/api/character/10",
      created: "2017-11-04T20:19:09.017Z",
    },
    {
      id: 11,
      name: "Albert Einstein",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/12"],
      url: "https://rickandmortyapi.com/api/character/11",
      created: "2017-11-04T20:20:20.965Z",
    },
    {
      id: 12,
      name: "Alexander",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Anatomy Park",
        url: "https://rickandmortyapi.com/api/location/5",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/3"],
      url: "https://rickandmortyapi.com/api/character/12",
      created: "2017-11-04T20:32:33.144Z",
    },
    {
      id: 13,
      name: "Alien Googah",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "unknown",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/31"],
      url: "https://rickandmortyapi.com/api/character/13",
      created: "2017-11-04T20:33:30.779Z",
    },
    {
      id: 14,
      name: "Alien Morty",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10"],
      url: "https://rickandmortyapi.com/api/character/14",
      created: "2017-11-04T20:51:31.373Z",
    },
    {
      id: 15,
      name: "Alien Rick",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10"],
      url: "https://rickandmortyapi.com/api/character/15",
      created: "2017-11-04T20:56:13.215Z",
    },
    {
      id: 16,
      name: "Amish Cyborg",
      status: "Dead",
      species: "Alien",
      type: "Parasite",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/15"],
      url: "https://rickandmortyapi.com/api/character/16",
      created: "2017-11-04T21:12:45.235Z",
    },
    {
      id: 17,
      name: "Annie",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Anatomy Park",
        url: "https://rickandmortyapi.com/api/location/5",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/3"],
      url: "https://rickandmortyapi.com/api/character/17",
      created: "2017-11-04T22:21:24.481Z",
    },
    {
      id: 18,
      name: "Antenna Morty",
      status: "Alive",
      species: "Human",
      type: "Human with antennae",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/28",
      ],
      url: "https://rickandmortyapi.com/api/character/18",
      created: "2017-11-04T22:25:29.008Z",
    },
    {
      id: 19,
      name: "Antenna Rick",
      status: "unknown",
      species: "Human",
      type: "Human with antennae",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "unknown",
        url: "",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10"],
      url: "https://rickandmortyapi.com/api/character/19",
      created: "2017-11-04T22:28:13.756Z",
    },
    {
      id: 20,
      name: "Ants in my Eyes Johnson",
      status: "unknown",
      species: "Human",
      type: "Human with ants in his eyes",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Interdimensional Cable",
        url: "https://rickandmortyapi.com/api/location/6",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/8"],
      url: "https://rickandmortyapi.com/api/character/20",
      created: "2017-11-04T22:34:53.659Z",
    },
  ],
};

const dataPersonajesInteresantes =[
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/37",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41"
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/37",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41"
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41"
        ],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"
    }
]

const dataPersonajes ={
  "info": {
      "count": 671,
      "pages": 34,
      "next": "https://rickandmortyapi.com/api/character?page=2",
      "prev": null
  },
  "results": [
      {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              "https://rickandmortyapi.com/api/episode/3",
              "https://rickandmortyapi.com/api/episode/4",
              "https://rickandmortyapi.com/api/episode/5",
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/13",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/17",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/24",
              "https://rickandmortyapi.com/api/episode/25",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/27",
              "https://rickandmortyapi.com/api/episode/28",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/34",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/37",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41"
          ],
          "url": "https://rickandmortyapi.com/api/character/1",
          "created": "2017-11-04T18:48:46.250Z"
      },
      {
          "id": 2,
          "name": "Morty Smith",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              "https://rickandmortyapi.com/api/episode/3",
              "https://rickandmortyapi.com/api/episode/4",
              "https://rickandmortyapi.com/api/episode/5",
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/13",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/17",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/24",
              "https://rickandmortyapi.com/api/episode/25",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/27",
              "https://rickandmortyapi.com/api/episode/28",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/34",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/37",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41"
          ],
          "url": "https://rickandmortyapi.com/api/character/2",
          "created": "2017-11-04T18:50:21.651Z"
      },
      {
          "id": 3,
          "name": "Summer Smith",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Female",
          "origin": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/17",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/24",
              "https://rickandmortyapi.com/api/episode/25",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/27",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/34",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41"
          ],
          "url": "https://rickandmortyapi.com/api/character/3",
          "created": "2017-11-04T19:09:56.428Z"
      },
      {
          "id": 4,
          "name": "Beth Smith",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Female",
          "origin": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/24",
              "https://rickandmortyapi.com/api/episode/25",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/27",
              "https://rickandmortyapi.com/api/episode/28",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/34",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41"
          ],
          "url": "https://rickandmortyapi.com/api/character/4",
          "created": "2017-11-04T19:22:43.665Z"
      },
      {
          "id": 5,
          "name": "Jerry Smith",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/13",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41"
          ],
          "url": "https://rickandmortyapi.com/api/character/5",
          "created": "2017-11-04T19:26:56.301Z"
      },
      {
          "id": 6,
          "name": "Abadango Cluster Princess",
          "status": "Alive",
          "species": "Alien",
          "type": "",
          "gender": "Female",
          "origin": {
              "name": "Abadango",
              "url": "https://rickandmortyapi.com/api/location/2"
          },
          "location": {
              "name": "Abadango",
              "url": "https://rickandmortyapi.com/api/location/2"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/27"
          ],
          "url": "https://rickandmortyapi.com/api/character/6",
          "created": "2017-11-04T19:50:28.250Z"
      },
      {
          "id": 7,
          "name": "Abradolf Lincler",
          "status": "unknown",
          "species": "Human",
          "type": "Genetic experiment",
          "gender": "Male",
          "origin": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "location": {
              "name": "Testicle Monster Dimension",
              "url": "https://rickandmortyapi.com/api/location/21"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11"
          ],
          "url": "https://rickandmortyapi.com/api/character/7",
          "created": "2017-11-04T19:59:20.523Z"
      },
      {
          "id": 8,
          "name": "Adjudicator Rick",
          "status": "Dead",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "Citadel of Ricks",
              "url": "https://rickandmortyapi.com/api/location/3"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/28"
          ],
          "url": "https://rickandmortyapi.com/api/character/8",
          "created": "2017-11-04T20:03:34.737Z"
      },
      {
          "id": 9,
          "name": "Agency Director",
          "status": "Dead",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/24"
          ],
          "url": "https://rickandmortyapi.com/api/character/9",
          "created": "2017-11-04T20:06:54.976Z"
      },
      {
          "id": 10,
          "name": "Alan Rails",
          "status": "Dead",
          "species": "Human",
          "type": "Superhuman (Ghost trains summoner)",
          "gender": "Male",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "Worldender's lair",
              "url": "https://rickandmortyapi.com/api/location/4"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/25"
          ],
          "url": "https://rickandmortyapi.com/api/character/10",
          "created": "2017-11-04T20:19:09.017Z"
      },
      {
          "id": 11,
          "name": "Albert Einstein",
          "status": "Dead",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/12"
          ],
          "url": "https://rickandmortyapi.com/api/character/11",
          "created": "2017-11-04T20:20:20.965Z"
      },
      {
          "id": 12,
          "name": "Alexander",
          "status": "Dead",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
              "name": "Anatomy Park",
              "url": "https://rickandmortyapi.com/api/location/5"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/3"
          ],
          "url": "https://rickandmortyapi.com/api/character/12",
          "created": "2017-11-04T20:32:33.144Z"
      },
      {
          "id": 13,
          "name": "Alien Googah",
          "status": "unknown",
          "species": "Alien",
          "type": "",
          "gender": "unknown",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/31"
          ],
          "url": "https://rickandmortyapi.com/api/character/13",
          "created": "2017-11-04T20:33:30.779Z"
      },
      {
          "id": 14,
          "name": "Alien Morty",
          "status": "unknown",
          "species": "Alien",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "Citadel of Ricks",
              "url": "https://rickandmortyapi.com/api/location/3"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/10"
          ],
          "url": "https://rickandmortyapi.com/api/character/14",
          "created": "2017-11-04T20:51:31.373Z"
      },
      {
          "id": 15,
          "name": "Alien Rick",
          "status": "unknown",
          "species": "Alien",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "Citadel of Ricks",
              "url": "https://rickandmortyapi.com/api/location/3"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/10"
          ],
          "url": "https://rickandmortyapi.com/api/character/15",
          "created": "2017-11-04T20:56:13.215Z"
      },
      {
          "id": 16,
          "name": "Amish Cyborg",
          "status": "Dead",
          "species": "Alien",
          "type": "Parasite",
          "gender": "Male",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/15"
          ],
          "url": "https://rickandmortyapi.com/api/character/16",
          "created": "2017-11-04T21:12:45.235Z"
      },
      {
          "id": 17,
          "name": "Annie",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Female",
          "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
              "name": "Anatomy Park",
              "url": "https://rickandmortyapi.com/api/location/5"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/3"
          ],
          "url": "https://rickandmortyapi.com/api/character/17",
          "created": "2017-11-04T22:21:24.481Z"
      },
      {
          "id": 18,
          "name": "Antenna Morty",
          "status": "Alive",
          "species": "Human",
          "type": "Human with antennae",
          "gender": "Male",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "Citadel of Ricks",
              "url": "https://rickandmortyapi.com/api/location/3"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/28"
          ],
          "url": "https://rickandmortyapi.com/api/character/18",
          "created": "2017-11-04T22:25:29.008Z"
      },
      {
          "id": 19,
          "name": "Antenna Rick",
          "status": "unknown",
          "species": "Human",
          "type": "Human with antennae",
          "gender": "Male",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "unknown",
              "url": ""
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/10"
          ],
          "url": "https://rickandmortyapi.com/api/character/19",
          "created": "2017-11-04T22:28:13.756Z"
      },
      {
          "id": 20,
          "name": "Ants in my Eyes Johnson",
          "status": "unknown",
          "species": "Human",
          "type": "Human with ants in his eyes",
          "gender": "Male",
          "origin": {
              "name": "unknown",
              "url": ""
          },
          "location": {
              "name": "Interdimensional Cable",
              "url": "https://rickandmortyapi.com/api/location/6"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
          "episode": [
              "https://rickandmortyapi.com/api/episode/8"
          ],
          "url": "https://rickandmortyapi.com/api/character/20",
          "created": "2017-11-04T22:34:53.659Z"
      }
  ]
}

beforeEach(async function () {
  fetch.resetMocks();
  fetch.dontMock();
});

describe("filtrar personajes", () => {
  it("caso exito: filtro personsaje", async () => {
    fetch.mockResponseOnce(JSON.stringify(dataFiltroPersonaje));

    const personaje = await getFiltroPersonajes("Rick Sanchez");
    expect(personaje).toMatchObject(dataFiltroPersonaje);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("caso fallo: filtro personaje", async () => {
    fetch.mockReject(() => Promise.reject("API is down"));

    const personaje = await getFiltroPersonajes("Rick Sanchez");

    expect(personaje).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/?name=Rick Sanchez"
    );
  });
});

describe("filtrar por genero", () => {
  it("caso exito: filtro genero", async () => {
    fetch.mockResponseOnce(JSON.stringify(dataFiltroGeneroPersonaje));

    const personaje = await getFiltroGender("Male");
    expect(personaje).toMatchObject(dataFiltroGeneroPersonaje);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("caso fallo: filtro genero", async () => {
    fetch.mockReject(() => Promise.reject("API is down"));

    const personaje = await getFiltroGender("Male");

    expect(personaje).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/?gender=Male"
    );
  });
});

describe("obtener un personaje", () => {
  it("caso exito: personaje obtenido", async () => {
    fetch.mockResponseOnce(JSON.stringify(dataPersonajeEspecifico));

    const personaje = await getObtenerPersonajeEspecifico(2);
    expect(personaje).toMatchObject(dataPersonajeEspecifico);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("caso fallo: personaje obtenido", async () => {
    fetch.mockReject(() => Promise.reject("API is down"));

    const personaje = await getObtenerPersonajeEspecifico(2);

    expect(personaje).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/2"
    );
  });
});

describe("obtener todos los personajes por paginacion", () => {
  it("caso exito: todos los personajes por paginacion", async () => {
    fetch.mockResponseOnce(JSON.stringify(dataTodosPersonajesPaginacion));

    const personaje = await getTodoPersonajesPaginacion(1);
    expect(personaje).toMatchObject(dataTodosPersonajesPaginacion);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("caso fallo: todos los personajes por paginacion", async () => {
    fetch.mockReject(() => Promise.reject("API is down"));

    const personaje = await getTodoPersonajesPaginacion(1);

    expect(personaje).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
  });
});

describe("obtener los personajes interesantes", () => {
  it("caso exito: personajes interesantes", async () => {
    fetch.mockResponseOnce(JSON.stringify(dataPersonajesInteresantes));

    numeroAleatorio.mockImplementation(() => [1,2,3]);

    const personaje = await obtenerPersonajesInteresantes();
 
    expect(personaje).toMatchObject(dataPersonajesInteresantes);
    expect(fetch).toHaveBeenCalledTimes(1);
 
  });

  it("caso fallo: personajes interesantes", async () => {
    fetch.mockReject(() => Promise.reject("API is down"));
    numeroAleatorio.mockImplementation(() => [1,2,3]);
    const personaje = await obtenerPersonajesInteresantes();

    expect(personaje).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/1,2,3"
    );
  });
});



describe("obtener todos los personajes", () => {
  it("caso exito: todos los personajes", async () => {
    fetch.mockResponseOnce(JSON.stringify(dataPersonajes));

    const personaje = await obtenerPersonajes();
    expect(personaje).toMatchObject(dataPersonajes);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("caso fallo: todos los personajes", async () => {
    fetch.mockReject(() => Promise.reject("API is down"));

    const personaje = await obtenerPersonajes();

    expect(personaje).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character"
    );
  });
});