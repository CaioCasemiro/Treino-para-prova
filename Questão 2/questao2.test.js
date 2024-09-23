import { describe, it, expect } from "bun:test";
import {
    calcularMedia,
    verificarPrimo,
    inverterString,
    removerElementosNulos,
} from "./questao2.js";

// Teste para a função calcularMedia
describe("calcularMedia", () => {
    it("deve retornar a média dos números na lista", () => {
        expect(calcularMedia([1, 2, 3, 4, 5])).toBe(3);
    });
    it("deve retornar null para lista vazia", () => {
        expect(calcularMedia([])).toBe(null);
    });
    it("deve retornar null para entrada inválida", () => {
        expect(calcularMedia("não é uma lista")).toBe(null);
    });
});

// Teste para a função verificarPrimo
describe("verificarPrimo", () => {
    it("deve retornar true para números primos", () => {
        expect(verificarPrimo(7)).toBe(true);
    });
    it("deve retornar false para números não primos", () => {
        expect(verificarPrimo(4)).toBe(false);
    });
});

// Teste para a função inverterString
describe("inverterString", () => {
    it("deve inverter a string", () => {
        expect(inverterString("algoritmo")).toBe("omtirogla");
    });
    it("deve retornar string vazia se a entrada for vazia", () => {
        expect(inverterString("")).toBe("");
    });
});

// Teste para a função removerElementosNulos
describe("removerElementosNulos", () => {
    it("deve remover elementos nulos e indefinidos da lista", () => {
        expect(removerElementosNulos([1, null, 2, undefined, 3])).toEqual([1, 2, 3]);
    });
    it("deve retornar lista vazia se todos os elementos forem nulos ou indefinidos", () => {
        expect(removerElementosNulos([null, undefined])).toEqual([]);
    });
});
