export function calcularFatorial(numero){
    if(numero<0){
        return null
    } else if(numero === 0){
        return 1
    } else{
        let resultado = 1
        for (let i = numero; i > 1; i--){
            resultado *= i
        } return resultado
    }
}

export function verificarPalindromo(string){
    let stringInversa = string.split("").reverse().join("")
    if (stringInversa === string){
        return true
    } else{return false}
}

export function somaDigitos(numero){
    let digitos = numero.toString().split("").map(Number)
    let resultado = 0
    for (let i = 0; i < digitos.length;i++ ){
        resultado += digitos[i]
    } return resultado
}

export function adicionarElementoUnico(lista, elemtoParaAdicionar){
    if(lista.includes(elemtoParaAdicionar)){
        return lista
    } else{
        lista.push(elemtoParaAdicionar)
        return lista
    }
}