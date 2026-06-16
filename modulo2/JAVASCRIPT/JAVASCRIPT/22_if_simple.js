const totalCompra = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalCompra;

if (totalCompra >= MINIMO_DESCUENTO) {
  const descuento = totalCompra * PORCENTAJE_DESCUENTO;
  totalFinal = totalCompra - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar: $135.00


const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

if (stockDisponible <= UMBRAL_STOCK_BAJO) {
  console.log(`⚠️ Stock bajo: quedan ${stockDisponible} unidades. Reabastecer pronto.`);
}



const edadUsuario = 17;
const EDAD_MINIMA = 18;

if (edadUsuario < EDAD_MINIMA) {
  console.log("Acceso denegado: debes ser mayor de edad para registrarte.");
}

console.log("Registro finalizado.");
// Acceso denegado: debes ser mayor de edad para registrarte.
// Registro finalizado.

const prompt = require('prompt-sync')();
let monto_compra = Number(prompt('Ingrese el monto'))

if (monto_compra >100){
    console.log("Aplica descuento")
}

let velocidad_veiculo = Number(prompt('Ingrese velocidad'));


if (velocidad_veiculo > 90){
    console.log("Exeso de velocidad")
}

let asistencias = Number(prompt('Ingrese asistencias'))

if (asistencias < 70){
    console.log("Pierde la materia por faltas")
}