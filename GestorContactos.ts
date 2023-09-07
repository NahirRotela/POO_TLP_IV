class Contacto {
    constructor(public nombre: string, public correoElectronico: string, public numeroTelefono: string) { }
}

class GestorDeContactos {
    private contactos: Contacto[] = [];

    agregarContacto(contacto: Contacto) {
        this.contactos.push(contacto);
    }

    buscarContactoPorNombre(nombre: string) {
        return this.contactos.filter((contacto) => contacto.nombre === nombre);
    }

    mostrarListaDeContactos() {
        return this.contactos;
    }
}


const gestorContactos = new GestorDeContactos();

const contacto1 = new Contacto("Richard Nuñez", "richard@example.com", "3718-555555");
const contacto2 = new Contacto("Nahir Rotela", "Nahir@example.com", "3718-101010");
const contacto3 = new Contacto("Edith Vega", "Edithtsc@example.com", "3718-202020");

gestorContactos.agregarContacto(contacto1);
gestorContactos.agregarContacto(contacto2);
gestorContactos.agregarContacto(contacto3);

console.log("Lista de contactos:");
const listaDeContactos = gestorContactos.mostrarListaDeContactos();
listaDeContactos.forEach((contacto, index) => {
    console.log(`Contacto ${index + 1}:`);
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Correo Electrónico: ${contacto.correoElectronico}`);
    console.log(`Número de Teléfono: ${contacto.numeroTelefono}`);
});

const resultadoBusqueda = gestorContactos.buscarContactoPorNombre("Nahir Rotela");
console.log("Resultado de la búsqueda por nombre:");
resultadoBusqueda.forEach((contacto) => {
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Correo Electrónico: ${contacto.correoElectronico}`);
    console.log(`Número de Teléfono: ${contacto.numeroTelefono}`);
});
