//Ejercicio 1
const borde = document.querySelector("#ratones");
function click() {
  if (borde.style.borderStyle != "solid") {
    borde.style.borderStyle = "solid";
    borde.style.borderColor = "red";
    borde.style.borderWidth = "2px";
  } else {
    borde.style.borderStyle = "none";
  }
}
borde.addEventListener("click", click);

//Ejercicio 2
function verificar() {
  const s1 = Number(document.querySelector("#s1").value);
  const s2 = Number(document.querySelector("#s2").value);
  const s3 = Number(document.querySelector("#s3").value);
  const parrafo = document.querySelector("#parrafo");
  suma = s1 + s2 + s3;
  if (suma > 0 && suma <= 10) {
    parrafo.innerHTML = "Llevas " + suma + " stickers";
  } else if (!suma) {
    parrafo.innerHTML = "Ingresa la cantidad de stickers que vas a llevar";
  } else {
    parrafo.innerHTML = "Llevas demasiados stickers";
  }
}
const btnVerificar = document.querySelector("#verificar");
btnVerificar.addEventListener("click", verificar);


//Ejercicio 3 
function ingresar() {
  const b1 = document.querySelector("#one").value;
  const b2 = document.querySelector("#two").value;
  const b3 = document.querySelector("#three").value;
  const sumatoria = b1 + b2 + b3;
  const pi = document.querySelector("#pi");
  if (sumatoria == "911") {
    pi.innerHTML = "password 1 correcto";
  } else if (sumatoria == "714") {
    pi.innerHTML = "password 2 correcto";
  } else {
    pi.innerHTML = "password incorrecto";
  }
}
const btnIngresar = document.querySelector("#ingresar");
btnIngresar.addEventListener("click", ingresar);
