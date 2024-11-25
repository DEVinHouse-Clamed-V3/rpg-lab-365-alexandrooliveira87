"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Inimigo_1 = __importDefault(require("./Inimigo"));
class Chefe extends Inimigo_1.default {
    constructor(nome, vida, forca, habilidadeEspecial) {
        super(nome, vida, forca);
        this.habilidadeEspecial = habilidadeEspecial;
    }
    getHabilidadeEspecial() {
        return this.habilidadeEspecial;
    }
    atacar(alvo) {
        const chanceDeAtaque = Math.random(); // 30% de chance de falhar
        if (chanceDeAtaque < 0.3) {
            console.log(`${this.getNome()} tentou atacar, mas falhou!`);
            return;
        }
        const dano = this.calcularDano() * 2; // Dano dobrado
        console.log(`${this.getNome()} usou sua força de chefe e atacou ${alvo.getNome()} causando ${dano} de dano!`);
        alvo.receberDano(dano);
    }
    comportamentoEspecialAntesDeMorrer(jogador) {
        if (Math.random() < 0.2) { // 20% de chance de ativar
            console.log(`${this.getNome()} usou sua habilidade especial antes de ser derrotado: ${this.habilidadeEspecial}!`);
            jogador.receberDano(50); // Dano fixo no jogador como ataque final
            console.log(`🔥 ${jogador.getNome()} recebeu 50 de dano do ataque final!`);
        }
        else {
            console.log(`${this.getNome()} foi derrotado sem usar sua habilidade especial.`);
        }
    }
}
exports.default = Chefe;
