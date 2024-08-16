
/*Ejercicio_1
let nombre = "Imanol";
console.log(nombre);




/*ejercicio_2
let num1= 10;
let num2= 30;
let suma = num1 + num2;
console.log(suma);




/*ejercicio_3
const pi= Math.PI;
console.log(pi);





/*ejercicio_4
let nombres= prompt("Ingrese el nombre asi tiene un saludo personalizado");

function saludar (variable)
{
    return console.log("Buenas tardes", variable,"como estas?");
}

let saludo = saludar(nombres);
console.log(saludo);*/







/*ejercicio_5
let numeropar= prompt("Ingrese un numero, si es par retornara true, si es impar false");

function esPar(par)
{
    let pares = false;
    if(par%2==0)
    {
        pares= true;
    }
    return pares;
}

let pares= esPar(numeropar);

if(pares==true)
{
    let espar1= "El numero es par";
    console.log(espar1);
}
else
{
    let noespar= "El numero no es par";
    console.log(noespar);
}*/






/*ejercicio_6

let  arreglo =new Array(5);

function cargararray(miarreglo)
{
    for(let i=0; i<miarreglo.length;i++)
    {
        let numero= prompt("Ingrese el un numero para el arreglo");

        miarreglo[i]= parseInt(numero);
    }
    return miarreglo;
}

arreglo= cargararray(arreglo);

function sumarArray(MIarr)
{
    let suma = 0;
    for(let i=0; i<MIarr.length; i++)
    {
        
        suma = suma + MIarr[i];
    }
    return suma;
}

let sumatoria = sumarArray(arreglo);
console.log("La suma del arreglo es: ",sumatoria);*/






/*Ejercicio_7

const persona1 =
{
    nombre: "Imanol",
    edad: 20,
    profesion : "programador",

}

console.log("Nombre: ",persona1.nombre);
console.log("Edad: ", persona1.edad);
console.log("Profesion: ",persona1.profesion);*/






/*Ejercicio_8

function Producto (nombre, precio, stock)
{
    this.nombre= nombre;
    this.precio=precio;
    this.stock = stock;
}

const producto1 = new Producto("Pan", 100, 10);
const producto2 = new Producto("Arroz", 250,20);

console.log("Mostrando producto 1");
console.log("Nombre producto: ",producto1.nombre);
console.log("Precio producto: ",producto1.precio);
console.log("Stock producto: ",producto1.stock);

console.log("Mostrando producto 2");
console.log("Nombre producto: ",producto2.nombre);
console.log("Precio producto: ",producto2.precio);
console.log("Stock producto: ",producto2.stock);*/






/*Ejercicio_9

function Pelicula(titulo, director, anio )
{
    this.anio= anio;
    this.director= director;
    this.titulo= titulo;
}

const pelicula1= new Pelicula("Cars", "Imanol Sayago",2003);
const pelicula2 = new Pelicula("Toy Story","Ricardo Suarez",2005);

console.log("Mostrando pelicula 1");
console.log("Nombre pelicula :",pelicula1.titulo);
console.log("Autor pelicula :",pelicula1.director);
console.log("Año pelicula :",pelicula1.anio);

console.log("Mostrando pelicula 2");
console.log("Nombre pelicula :",pelicula2.titulo);
console.log("Autor pelicula :",pelicula2.director);
console.log("Año pelicula :",pelicula2.anio);*/


/*ARRAYS*/





/*Ejercicio 10*/

/*tambien se puede hacer asi: let arrayfrutas=["manzana", "banana"," naranja"];*/
//let arrayFrutas = new Array (3);
//arrayFrutas[0]= "Manzana";
//arrayFrutas[1]= "Banana";
//arrayFrutas[2]= "Naranja";

//console.log("El tercer elemento del array es la fruta: ",arrayFrutas[2]);






/*ejercicio_11*/

/*con push se agrega un elemento al final del arreglo*/
//arrayFrutas.push("Mandarina");
//console.log(arrayFrutas);






/*ejercicio_12

let arregloNUM= [1,2,3,4,5,6,7,8,9,10];

function filtrarPares(arregloNUM)
{
    let arregloPares= [];
    let j=0;
    for(i=0; i<arregloNUM.length;i++)
    {
        if(arregloNUM[i]%2==0)
        {
            arregloPares[j]= arregloNUM[i];
            j++;
        }
    }
    return arregloPares;
}

let arreglopares1= filtrarPares(arregloNUM);
console.log(arreglopares1);*/






/*ejercicio_13

function crearPersona(nombre,edad)
{
    let persona =
    {
        nombreP:nombre,
        edadP:edad, 
    };

    return persona;
}

let persona1 = crearPersona("Julio", 22);

console.log("Persona");
console.log("Nombre: ",persona1.nombreP);
console.log("Edad: ",persona1.edadP);


/*Ejercicio_14

function obtenerinfo(Persona)
{
    return `El nombre de la persona que ingreso es: ${Persona.nombreP}, Edad de la persona es: ${Persona.edadP}`;
}

let informacion = obtenerinfo(persona1);
console.log(informacion);*/