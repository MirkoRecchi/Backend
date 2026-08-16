
let numero : number = 2;

type tipoKarting = 1 | 2 | 4 | 3 | 6 ;


let variable : number= 2 ;
const var2 : string = "Hola donde pepito";

let variable3 = true;

type Objeto = {
    name : string,
    apellido:string,
    edad:number,
    domicilio:string,
    numeroKarting ?: tipoKarting;
}

let objeto : Objeto = {
    name : "Mirko",
    apellido : "Recchi",
    edad : 23,
    domicilio : "Zeballos 1391",
    numeroKarting : 4
};

const listaObjetos : Objeto[] = [{
    name : "Mirko",
    apellido : "Recchi",
    edad : 23,
    domicilio : "Zeballos 1391"
}];

console.log(listaObjetos[0].edad);