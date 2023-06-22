function contador() {
    let text = document.formulario.texto.value;
    document.getElementById("contador").innerText = text.length;
}