// ## Ejercicio #2
// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:
// Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.



function MyMin(nums) {
    var n = nums.length;
    minimo = nums[n-1];
    while (n--){
        if(nums[n] < minimo) {
            minimo = nums[n]
        }
    }
    return minimo;
};

var nums = [-1, 3, 4, 2, 6];
var m = MyMin(nums);
console.log(m)