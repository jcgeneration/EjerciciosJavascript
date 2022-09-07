let res = document.getElementById("resultado");

        let btn = document.getElementById("btnValidar");

        btn.addEventListener("click", function(e){
            e.preventDefault();
            console.log("btn click");
            let a1 = parseInt(document.getElementById("n1").value);
            let b1 = parseInt(document.getElementById("n2").value);
            let c1 = parseInt(document.getElementById("n3").value);

            let array = [a1,b1,c1];

            array.sort();
            
            res.innerHTML = "El número mayor es " + array[2];

 });
