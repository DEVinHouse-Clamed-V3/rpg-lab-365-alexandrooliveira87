"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = __importDefault(require("./Personagem"));
class Inimigo extends Personagem_1.default {
    constructor(nome, vida, forca, arma = null) {
        super(nome, vida, forca, arma);
    }
    // Sobrescrevendo o método atacar
    atacar(alvo) {
        const chanceDeAtaque = Math.random(); // 20% de chance de falha
        if (chanceDeAtaque < 0.2) {
            console.log(`${this.getNome()} tentou atacar, mas errou!`);
            return;
        }
        const dano = this.calcularDano();
        console.log(`${this.getNome()} atacou ${alvo.getNome()} causando ${dano} de dano!`);
        alvo.receberDano(dano);
    }
    // Novo método para comportamento aleatório
    comportamentoAleatorio(jogador) {
        const acao = Math.random(); // Determina o comportamento: atacar ou esperar
        if (acao < 0.5) {
            console.log(`${this.getNome()} está observando o jogador...`);
        }
        else {
            console.log(`${this.getNome()} decide atacar!`);
            this.atacar(jogador);
        }
    }
}
exports.default = Inimigo;
