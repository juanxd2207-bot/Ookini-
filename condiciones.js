//Datos de la condicion 

const cupoCata = 8;
const inscritos = 8;

//Condicional de cata abierta o llena
//si el numero de cupos es mayor que el numero de inscritos devuelve "Haycupos, abrir
//si no devuelve "Catallena, ofrecer lista de espera"


if (cupoCata > inscritos) {
    console.log("Hay cupos, Abrir reserva");
} else {
    console.log("Cata llena, ofrecer lista de espera");
}
