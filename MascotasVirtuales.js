"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Criatura = exports.Perro = exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(nombre, genero, nivelDeFelicidad) {
        this.nombre = nombre;
        this.genero = genero;
        this.nivelDeFelicidad = nivelDeFelicidad;
    }
    Gato.prototype.alimentar = function () {
        console.log('Su mascota está más contenta');
        return (this.nivelDeFelicidad = +15);
    };
    Gato.prototype.jugar = function () {
        console.log('Su mascota está más contenta');
        return (this.nivelDeFelicidad = +10);
    };
    Gato.prototype.cuidar_mascota = function () {
        console.log('Su mascota está más contenta');
        return (this.nivelDeFelicidad = +20);
    };
    return Gato;
}());
exports.Gato = Gato;
var Perro = /** @class */ (function () {
    function Perro(nombre, genero, nivelDeFelicidad) {
        this.nombre = nombre;
        this.genero = genero;
        this.nivelDeFelicidad = nivelDeFelicidad;
    }
    Perro.prototype.alimentar = function () {
        console.log('Su mascota está más contenta por habaerla alimentado');
        return (this.nivelDeFelicidad = +25);
    };
    Perro.prototype.jugar = function () {
        console.log('Su mascota está feliz por que has jugado con ella');
        return (this.nivelDeFelicidad = +20);
    };
    Perro.prototype.cuidar_mascota = function () {
        console.log('Su mascota se siente my cuidada... <3 ');
        return (this.nivelDeFelicidad = +15);
    };
    return Perro;
}());
exports.Perro = Perro;
var Criatura = /** @class */ (function () {
    function Criatura(nombre, genero, nivelDeFelicidad) {
        this.nombre = nombre;
        this.genero = genero;
        this.nivelDeFelicidad = nivelDeFelicidad;
    }
    Criatura.prototype.alimentar = function () {
        console.log('Su mascota está más contenta');
        return (this.nivelDeFelicidad = +28);
    };
    Criatura.prototype.jugar = function () {
        console.log('Su mascota está más contenta');
        return (this.nivelDeFelicidad = +28);
    };
    Criatura.prototype.cuidar_mascota = function () {
        console.log('Su mascota está más contenta');
        return (this.nivelDeFelicidad = +55);
    };
    return Criatura;
}());
exports.Criatura = Criatura;
var miGato = new Gato('Casimiro', 'Felino', 0);
miGato.alimentar();
miGato.jugar();
miGato.cuidar_mascota();
var miPerro = new Perro('Aranza', 'Canino', 0);
miPerro.alimentar();
miPerro.jugar();
miPerro.cuidar_mascota();
var miMonstruo = new Criatura('Chanchi', 'Criatura Fantástica', 0);
miMonstruo.alimentar();
miMonstruo.jugar();
miMonstruo.cuidar_mascota();
