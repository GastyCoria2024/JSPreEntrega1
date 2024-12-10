console.log("Bienvenido al Simulador de Rutinas de Gym");
console.log("Selecciona tu objetivo: 'fuerza', 'hipertrofia' o 'resistencia'");

let objetivo = ""; // Variable para almacenar el objetivo
let intentos = 0;  // Contador de intentos

// Bucle que seguirá ejecutándose hasta que el usuario introduzca un objetivo válido
while (objetivo !== "fuerza" && objetivo !== "hipertrofia" && objetivo !== "resistencia") {
    objetivo = prompt("¿Cuál es tu objetivo? (fuerza/hipertrofia/resistencia)").toLowerCase();
    intentos++; // Incrementar el contador de intentos

    if (objetivo === "fuerza") {
        console.log(" Objetivo: Fuerza");
        console.log("- Series: 4-6");
        console.log("- Repeticiones: 3-6");
        console.log("- Peso: 80-90% de tu máximo.");
    } else if (objetivo === "hipertrofia") {
        console.log(" Objetivo: Hipertrofia");
        console.log("- Series: 3-5");
        console.log("- Repeticiones: 8-12");
        console.log("- Peso: 65-75% de tu máximo.");
    } else if (objetivo === "resistencia") {
        console.log(" Objetivo: Resistencia");
        console.log("- Series: 2-4");
        console.log("- Repeticiones: 12-20");
        console.log("- Peso: 40-50% de tu máximo.");
    } else {
        console.log(" Opción no válida. Por favor, elige entre 'fuerza', 'hipertrofia' o 'resistencia'.");
    }
}

// Mostrar el número de intentos al final
console.log(`¡Has seleccionado tu objetivo en ${intentos} intento(s)!`);
