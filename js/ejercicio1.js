let btnExecute1 = document.getElementById("btnExecute1");
let resultEjercicio1 = document.getElementById("resultEjercicio1");
let serieNum = [3, 5, 7, 1, 6];


btnExecute1.addEventListener("click", function (e){
e.preventDefault;
let numMayor = serieNum[0];

for (let i = 1; i < serieNum.length; i++) {
    
    if (numMayor < serieNum[i]){

        numMayor = serieNum[i];
    }
}
resultEjercicio1.innerHTML = "El número mas grande de la serie: " + serieNum + " es: <br/>" + numMayor;

})
    

