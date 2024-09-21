import { describe, it, expect } from "bun:test";
import {
    multiplicarLista,
    verificarDivisivelPor2,
    contarCaracterI,
    trocarPropriedade,
} from "./previa.js";

// Teste para a função multiplicarLista
describe("multiplicarLista", () => {
    it("deve multiplicar cada número da lista pelo valor dado", () => {
        expect(multiplicarLista([1, 2, 3], 2)).toEqual([2, 4, 6]);
    });
    it("deve retornar uma lista vazia para lista vazia", () => {
        expect(multiplicarLista([], 3)).toEqual([]);
    });
});

// Teste para a função verificarDivisivelPor2
describe("verificarDivisivelPor2", () => {
    it("deve retornar true para números divisíveis por 2", () => {
        expect(verificarDivisivelPor2(8)).toBe(true);
    });
    it("deve retornar false para números não divisíveis por 2", () => {
        expect(verificarDivisivelPor2(7)).toBe(false);
    });
});

// Teste para a função contarCaracterI
describe("contarCaracterI", () => {
    it("deve contar a quantidade de 'i' na string", () => {
        expect(contarCaracterI("Instituição")).toBe(3);
    });
});

// Teste para a função trocarPropriedade
describe("trocarPropriedade", () => {
    it("deve trocar o valor de uma propriedade existente", () => {
        const objeto = { nome: "João", idade: 25 };
        expect(trocarPropriedade(objeto, "idade", 30)).toEqual({
            nome: "João",
            idade: 30,
        });
    });
    it("não deve alterar o objeto se a propriedade não existir", () => {
        const objeto = { nome: "João" };
        expect(trocarPropriedade(objeto, "altura", 1.8)).toEqual({ nome: "João" });
    });
});