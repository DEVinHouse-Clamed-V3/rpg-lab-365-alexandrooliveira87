export default class Arma {
    // Atributos privados
    private readonly nome: string;
    private readonly descricao: string;
    private dano: number;

    // Construtor
    constructor(nome: string, dano: number, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
        if (dano < 0) {
            throw new Error("O dano não pode ser negativo.");
        }
        this.dano = dano;
    }

    // Métodos getters
    public getNome(): string {
        return this.nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getDano(): number {
        return this.dano;
    }

    // Método setter para dano
    public setDano(valor: number): void {
        if (valor < 0) {
            throw new Error("O dano não pode ser negativo.");
        }
        this.dano = valor;
    }
}
