//Recebe uma lista de números e retorna a soma de todos os números positivos. Se a lista estiver vazia ou não for válida, retorna 0.
export function somarNumerosPositivos(lista) {
    if (Array.isArray(lista)) {
        if (lista.length > 0) {
            let soma = 0
            for (let i = 0; i < lista.length; i++) {
                if (lista[i] >= 0) {
                    soma += lista[i]
                }

            } return soma
        } else { return null }
    } else { return null }
}

//Verifica se um número é divisível por 3. Retorna true se for divisível, senão retorna false.
export function verificarDivisivelPor3(num) {
    if (num % 3 === 0) {
        return true
    } else { return false }
}

//Conta quantas vezes o caractere 'e' ou 'E' aparece em uma string usando um loop for.
export function contarCaracterE(string) {
    if (typeof string !== "string") {
        return null
    }
    var contadorDeE = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "e" || string[i] === "E") {
            contadorDeE++
        }
    } if (contadorDeE === 0) {
        return 0
    } else {
        return contadorDeE
    }
}

//Remove uma propriedade de um objeto. Se a propriedade não existir, retorna o objeto original sem alterações.
export function removerPropriedade(objeto, propriedade) {
    if(propriedade in objeto){
        delete objeto[propriedade]
        return objeto
    } else{return objeto}
}