import Personagem from "./Personagem";
import Arma from "./Arma";

export default class Inimigo extends Personagem {
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        super(nome, vida, forca, arma);
    }

    // Sobrescrevendo o método atacar
    public atacar(alvo: Personagem): void {
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
    public comportamentoAleatorio(jogador: Personagem): void {
        const acao = Math.random(); // Determina o comportamento: atacar ou esperar
        if (acao < 0.5) {
            console.log(`${this.getNome()} está observando o jogador...`);
        } else {
            console.log(`${this.getNome()} decide atacar!`);
            this.atacar(jogador);
        }
    }
}
