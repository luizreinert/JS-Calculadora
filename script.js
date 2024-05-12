function calcular(tipo, valor){
    if (tipo === 'acao'){
        if (valor === 'c') {
            document.getElementById('visor').value = ''
        } 

        if (valor === "/" || valor === "+" || valor === "-" || valor === "*" || valor === "."){
            document.getElementById('visor').value += valor
        }

        if (valor === "="){
          var valorCampo = eval(document.getElementById('visor').value)
          document.getElementById('visor').value = valorCampo
          
          
        }

    } else if (tipo === 'valor'){
        var valorVisor = document.getElementById('visor').value += valor
    }
}