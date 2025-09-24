function calcular() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("op").value;

  let resultado = 0;

  if (op == "+") {
    resultado = num1 + num2;
  }
  if (op == "-") {
    resultado = num1 - num2;
  }
  if (op == "*") {
    resultado = num1 * num2;
  }
  if (op == "/") {
    if (num2 == 0) {
      resultado = "Error: división entre 0";
    } else {
      resultado = num1 / num2;
    }
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}