"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Arma {
    // Construtor
    constructor(nome, dano, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        if (dano < 0) {
            throw new Error("O dano não pode ser negativo.");
        }
        this.dano = dano;
    }
    // Métodos getters
    getNome() {
        return this.nome;
    }
    getDescricao() {
        return this.descricao;
    }
    getDano() {
        return this.dano;
    }
    // Método setter para dano
    setDano(valor) {
        if (valor < 0) {
            throw new Error("O dano não pode ser negativo.");
        }
        this.dano = valor;
    }
}
exports.default = Arma;
