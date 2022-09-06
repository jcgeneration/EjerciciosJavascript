let btnExecute3 = document.getElementById("btnExecute3");
let resultEjercicio3 = document.getElementById("resultEjercicio3");
let serieNum3 = [1, 22, 5, 17, 10, 5, 40, 5];

btnExecute3.addEventListener("click", function (e){
    e.preventDefault;
    
    let resCase = false;
    let numRep;
    
    for (let i = 0; i < serieNum3.length; i++) {
        
        if(resCase){

            break;

        }else
        {
            for (let j = i+1; j < serieNum3.length; j++) {
            
                if (serieNum3[i] == serieNum3[j]){
                
                resCase = true;
                numRep = serieNum3[j];
                break;      
                }   
            }
        }
        }
    switch (resCase) {
        case true:
            resultEjercicio3.innerHTML = "El número de la serie: " + serieNum3 + " que se repite es: <br/>" + numRep;
            break;

        case false:
            
            resultEjercicio3.innerHTML = "No hay un numero que se repita en la serie: " + serieNum3;
                break;
    
        default:
            break;
    }   
    
})
