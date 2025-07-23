let repartio = false;
let cartas = [];

function repartir() {
    let tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
    const TOTAL_CARTAS = 10
    cartas = [];
    for (let i = 0; i < TOTAL_CARTAS; i++) {
        let carta = document.createElement("img");
        let indice = Math.floor(Math.random() * 52) + 1;
        cartas.push(indice);
        carta.src = "imageness/cartas/Carta" + indice + ".jpg";
        tablero.appendChild(carta);
    }
    const audio = new Audio("sonidos/repartir.mp3");
    audio.play().then(() => {
        window.alert("se han repartido las 10 cartas");
    });
    repartio = true;
}

function verificar() {
    if (!repartio) {
        window.alert("No se han repartido las cartas");
    }
    else {
        //iniciar los contadores en 0
        contadores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        //recorrer la lista de las cartas 
        contadores = new Array(13).fill(0);
        for (let i = 0; i < cartas.length; i++) {
            let posicion = cartas[i] % 13;
            if (posicion == 0) {
                posicion = 12;
            }
            else {
                posicion--;
            }
            contadores[posicion]++;
        }
        nombreCartas = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        //recorrer los contadores
        let mensaje = "Se encontraron los siguientes grupos:\n";
        grupos = ["Vacio", "Non", "Par", "Terna", "Cuarta", "Quinta", "Sexta", "Septima", "Octava", "Novena", "Decima", "Undecima", "Duodecima"];
        for (let i = 0; i < contadores.length; i++) {
            if (contadores[i] >= 2) {
                mensaje += grupos[contadores[i]] + " de " + nombreCartas[i] + "\n";
            }
        }
        window.alert(mensaje);
    }
}