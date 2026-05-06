// funcion declarada
function saludo (){
    console.log("Hello world");
}

saludo();

// funcion expresada
const saludarHola = function(){
    console.log("Hola con funcion expresada");
}
saludarHola();

// funcion flecha
const saludosFlecha=()=>{
    console.log("Hello con funcion flecha");
}
saludosFlecha();

// funcion anonima
setTimeout(function(){
    console.log("Ejecutando.....");
},1000)

// funcion con parametros
function saludarConParametros(nombre){
    console.log("Hola "+ nombre);
}
saludarConParametros("Pedro")

// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  
  console.log(saludar("Ana"));   // "Hola, Ana!"
  console.log(saludar("Luis"));  // "Hola, Luis!"


  function sumar(a,b){
    return a+b
  }
  resultado = sumar(45,5);
  console.log(resultado);

  // Sintaxis completa
const sumar = (a, b) => {
  return a + b;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const sumarCorto = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const doblar = n => n * 2;

// Sin parámetros — los paréntesis son obligatorios
const saludarMundo = () => "Hola, mundo!";

console.log(sumar(3, 4));        // 7
console.log(sumarCorto(3, 4));   // 7
console.log(doblar(5));          // 10
console.log(saludarMundo());     // "Hola, mundo!"

//par
const esPar = n => n % 2 == 0;
console.log(esPar(4))

//por defecto

function saludar(nombre = "mundo", saludo = "Hola") {
  return `${saludo}, ${nombre}!`;
}

console.log(saludar());                     // "Hola, mundo!"
console.log(saludar("Ana"));               // "Hola, Ana!"
console.log(saludar("Ana", "Buenos días")); // "Buenos días, Ana!"

// También funciona con arrow functions
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3));     // 9   (3²)
console.log(potencia(3, 3));  // 27  (3³)

//area de un trangulo
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3));     // 9   (3²)
console.log(potencia(3, 3));  // 27  (3³)       

// ...numeros captura todos los argumentos en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));          // 6
console.log(sumarTodos(1, 2, 3, 4, 5));   // 15
console.log(sumarTodos());                 // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo
