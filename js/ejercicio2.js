let btnExecute2 = document.getElementById("btnExecute2");
let resultEjercicio2 = document.getElementById("resultEjercicio2");
let serieNum2 = [-1, 3, 4, 2, 6];

btnExecute2.addEventListener("click", function (e){
    e.preventDefault;
    let numMenor = serieNum2[0];
    
    for (let i = 1; i < serieNum2.length; i++) {
        
        if (numMenor > serieNum2[i]){
    
            numMenor = serieNum2[i];
        }
    }
    resultEjercicio2.innerHTML = "El número mas chico de la serie: " + serieNum2 + " es: <br/>" + numMenor;
    
    })