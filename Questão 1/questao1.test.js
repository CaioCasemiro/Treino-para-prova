import { describe, it, expect } from "bun:test";
import {
    somarNumerosPositivos,
    verificarDivisivelPor3,
    contarCaracterE,
    removerPropriedade,
} from "./questao1.js";

// Teste para a função somarNumerosPositivos
describe("somarNumerosPositivos", () => {
    it("deve retornar a soma dos números positivos", () => {
        expect(somarNumerosPositivos([1, -3, 5, 7, -2])).toBe(13);
    });
    it("deve retornar null para lista vazia", () => {
        expect(somarNumerosPositivos([])).toBe(null);
    });
    it("deve retornar null para entrada inválida", () => {
        expect(somarNumerosPositivos("não é uma lista")).toBe(null);
    });
});

// Teste para a função verificarDivisivelPor3
describe("verificarDivisivelPor3", () => {
    it("deve retornar true para números divisíveis por 3", () => {
        expect(verificarDivisivelPor3(9)).toBe(true);
    });
    it("deve retornar false para números não divisíveis por 3", () => {
        expect(verificarDivisivelPor3(4)).toBe(false);
    });
});

// Teste para a função contarCaracterE
describe("contarCaracterE", () => {
    it("deve contar a quantidade de 'e' na string", () => {
        expect(contarCaracterE("Elefante")).toBe(2);
    });
    it("deve retornar 0 para string sem 'e'", () => {
        expect(contarCaracterE("Tigre")).toBe(1);
    });
});

// Teste para a função removerPropriedade
describe("removerPropriedade", () => {
    it("deve remover uma propriedade existente", () => {
        const objeto = { nome: "João", idade: 25 };
        expect(removerPropriedade(objeto, "idade")).toEqual({ nome: "João" });
    });
    it("deve retornar o mesmo objeto se a propriedade não existir", () => {
        const objeto = { nome: "João" };
        expect(removerPropriedade(objeto, "altura")).toEqual({ nome: "João" });
    });
});