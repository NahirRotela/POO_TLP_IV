export interface Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number

    alimentar(): number
    jugar(): number
    cuidar_mascota(): number
}

export class Gato implements Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number

    constructor(nombre: string, genero: string, nivelDeFelicidad: number) {
        this.nombre = nombre
        this.genero = genero
        this.nivelDeFelicidad = nivelDeFelicidad
    }

    alimentar() {
        console.log('Su mascota está más contenta')
        return (this.nivelDeFelicidad = +15)
    }

    jugar() {
        console.log('Su mascota está más contenta')
        return (this.nivelDeFelicidad = +10)
    }

    cuidar_mascota() {
        console.log('Su mascota está más contenta')
        return (this.nivelDeFelicidad = +20)
    }
}

export class Perro implements Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number

    constructor(nombre: string, genero: string, nivelDeFelicidad: number) {
        this.nombre = nombre
        this.genero = genero
        this.nivelDeFelicidad = nivelDeFelicidad
    }

    alimentar() {
        console.log('Su mascota está más contenta por habaerla alimentado')
        return (this.nivelDeFelicidad = +25)
    }

    jugar() {
        console.log('Su mascota está feliz por que has jugado con ella')
        return (this.nivelDeFelicidad = +20)
    }

    cuidar_mascota() {
        console.log('Su mascota se siente my cuidada... <3 ')
        return (this.nivelDeFelicidad = +15)
    }
}

export class Criatura implements Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number

    constructor(nombre: string, genero: string, nivelDeFelicidad: number) {
        this.nombre = nombre
        this.genero = genero
        this.nivelDeFelicidad = nivelDeFelicidad
    }

    alimentar() {
        console.log('Su mascota está más contenta')
        return (this.nivelDeFelicidad = +28)
    }

    jugar() {
        console.log('Su mascota está más contenta')
        return (this.nivelDeFelicidad = +28)
    }

    cuidar_mascota() {
        console.log('Su mascota está más contenta')
        return (this.nivelDeFelicidad = +55)
    }
}

const miGato = new Gato('Casimiro', 'Felino', 0)
miGato.alimentar()
miGato.jugar()
miGato.cuidar_mascota()

const miPerro = new Perro('Aranza', 'Canino', 0)
miPerro.alimentar()
miPerro.jugar()
miPerro.cuidar_mascota()

const miMonstruo = new Criatura('Chanchi', 'Criatura Fantástica', 0)
miMonstruo.alimentar()
miMonstruo.jugar()
miMonstruo.cuidar_mascota()


