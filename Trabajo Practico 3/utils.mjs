import fs from 'fs'

//clase para representar un superheroe

class Superheroe {

    constructor (id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo){
        this.id=id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}       

// funcion para leer y ordenar los superheroes

export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroeArray = JSON.parse(datos);

    //convertir a instancias de Superheroes
    const superheroes = superheroeArray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,
             hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //ordenar por nombre de superheroe
    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare( b.nombreSuperheroe));

    return superheroes;
}

//funcion para agregar nuevos superheroes

export function agregarSuperheroes(rutaOriginal, rutaNueva){
    const datosOriginales = fs.readFileSync(rutaOriginal,'utf8');
    const datosNuevos = fs.readFileSync(rutaNueva,'utf8');

    const superheroresOriginales = JSON.parse(datosOriginales);
    const superheroesNuevos = JSON.parse(datosNuevos);

    const instanciasNuevas = superheroesNuevos.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,
             hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //ahora convinamos las listas

    const listaActualizada = [...superheroresOriginales, ...instanciasNuevas]

    //guardar lista actualizada
    fs.writeFileSync(rutaOriginal,JSON.stringify(listaActualizada,null,2))

    console.log('lista de superheroes actualizada con exito')

}