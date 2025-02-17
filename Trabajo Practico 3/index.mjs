import { leerSuperheroes,agregarSuperheroes } from "./utils.mjs";

// leer y mostrar la lista de superherores ordenada

const superheroes = leerSuperheroes('./superheroes.txt');
console.log('superherores ordenados: ');
console.log(superheroes);

agregarSuperheroes('./superheroes.txt','./agregarSuperheroes.txt')

let superheroesNuevos = leerSuperheroes('./superheroes.txt');
console.log('superherores Nuevos ordenados: ');
console.log(superheroesNuevos);



