let num1 = parseFloat(prompt('Vamos a sumar 3 números. Digita el primer número'));
let num2 = parseFloat(prompt('Digita el segundo número'));
let num3 = parseFloat(prompt('Digita el tercer número'));

function sum(num1, num2, num3){
    alert(`El valor total después de sumar los 3 números es: ${num1 + num2 + num3}`);
}

sum(num1, num2, num3);