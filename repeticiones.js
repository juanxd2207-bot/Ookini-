console.log("V60");
console.log("Kyoto drip");
console.log("siphon");
console.log("Prensa Francesa");

//lista de metodos, se llaman arrays
const metodos = ["V60", "Kyoto drip", "siphon", "Prensa Francesa"];

    //instruccion que recorre la lista y que hace algo con cada elemento

    for (const metodo of metodos) {
        console.log(metodo);
    }

    console.log("Fin del programa")




//ejemplo de bucle de reservas en un dia 
    
    const reservasDelDia = [2, 1, 2, 1, 2];
    let totalTazas = 0;

    for (const cantidad of reservasDelDia) {
        totalTazas = totalTazas + cantidad;
    }

    //ejemplo de un for que corre pero no hace lo que queremos 

    
    

console.log(totalTazas) 