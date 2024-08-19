
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
   
    console.log("Es par");
}
else
{
    
    console.log("No es par");
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

/*ejercicio_15

let arreglonro=[1,2,3,4,5];
function duplicarnrosarray(arreglo)
{
    let i=0;
    let j;
    let arreglodupli=[];
    for(i=0;i<arreglo.length;i++)
    {
        
        j = (arreglo[i]*2);
        arreglodupli[i]=j;
    }
    return arreglodupli;
}
let arregloduplicado= duplicarnrosarray(arreglonro);

console.log(arreglonro);
console.log(arregloduplicado);*/

/*ejercicio_16

function invertirCadena(cadena)
{
    return cadena.split("").reverse().join("");
}

let texto = "Imanol capo";

let textoInv= invertirCadena(texto);

console.log("Mostrando texto normal");
console.log(texto);

console.log("Mostrando el texto invertido");
console.log(textoInv);*/

/*ejercicio_17

let arreglopalabras= ["labo","laboratorio","otra"];
function filtrarporLongitud(nro1, arreglo)
{
    let i=0;
    let arreglopalabrasnueva= [];
    for(i=0;i<arreglo.length;i++)
    {
        let palabra = arreglo[i];
        if(palabra.length>nro1)
        {
            arreglopalabrasnueva.push(palabra);
        }
    }
    return arreglopalabrasnueva;
}

let arreglonuevopalabras= filtrarporLongitud(8,arreglopalabras);
console.log("Mostrando el arreglo de palabras completo: ");
console.log(arreglopalabras);

console.log("Mostrando el arreglo de palabras nuevo(el filtro en este caso es 8 letras)");
console.log(arreglonuevopalabras);*/

/*Ejercicio_18



                    ///Desde el ejercicio 18 al 20 se trabaja con el mismo arreglo///

                    
function crearEstudiante(nombres,edads,promedios)
{
    let estudiante=
    {
        Nombre: nombres,
        edad: edads,
        promedio:promedios,
    };
    return estudiante;
}

let estudiante1= crearEstudiante("Imanol",20,8.5);
let estudiante2= crearEstudiante("Lucas",23,9);
let estudiante3= crearEstudiante("Nicolas",20,8.7);

let arregloestudiantes= [estudiante1,estudiante2,estudiante3];
console.log(arregloestudiantes);

/*ejercicio19

function buscarestudiantePorNombre(arregloestudiante,nombre)
{

    let flag =0;
    let i = 0;
    while(i<arregloestudiante.length && flag == 0 )
    {
        let nombreencontrado= arregloestudiante[i].Nombre;
        if(nombreencontrado==nombre)
        {
            flag=1;
            return arregloestudiante[i];
        }
        i++;
    }
}

let estudianteencontrado= buscarestudiantePorNombre(arregloestudiantes,"Imanol");

if(estudianteencontrado!=null)
{
    console.log("Alumno encontrado con exito: ");
    console.log("Nombre: ",estudianteencontrado.Nombre);
    console.log("Edad: ",estudianteencontrado.edad);
    console.log("Promedio: ",estudianteencontrado.promedio);
}
else
{
    console.log("El estudiante con ese nombre no se encuentra en el arreglo");
}


/*ejercicio_20
let promedio_general;


function promedioTodosAlumnos(arregloestudiantess)
{
    let i = 0;
    let promedios=0;
    for(i=0;i<arregloestudiantess.length;i++)
    {
        promedios = promedios + arregloestudiantess[i].promedio;
    }
    promedios = promedios/arregloestudiantess.length;
    return promedios;
}

 promedio_general = promedioTodosAlumnos(arregloestudiantes);

 console.log("El promedio de la suma de todos los alumnos esde: ",promedio_general);

 */

