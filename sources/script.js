function copiarTexto() {
    const textoACopiar = document.getElementById('output').innerText;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => alert('Texto copiado correctamente'))
        .catch(err => console.error('Error al copiar el texto:', err));
}

function encriptarTexto() {
    const inputText = document.getElementById('inputtext').value.trim().toLowerCase();
    if (validarCaracteres(inputText)) {
        const outputText = encriptar(inputText);
        document.getElementById('output').textContent = outputText;
    } else {
        alert("El texto ingresado contiene caracteres no permitidos.");
    }
}

function desencriptarTexto() {
    const inputText = document.getElementById('inputtext').value.trim().toLowerCase();
    if (validarCaracteres(inputText)) {
        const outputText = desencriptar(inputText);
        document.getElementById('output').textContent = outputText;
    } else {
        alert("El texto ingresado contiene caracteres no permitidos.");
    }
}

function validarCaracteres(texto) {
    return /^[a-z ]*$/.test(texto); // Permitir solo letras minúsculas y espacios
}

function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
}