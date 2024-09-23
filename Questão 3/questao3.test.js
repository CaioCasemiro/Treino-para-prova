import { describe, it, expect } from "bun:test";
import {
    calcularFatorial,
    verificarPalindromo,
    somaDigitos,
    adicionarElementoUnico,
} from "./questao3.js";

// Teste para a função calcularFatorial
describe("calcularFatorial", () => {
    it("deve calcular o fatorial de um número", () => {
        expect(calcularFatorial(5)).toBe(120);
    });
    it("deve retornar 1 para fatorial de 0", () => {
        expect(calcularFatorial(0)).toBe(1);
    });
    it("deve retornar null para números negativos", () => {
        expect(calcularFatorial(-3)).toBe(null);
    });
});

// Teste para a função verificarPalindromo
describe("verificarPalindromo", () => {
    it("deve retornar true para palíndromos", () => {
        expect(verificarPalindromo("arara")).toBe(true);
    });
    it("deve retornar false para strings que não são palíndromos", () => {
        expect(verificarPalindromo("algoritmo")).toBe(false);
    });
});

// Teste para a função somaDigitos
describe("somaDigitos", () => {
    it("deve retornar a soma dos dígitos de um número", () => {
        expect(somaDigitos(123)).toBe(6);
    });
    it("deve retornar 0 se o número for 0", () => {
        expect(somaDigitos(0)).toBe(0);
    });
});

// Teste para a função adicionarElementoUnico
describe("adicionarElementoUnico", () => {
    it("deve adicionar um elemento à lista se ele não estiver presente", () => {
        expect(adicionarElementoUnico([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });
    it("não deve adicionar o elemento se ele já estiver na lista", () => {
        expect(adicionarElementoUnico([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });
});
