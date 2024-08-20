/*           EJERCICIO 1

let nombre = "Imanol";
console.log(nombre);




/*              EJERCICIO 2
let num1= 10;
let num2= 30;
let suma = num1 + num2;
console.log(suma);




/*              EJERCICIO 3
const pi= Math.PI;
console.log(pi);





/*              EJERCICIO 4
let nombres= prompt("Ingrese el nombre asi tiene un saludo personalizado");

function saludar (variable)
{
    return console.log("Buenas tardes", variable,"como estas?");
}

let saludo = saludar(nombres);
console.log(saludo);*/







/*                  EJERCICIO 5


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



/*              EJERCICIO 6

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




/*              EJERCICIO 7

const persona1 =
{
    nombre: "Imanol",
    edad: 20,
    profesion : "programador",

}

console.log("Nombre: ",persona1.nombre);
console.log("Edad: ", persona1.edad);
console.log("Profesion: ",persona1.profesion);*/






/*              EJERCICIO 8

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






/*              EJERCICIO 9

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





/*                  EJERCICIO 10

/*tambien se puede hacer asi: let arrayfrutas=["manzana", "banana"," naranja"];*/
//let arrayFrutas = new Array (3);
//arrayFrutas[0]= "Manzana";
//arrayFrutas[1]= "Banana";
//arrayFrutas[2]= "Naranja";

//console.log("El tercer elemento del array es la fruta: ",arrayFrutas[2]);






/*              EJERCICIO 11

/*con push se agrega un elemento al final del arreglo*/
//arrayFrutas.push("Mandarina");
//console.log(arrayFrutas);






/*              EJERCICIO 12

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



/*              EJERCICIO 13

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


/*          EJERCICIO 14

function obtenerinfo(Persona)
{
    return `El nombre de la persona que ingreso es: ${Persona.nombreP}, Edad de la persona es: ${Persona.edadP}`;
}

let informacion = obtenerinfo(persona1);
console.log(informacion);*/



/*          EJERCICIO 15

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

/*          EJERCICIO 16

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

/*          EJERCICIO 17

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

/*          EJERCICIO 18



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



/*          EJERCICIO 19

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


/*          EJERCICIO 20
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

/*          EJERCICIO 21
function crearcoche(marcas,modelos,anios,valorarranques)
{
    let coche =
    {
        marca:marcas,
        modelo:modelos,
        anio:anios,
        valorarranque:false,
    };
    return coche;
}

let coche1= crearcoche("Chevrolet","onix",2020);
let coche2= crearcoche("Ford","fiesta",2023);
let coche3 = crearcoche("Chevrolet","Tracker",2024);

function arrancar(coches)
{
    if(coches.valorarranque==false)
    {
        coches.valorarranque=true;
    }
}

console.log("Mostrando coche antes de ser arrancado: ");
console.log("Marca auto: ",coche1.marca);
console.log("Modelo coche: ",coche1.modelo);
console.log("Año coche: ",coche1.anio);
if(coche1.valorarranque==false)
{
    console.log("El auto esta apagado");
}
else
{
    console.log("El auto esta encendido");
}


arrancar(coche1);

console.log("Prendiendo el auto...");

if(coche1.valorarranque==false)
    {
        console.log("El auto esta apagado");
    }
    else
    {
        console.log("El auto esta encendido");
    }*/

        /*EJERCICIO 22

function crearHumano(nombres,edadd)
{
    let humano=
    {
        nombre:nombres,
        edad:edadd,
        saludar: function()
        {
            console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
        }
    };
    return humano;
}

let humano1= crearHumano("Imanol",20);
humano1.saludar();

let humano2= crearHumano("Lucas",23);
humano2.saludar();

let humano3= crearHumano("Nicolas",20);
humano3.saludar();*/


            /*EJERCICIO 24


function carrito()
{
   this.carro=[];

   this.agregarproducto = function(producto)
   {
    this.carro.push(producto);
   }

   this.mostrarproducto= function()
   {
    console.log(this.carro);
   }
   
}

let carro= new carrito();

carro.agregarproducto("manzana");
carro.agregarproducto("leche");
carro.agregarproducto("carne");

carro.mostrarproducto();*/



