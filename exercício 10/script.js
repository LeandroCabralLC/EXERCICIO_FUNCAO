function imprimirPares(numero) {
    for (let i = numero; i >=0; i--){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

console.log(imprimirPares(20));