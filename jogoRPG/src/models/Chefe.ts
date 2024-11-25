import Inimigo from "./Inimigo";
import Personagem from "./Personagem";

export default class Chefe extends Inimigo {
  private habilidadeEspecial: string;


  constructor(
    nome: string,
    vida: number,
    forca: number,
    habilidadeEspecial: string
  ) {
    super(nome, vida, forca);
    this.habilidadeEspecial = habilidadeEspecial;
  }
  

  public getHabilidadeEspecial(): string {
    return this.habilidadeEspecial;
  }

  public atacar(alvo: Personagem): void {
    const chanceDeAtaque = Math.random(); // 30% de chance de falhar
    if (chanceDeAtaque < 0.3) {
      console.log(`${this.getNome()} tentou atacar, mas falhou!`);
      return;
    }

    const dano = this.calcularDano() * 2; // Dano dobrado
    console.log(`${this.getNome()} usou sua força de chefe e atacou ${alvo.getNome()} causando ${dano} de dano!`);
    alvo.receberDano(dano);
  }

  public comportamentoEspecialAntesDeMorrer(jogador: Personagem): void {
    if (Math.random() < 0.2) { // 20% de chance de ativar
      console.log(
        `${this.getNome()} usou sua habilidade especial antes de ser derrotado: ${this.habilidadeEspecial}!`
      );
      jogador.receberDano(50); // Dano fixo no jogador como ataque final
      console.log(`🔥 ${jogador.getNome()} recebeu 50 de dano do ataque final!`);
    } else {
      
      console.log(`${this.getNome()} foi derrotado sem usar sua habilidade especial.`);
    }
  }
}
