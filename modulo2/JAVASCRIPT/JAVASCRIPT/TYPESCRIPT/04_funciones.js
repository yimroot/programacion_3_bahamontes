"use strict";
/**
 * ARCHIVO: 04_funciones.ts
 */
// 2. FUNCIONES
function sumar1(a, b = 0) {
    return a + b;
}
function multiplicar(a, b) {
    return a * b;
}
function mostrarProducto(p) {
    console.log(`[${p.id}] ${p.nombre} — ${p.precio}€ (stock: ${p.stock})`);
}
function hayStock(p) {
    return p.stock > 0;
}
// 3. OBJETOS
const anaUsuario = {
    nombre: "Ana García",
    edad: 28,
    email: "ana@email.com"
};
const laptop = {
    id: 1,
    nombre: "Laptop Pro",
    precio: 999,
    stock: 5,
    categoria: "Electrónica"
};
const anaEmpleado = {
    id: 1,
    nombre: "Ana García",
    email: "ana@empresa.com",
    departamento: "Tecnología"
};
const luis = {
    id: 2,
    nombre: "Luis Pérez",
    email: "luis@empresa.com",
    departamento: "Ventas",
    telefono: "600111222",
    salario: 2500
};
// 4. EJECUCIÓN
console.log("--- RESULTADOS ---");
console.log("Suma (5 + 3):", sumar1(5, 3));
console.log("Suma (solo 5):", sumar1(5));
console.log("Multiplicación (4 * 7):", multiplicar(4, 7));
console.log("\n--- PRODUCTO ---");
mostrarProducto(laptop);
console.log(`¿Hay stock de ${laptop.nombre}?:`, hayStock(laptop));
console.log("\n--- EMPLEADOS ---");
console.log(`Empleado 1: ${anaEmpleado.nombre} (${anaEmpleado.departamento})`);
console.log(`Empleado 2: ${luis.nombre} - Salario: ${luis.salario}€`);
