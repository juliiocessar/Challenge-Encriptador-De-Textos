const inputTexto = document.querySelector(".input-texto");
const resultado = document.querySelector(".resultado");



function encriptar(cadenaEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadenaEncriptada = cadenaEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (cadenaEncriptada.includes(matrizCodigo[i][0])) {
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return cadenaEncriptada
}

function btnEncriptar() {

    const textoEncriptado = encriptar(inputTexto.value)

    resultado.value = textoEncriptado
    resultado.style.backgroundImage = "none";
    inputTexto.value = ""; 
    document.getElementById('no-found').style.display = 'none';
    document.getElementById('parrafo-info').style.display = 'none';
    document.getElementById('resultado').style.marginTop = '2em';

}


function desencriptar(cadenaDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (cadenaDesencriptada.includes(matrizCodigo[i][1])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return cadenaDesencriptada
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
   
        resultado.value = textoDesencriptado
        inputTexto.value = "";
        resultado.style.backgroundImage = "none";
    
}

function copiar() {
    resultado.select();
    navigator.clipboard.writeText(resultado.value)
    resultado.value = "";
}

