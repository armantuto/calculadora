// function calcular(){
//     var copi = parseFloat(document.getElementsByName("copi")[0].value);
//     var pacchi = parseFloat(document.getElementsByName("pacchi")[0].value);
//     var mani = parseFloat(document.getElementsByName("mani")[0].value);
//     let noTocar = 1
//     var bancali = parseFloat(document.getElementsByName("bancali")[0].value);
//     var select = document.getElementById('miSelect').value;
    
//     var calcolo = copi / pacchi / mani;
//     var numeroEntero = Math.floor(calcolo);
//     var decimales = calcolo - numeroEntero;
//     var pacchiRestante = noTocar / mani
//     var pacchiSuma = decimales / pacchiRestante
//     var result = numeroEntero + " Mani di " + mani + " pacchi + " + pacchiSuma + " pachi"
//     var stampa = numeroEntero / bancali 
//     console.log(" Total: " + result )
//     console.log(" usar: " + stampa  + " bancali di " +  bancali + " mani ");
//     console.log(select)
// }


function calcular2(){
    var pacchi = parseFloat(document.getElementsByName("pacchi")[0].value);
    var select = document.getElementById('miSelect').value;
    var fija = 1

    var pacchiX = pacchi / select
    var numeroEntero = Math.floor(pacchiX);
    var decimales = pacchiX - numeroEntero;
    var pacoRestante = fija / select
     var pacchiDaAdd = decimales / pacoRestante
     var result = numeroEntero + " Mani da " + select + " pacchi + " + pacchiDaAdd.toFixed(0) + " pachi"
     console.log(result)
     document.getElementById("total").innerHTML = result;
}