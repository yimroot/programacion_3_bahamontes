// herencia.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase padre
var Animal = /** @class */ (function () {
    function Animal(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método heredado por todos los hijos
    Animal.prototype.comer = function () {
        console.log("  ".concat(this.nombre, " est\u00E1 comiendo."));
    };
    Animal.prototype.dormir = function () {
        console.log("  ".concat(this.nombre, " est\u00E1 durmiendo."));
    };
    Animal.prototype.toString = function () {
        return "".concat(this.nombre, " (").concat(this.edad, " a\u00F1os)");
    };
    return Animal;
}());
// Clase hija — hereda de Animal
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, edad, raza) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.raza = raza;
        return _this;
    }
    // Método propio — solo existe en Perro
    Perro.prototype.ladrar = function () {
        console.log("  ".concat(this.nombre, ": \u00A1Guau! \u00A1Guau!"));
    };
    Perro.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), " \u2014 ").concat(this.raza); // reutiliza el toString del padre
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, edad, esCallejero) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.esCallejero = esCallejero;
        return _this;
    }
    Gato.prototype.ronronear = function () {
        console.log("  ".concat(this.nombre, ": Prrrrr..."));
    };
    Gato.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), " \u2014 ").concat(this.esCallejero ? "callejero" : "doméstico");
    };
    return Gato;
}(Animal));
console.log("=== HERENCIA ===\n");
var rex = new Perro("Rex", 3, "Labrador");
var misi = new Gato("Misi", 5, false);
// Métodos heredados del padre
rex.comer();
misi.comer();
rex.dormir();
// Métodos propios de cada hijo
rex.ladrar();
misi.ronronear();
console.log("\nRex:  ".concat(rex.toString()));
console.log("Misi: ".concat(misi.toString()));
// instanceof — comprobar si un objeto pertenece a una clase
console.log("\n\u00BFRex es Perro?  ".concat(rex instanceof Perro)); // true
console.log("\u00BFRex es Animal? ".concat(rex instanceof Animal)); // true — hereda
console.log("\u00BFRex es Gato?   ".concat(rex instanceof Gato)); // false
