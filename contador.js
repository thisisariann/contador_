//contador -o- cronometro -o- poner alarmas, en resumen, trabajar con el tiempo (time)

const contador = document.getElementById("contar");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const reset = document.getElementById("reset");

let num = 0;

/*suma.addEventListener("click", () => {
  num++;
  contador.innerHTML = num;
});*/

////SUMANDO OK!
function sumar() {
  num++;
  contador.innerHTML = num;
}
suma.addEventListener("click", sumar);

////RESTANDO OK!
function restar() {
  if (num == 0) {
    return true;
  } else {
    num--;
    contador.innerHTML = num;
  }
}
resta.addEventListener("click", restar);

//////RESET

function resetear() {
  num = 0;
  contador.innerHTML = num;
}
reset.addEventListener("click", resetear);
