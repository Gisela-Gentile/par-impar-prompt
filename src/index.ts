import "./styles.css";
let datoIngresado:number = Number(prompt("ingrese un numero:"));

if (datoIngresado === 0) {
  console.log("ingrese nuevamente un número")
} else {if (datoIngresado % 2 === 0) {
  console.log("el número es par");
} else {
  console.log("el número es impar");
}}
