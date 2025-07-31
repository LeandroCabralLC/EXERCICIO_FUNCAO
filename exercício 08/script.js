function verificarTexto(texto) {
    if (texto.length > 10){
    console.log("Texto passou do limite");
} else {
    console.log("Texto dentro do limite");
 }
}


console.log(verificarTexto("Um texto que passe do limite permitido"));
console.log(verificarTexto("Bom-dia"));