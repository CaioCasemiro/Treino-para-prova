export function calcularMedia(lista) {
    if (Array.isArray(lista)) {
        if (lista.length === 0) {
            return null
        } else {
            let soma = 0
            for (let i = 0; i < lista.length; i++) {
                soma += lista[i]
            }
            let media = soma / lista.length
            return media
        }
    }
    else {
        return null
    }
}

export function verificarPrimo(numero) {
    let contadorDivisoesCertas = 0
    for(let i = 1; i <= numero; i++){
        if (numero%i === 0){
            contadorDivisoesCertas++
        }
    } if(contadorDivisoesCertas > 2){
        return false
    } else{return true}
}

export function inverterString(string) {
    if(string.length === 0){
        return string
    } else{
        let stringReverso = string.split("").reverse().join("")
        return stringReverso
    }
}

export function removerElementosNulos(lista) {
    for(let i = 0; i < lista.length; i++){
        if(lista[i] === null || lista[i]=== undefined){
            lista.splice(i, 1)
        }
    } return(lista)
}