/*                          EJERCICIO 25

function crearest(nombres,edaddd)
{
    let estud=
    {
        nombre:nombres,
        edad:edaddd,
    };
    return estud;
}

let estudiante1=crearest("Imanol",20);
let estudiante2= crearest("Lucas",23);
let estudiante3= crearest("Nicolas",20);

let arrest=[estudiante1,estudiante2,estudiante3];

console.log("Arreglo completo: ");
console.log(arrest);

function buscaryeliminarest(arreglo, nombrebuscado)
{
    let flag=0;
    let i = 0;
    while(i<arreglo.length && flag==0)
    {
        let nombre = arreglo[i].nombre;
        if(nombre == nombrebuscado)
        {
            flag = 1;
            arreglo.splice(i,1);
        }
        else
        {
            i++;
        }
        
    }
}

console.log("Arreglo eliminando a Imanol");
buscaryeliminarest(arrest,"Imanol");
console.log(arrest);*/

/*                  EJERCICIO 26

function crearproducto(nombres, precios)
{
    let producto = 
    {
        nombreproducto:nombres,
        precio:precios,
    };
    return producto;
}

producto1= crearproducto("carne",20);
producto2= crearproducto("pollo",10);
producto3= crearproducto("lentejas",8);
producto4= crearproducto("manzana",4);
producto5= crearproducto("naranja",2);
producto6= crearproducto("banana",1);


function carrito()
{
    this.carro=[];
    this.agregarprodu= function agregar(producto)
    {
        this.carro.push(producto);
    }
    this.sumartodo= function sumartodo()
    {
        let suma=0;
        for(let i = 0; i<this.carro.length;i++)
        {
           suma= suma + this.carro[i].precio;
        }
        console.log("El precio de todo el carro es de: ",suma);
    }
}

let carronuevo = new carrito();

carronuevo.agregarprodu(producto1);
carronuevo.agregarprodu(producto2);
carronuevo.agregarprodu(producto3);

carronuevo.sumartodo();*/




/*                  EJERCICIO 28

function crearusuario(nombres,edades,dnis)
{
    let usuario = 
    {
        nombre: nombres,
        edad:edades,
        dni:dnis,
    }
    return usuario;
}

let usuario1= crearusuario("Imanol",20,44932628);

function crearcuentaBancaria(usu)
{
    let cuenta = 
    {
        usuario: usu,
        totalcuenta:0,
        depositar: function depositardinero(totaldepo)
        {
            console.log("Depositando:",totaldepo,"en su cuenta")
            this.totalcuenta= this.totalcuenta+totaldepo;
        },

    
        retirar: function retirardinero(montoretirar)
        {
            
            if(montoretirar<this.totalcuenta)
            {
                console.log("Usted retiro:",montoretirar, "\nDinero retirado con exito");
                this.totalcuenta=this.totalcuenta-montoretirar;
            }
            else
            {
                console.log("Usted esta tratando de retirar: ",montoretirar,"de su cuenta");
                console.log("No se puede retirar esa suma de dinero, no cuenta con los fondos suficientes");
            }
        },

        mostrarsaldo: function mostrarsaldo()
        {
            console.log("Su saldo en la cuenta es de: ",this.totalcuenta);
        }
    }
return cuenta;
}

let cuentabancaria1 = crearcuentaBancaria(usuario1);

console.log("Datos de la cuenta:");
console.log("Nombre usuario: ",cuentabancaria1.usuario.nombre);
console.log("Edad: ",cuentabancaria1.usuario.edad);
console.log("DNI: ",cuentabancaria1.usuario.dni);

cuentabancaria1.mostrarsaldo();

///agrego 30 a la cuenta///

cuentabancaria1.depositar(30);

cuentabancaria1.mostrarsaldo();


///retiro 20 de la cuenta///
cuentabancaria1.retirar(20);

///Muestra de la cuenta///
cuentabancaria1.mostrarsaldo();

///tratando de retirar mas de lo que tengo en la cuenta///

cuentabancaria1.retirar(30);*/




/*                           EJERCICIO 29


function crearautor(nombreautor, edadautor)
{
    let autor=
    {
        nombre: nombreautor,
        edad:edadautor,
        infoautor: function infoautor()
        {
            console.log("Nombre autor: ",this.nombre);
            console.log("Edad autor: ",this.edad);
        },
    }
    return autor;
}

let autor1= crearautor("PedroAutor",47);


function crearlibro(titulos, autores,paginas)
{
    let libro=
    {
        Titulolibro:titulos,
        autor:autores,
        paginaslibro:paginas,
        mostrarinfo: function mostrarinfo()
        {
            console.log("Informacion del libro");
            console.log("Titulo del libro: ",this.Titulolibro);
            console.log("Informacion sobre el autor");
            this.autor.infoautor();
            console.log("Paginas totales:",this.paginaslibro);
        }
    }
    return libro;
}

let libro = crearlibro("Mosquita muerta",autor1,300);
libro.mostrarinfo();*/

