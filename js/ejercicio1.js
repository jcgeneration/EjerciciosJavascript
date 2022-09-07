// Definir variables.
let numeros = [3, 5, 7, 1, 6];
let mayor = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor){
        mayor = numeros[i];
    };
    
}
console.log(mayor);