"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personagem {
    // Construtor
    constructor(nome, vida, forca, arma = null) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.arma = arma;
    }
    // Getters e Setters
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getVida() {
        return this.vida;
    }
    setVida(vida) {
        this.vida = vida;
    }
    getForca() {
        return this.forca;
    }
    setForca(forca) {
        this.forca = forca;
    }
    getArma() {
        return this.arma;
    }
    setArma(arma) {
        this.arma = arma;
    }
    // Métodos
    atacar(alvo) {
        const chanceDeAtaque = Math.random(); // Chance de falhar no ataque (50%)
        if (chanceDeAtaque < 0.5) {
            console.log(`${this.nome} tentou atacar, mas falhou!`);
            return;
        }
        const dano = this.calcularDano();
        console.log(`${this.nome} atacou ${alvo.getNome()} causando ${dano} de dano!`);
        alvo.receberDano(dano);
    }
    receberDano(dano) {
        this.vida -= dano;
        if (this.vida > 0) {
            console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
        }
        else {
            console.log(`${this.nome} foi derrotado!`);
        }
    }
    equiparArma(arma) {
        this.arma = arma;
        console.log(`${this.nome} equipou a arma: ${arma.getNome()}`);
    }
    calcularDano() {
        const danoBase = this.forca;
        const danoArma = this.arma ? this.arma.getDano() : 0;
        return danoBase + danoArma;
    }
}
exports.default = Personagem;
