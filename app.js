// Mensajes para el usuario
alert ('¡Bienvenidos! Vamos a jugar a adivinar el número secreto');
alert('Estas en la parte inicial, a continuación deberás establecer el intervalo del juego para iniciar.');

//Variables
let numeroMinimo = prompt('Por favor indica un número para establecer el límite mínimo del juego:');
let numeroMaximo = prompt('Por favor indica un número para establecer el límite máximo del juego:');
let numeroUsuario = 0;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let intentos = 1;
// let palabraIntento = 'intento';
let maximosIntentos = 5; // Esta variable reemplaza la definida en la línea anterior.

// console.log(numeroSecreto); // Esta línea nos revela el número secreto en la consola por si lo necesitamos.

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ahora, adivina el número secreto que esta entre ${numeroMinimo} y ${numeroMaximo}`));

    // console.log(numeroSecreto);
    // console.log(numeroUsuario);

    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, se cumple con la condición
        alert(`Haz adivinado, el número es: ${numeroUsuario}. Lo lograste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`); //Aquí utilizamos un operador ternario
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {    
            alert('El número secreto es mayor.');
        } 
        // Incrementamos el contador cuando el usuario no acierta
        // intentos = intentos + 1;
        // intentos +=1;
        intentos++;

        // palabraIntento = 'intentos';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos.`);
            break; // Este comando cierra el bucle While si se cumple la condición anteriormente indicada
        }
        //La condición no se cumplió
        //alert('Lo siento, no haz adivinado el número.');
    }
}
