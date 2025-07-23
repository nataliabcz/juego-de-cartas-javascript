function repartir() {
    let tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
    const TOTAL_CARTAS = 10
    for (let i = 0; i < TOTAL_CARTAS; i++) {
        let carta = document.createElement("img");
        let indice = Math.floor(Math.random() * 52) + 1;
        carta.src = "imageness/cartas/Carta" + indice + ".jpg";
        tablero.appendChild(carta);
    }
    const audio = new Audio("sonidos/repartir.mp3");
    audio.play().then(() => {
        window.alert("se han repartido las 10 cartas");
    });

}

function verificar() {
    window.alert("mañana chequearemos las cartas");
}