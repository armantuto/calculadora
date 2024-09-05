function sumarCantidadesPorLista() {
    // Obtener todas las listas de ciudades
    const cityLists = document.querySelectorAll('.city-list');

    // Recorrer cada lista de ciudades
    cityLists.forEach(list => {
        // Inicializar el total para la lista actual en 0
        let total = 0;
        let spezzatura = 0;

        // Obtener todos los inputs dentro de la lista actual
        const amounts = list.querySelectorAll('.amount');
        const spezz = list.querySelectorAll(".spezzatura")

        // Sumar los valores de los inputs dentro de esta lista
        amounts.forEach(input => {
            total += parseFloat(input.value) || 0;
        });

        spezz.forEach(input => {
            spezzatura += parseFloat(input.value)  || 0;
        });



        // Mostrar el total en el elemento con la clase 'total' dentro de esta lista
        list.querySelector('.tot').innerText = total;
          list.querySelector('.spezzTotal').innerText = spezzatura;


    var pacchi = total
    var select = document.getElementById('miSelect').value;
    var fija = 1

    var pacchiX = pacchi / select
    var numeroEntero = Math.floor(pacchiX);
    var decimales = pacchiX - numeroEntero;
    var pacoRestante = fija / select
     var pacchiDaAdd = decimales / pacoRestante
     var result = numeroEntero + " Mani da " + select + " pacchi  " 
     
     if (numeroEntero < 1) {
        result = ""
    }
     
     

     if (pacchiDaAdd > 0) {
        result += " + "  + pacchiDaAdd.toFixed(0) + " pachi "
    }
     
     
     if (spezzatura > 0) {
        result += " e " + spezzatura + " spezzatura";
    }
      console.log(result)
     list.querySelector('.bancale').innerText = result;



    });
}