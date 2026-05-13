// polimorfismo.ts
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
// Clase abstracta — no se puede instanciar directamente
// Solo sirve como base para otras clases
var Forma = /** @class */ (function () {
    function Forma(color) {
        this.color = color;
    }
    // Método concreto — igual para todas las formas
    Forma.prototype.describir = function () {
        return "".concat(this.constructor.name, " ").concat(this.color, ": ") +
            "\u00E1rea=".concat(this.area().toFixed(2), ", per\u00EDmetro=").concat(this.perimetro().toFixed(2));
    };
    return Forma;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(color, radio) {
        var _this = _super.call(this, color) || this;
        _this.radio = radio;
        return _this;
    }
    // Cada clase implementa area() A SU MANERA
    Circulo.prototype.area = function () { return Math.PI * Math.pow(this.radio, 2); };
    Circulo.prototype.perimetro = function () { return 2 * Math.PI * this.radio; };
    return Circulo;
}(Forma));
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(color, ancho, alto) {
        var _this = _super.call(this, color) || this;
        _this.ancho = ancho;
        _this.alto = alto;
        return _this;
    }
    Rectangulo.prototype.area = function () { return this.ancho * this.alto; };
    Rectangulo.prototype.perimetro = function () { return 2 * (this.ancho + this.alto); };
    return Rectangulo;
}(Forma));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(color, a, b, c) {
        var _this = _super.call(this, color) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangulo.prototype.perimetro = function () { return this.a + this.b + this.c; };
    Triangulo.prototype.area = function () {
        var s = this.perimetro() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    };
    return Triangulo;
}(Forma));
console.log("=== POLIMORFISMO ===\n");
// Un array con distintos tipos — todos son Forma
var formas = [
    new Circulo("rojo", 5),
    new Rectangulo("azul", 4, 6),
    new Triangulo("verde", 3, 4, 5),
    new Circulo("naranja", 3),
];
// El mismo bucle llama a describir() en cada forma
// Sin saber si es Círculo, Rectángulo o Triángulo
for (var _i = 0, formas_1 = formas; _i < formas_1.length; _i++) {
    var forma = formas_1[_i];
    console.log("  ".concat(forma.describir()));
}
// Calcular el área total — funciona con cualquier tipo de Forma
var areaTotal = formas.reduce(function (acc, f) { return acc + f.area(); }, 0);
console.log("\n  \u00C1rea total: ".concat(areaTotal.toFixed(2)));
// new Forma("rojo");  // ❌ Error — Forma es abstracta, no se puede instanciar
