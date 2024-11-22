import Arma from "./Arma";

export default class Personagem {
    // Atributos privados
    private nome: string;
    private vida: number;
    private forca: number;
    private arma: Arma | null;

    // Construtor
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.arma = arma;
    }

    // Getters e Setters
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getVida(): number {
        return this.vida;
    }

    public setVida(vida: number): void {
        this.vida = vida;
    }

    public getForca(): number {
        return this.forca;
    }

    public setForca(forca: number): void {
        this.forca = forca;
    }

    public getArma(): Arma | null {
        return this.arma;
    }

    public setArma(arma: Arma | null): void {
        this.arma = arma;
    }

    // Métodos
    public atacar(alvo: Personagem): void {
        const chanceDeAtaque = Math.random(); // Chance de falhar no ataque (50%)
        if (chanceDeAtaque < 0.5) {
            console.log(`${this.nome} tentou atacar, mas falhou!`);
            return;
        }

        const dano = this.calcularDano();
        console.log(`${this.nome} atacou ${alvo.getNome()} causando ${dano} de dano!`);
        alvo.receberDano(dano);
    }

    public receberDano(dano: number): void {
        this.vida -= dano;
        if (this.vida > 0) {
            console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
        } else {
            console.log(`${this.nome} foi derrotado!`);
        }
    }

    public equiparArma(arma: Arma): void {
        this.arma = arma;
        console.log(`${this.nome} equipou a arma: ${arma.getNome()}`);
    }

    private calcularDano(): number {
        const danoBase = this.forca;
        const danoArma = this.arma ? this.arma.getDano() : 0;
        return danoBase + danoArma;
    }
}
