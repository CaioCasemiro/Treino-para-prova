import { describe, it, expect } from "bun:test";
import {
    filtrarNumerosNegativos,
    verificarDivisivelPor5,
    contarCaracterO,
    adicionarPropriedade,
} from "./questao2.js";

// Teste para a função filtrarNumerosNegativos
describe("filtrarNumerosNegativos", () => {
    it("deve retornar apenas os números negativos da lista", () => {
        expect(filtrarNumerosNegativos([1, -3, 5, -7, 2])).toEqual([-3, -7]);
    });
    it("deve retornar uma lista vazia se não houver números negativos", () => {
        expect(filtrarNumerosNegativos([1, 2, 3])).toEqual([]);
    });
});

// Teste para a função verificarDivisivelPor5
describe("verificarDivisivelPor5", () => {
    it("deve retornar true para números divisíveis por 5", () => {
        expect(verificarDivisivelPor5(10)).toBe(true);
    });
    it("deve retornar false para números não divisíveis por 5", () => {
        expect(verificarDivisivelPor5(7)).toBe(false);
    });
});

// Teste para a função contarCaracterO
describe("contarCaracterO", () => {
    it("deve contar a quantidade de 'o' na string", () => {
        expect(contarCaracterO("Ovos")).toBe(2);
    });
    it("deve retornar 0 para string sem 'o'", () => {
        expect(contarCaracterO("Cavalo")).toBe(1);
    });
});

// Teste para a função adicionarPropriedade
describe("adicionarPropriedade", () => {
    it("deve adicionar uma nova propriedade no objeto", () => {
        const objeto = { nome: "João" };
        expect(adicionarPropriedade(objeto, "idade", 25)).toEqual({
            nome: "João",
            idade: 25,
        });
    });
    it("deve retornar o mesmo objeto se a propriedade já existir", () => {
        const objeto = { nome: "João", idade: 25 };
        expect(adicionarPropriedade(objeto, "idade", 30)).toEqual({
            nome: "João",
            idade: 25,
        });
    });
});