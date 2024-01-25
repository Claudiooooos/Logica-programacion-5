var intentos = 0;
var numerosIngresados = [];
var numerosIncorrectos = [];

function adivinaElNumero() {
    var numeroIngresado = parseInt(document.getElementById('numeroUsuario').value);

    if (isNaN(numeroIngresado)) {
        document.getElementById('mensaje').innerHTML = 'Por favor, ingresa un número válido.';
        return;
    }

    var numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos++;
    numerosIngresados.push(numeroIngresado);

    if (numeroIngresado === numeroSecreto) {
        document.getElementById('mensaje').innerHTML = '¡Felicidades, adivinaste el número secreto!';
        document.getElementById('numerosIncorrectos').innerHTML = ''; // Limpiamos la lista de incorrectos
    } else if (numeroIngresado < numeroSecreto) {
        document.getElementById('mensaje').innerHTML = 'Ups, el número secreto es menor.';
        numerosIncorrectos.push(numeroIngresado);
        document.getElementById('numerosIncorrectos').innerHTML = 'Números incorrectos: ' + numerosIncorrectos.join(', ');
    }
    else {
        document.getElementById('mensaje').innerHTML = 'Ups, el número secreto es mayor.';
        numerosIncorrectos.push(numeroIngresado);
        document.getElementById('numerosIncorrectos').innerHTML = 'Números incorrectos: ' + numerosIncorrectos.join(', ');
    }


    document.getElementById('intentos').innerHTML = 'Número de intentos: ' + intentos;
    document.getElementById('numerosIngresados').innerHTML = 'Números ingresados: ' + numerosIngresados.join(', ');
}