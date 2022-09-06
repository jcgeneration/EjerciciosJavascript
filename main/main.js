// ## Ejercicio #1
// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
// Ejemplo del arreglo : [3, 5, 7, 1, 6]

let lista = [3, 5, 7, 1, 6];
console.log(Math.max(3, 5, 7, 1, 6));
console.log(Math.max(...lista));


function MyMax(nums) {
    var n = nums.length;
    maximo = nums[n-1];
    while (n--){
        if(nums[n] > maximo) {
            maximo = nums[n]
        }
    }
    return maximo;
};

var nums = [3, 5, 7, 1, 6];
var m = MyMax(nums);
console.log(m)