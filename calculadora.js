"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
// Importa las clases de formas geométricas
var formas_1 = require("./formas");
var Calculadora = /** @class */ (function () {
    function Calculadora(formas) {
        this.formas = formas;
    }
    Calculadora.prototype.area = function () {
        return this.formas.calcularArea();
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var triangulo = new Calculadora(new formas_1.Triangulo(20, 10));
var circulo = new Calculadora(new formas_1.Circulo(20));
var rectangulo = new Calculadora(new formas_1.Rectangulo(20, 30));
console.log("Area de triangulo:", triangulo.area());
console.log("Area de circulo:", circulo.area());
console.log("Area de rectangulo:", rectangulo.area());
