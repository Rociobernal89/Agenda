import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const primeraResidenciaRocio = new Direccion(
  "Calle Victoria",
  31,
  3,
  "B",
  29012,
  "Malaga",
  "Malaga"
)

const segundaResidenciaRocio = new Direccion(
  "Calle Benahavis",
  1,
  false,
  false,
  29004,
  "Malaga",
  "Malaga"
)

const mailRocio = new Mail(
  "personal",
  "fernandezrocio@gmail.com"
)

const telefonoFijoRocio = new Telefono(
  "fijo",
  952345673
)

const telefonoMovilRocio = new Telefono(
  "movil",
  678546782
)

const datosRocio = new Persona(
  'Rocio',
  'Fernandez Hurtado',
  23,
  '26836597P',
  new Date(2000, 6, 11),
  'verde',
  'mujer',
  [primeraResidenciaRocio, segundaResidenciaRocio],
  [mailRocio],
  [telefonoFijoRocio, telefonoMovilRocio],
  "Trabaja en la localidad de la segunda residencia"
);

const primeraResidenciaIsabel = new Direccion(
  "Calle Malaga",
  2,
  3,
  "A",
  29130,
  "Alhaurin de la Torre",
  "Malaga"
)

const segundaResidenciaIsabel = new Direccion(
  "Avenida del Lido",
  23,
  1,
  "A",
  29620,
  "Torremolinos",
  "Malaga"
)

const mailPersonalIsabel = new Mail(
  "personal",
  "isabelguerrero89@hotmail.com"
)

const mailTrabajoIsabel = new Mail(
  "personal",
  "isabel@guerreroconstrucciones.com"
)

const telefonoFijoIsabel = new Telefono(
  "fijo",
  951786538
)

const telefonoMovilIsabelPersonal = new Telefono(
  "movil",
  667573295
)

const telefonoMovilIsabelTrabajo = new Telefono(
  "movil",
  657342513
)

const datosIsabel = new Persona(
  'Isabel',
  'Guerrero Gonzalez',
  33,
  '26745689T',
  new Date(1989, 9, 20),
  'negro',
  'Mujer',
  [primeraResidenciaIsabel, segundaResidenciaIsabel],
  [mailPersonalIsabel, mailTrabajoIsabel],
  [telefonoFijoIsabel, telefonoMovilIsabelPersonal, telefonoMovilIsabelTrabajo],
  "Tiene la segunda residencia alquilada todo el año"
);

const primeraResidenciaIsmael = new Direccion(
  "Calle San Matias",
  19,
  9,
  "C",
  18009,
  "Granada",
  "Granada"
)

const segundaResidenciaIsmael = new Direccion(
  "Calle Bergantin San Jose",
  8,
  1,
  "A",
  18613,
  "Motril",
  "Granada"
)

const mailPersonalIsmael = new Mail(
  "personal",
  "ismaelpareja@gmail.com"
)

const mailTrabajoIsmael = new Mail(
  "trabajo",
  "ime04@parejabogados.es"
)

const telefonoFijoIsmael = new Telefono(
  "fijo",
  958456218
)

const telefonoMovilIsmael = new Telefono(
  "movil",
  608465728
)

const datosIsmael = new Persona(
  'Ismael',
  'Pareja Gutierrez',
  43,
  '44590853P',
  new Date(1979, 10, 9),
  'azul',
  'hombre',
  [primeraResidenciaIsmael, segundaResidenciaIsmael],
  [mailPersonalIsmael, mailTrabajoIsmael],
  [telefonoFijoIsmael, telefonoMovilIsmael],
  "La segunda residencia es de alquiler"
);

console.log("Contactos antes del cambio:");
console.log(datosRocio);
console.log(datosIsabel);
console.log(datosIsmael);

const agenda: Array<Persona> = new Array(datosRocio, datosIsabel, datosIsmael);

const dniABuscar: string = "26745689T";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle Fernando el Catolico",
  35,
  1,
  false,
  29012,
  "Malaga",
  "Malaga"
)

const nuevoMail = new Mail(
  "trabajo",
  "alquilervacacional@ayuntamientodemalaga.org"
)

const nuevoTelefono = new Telefono(
  "fijo",
  952396540
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosRocio);
console.log(datosIsabel);
console.log(datosIsmael);
