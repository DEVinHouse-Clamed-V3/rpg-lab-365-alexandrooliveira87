export default class Mapa {
    private nome: string;
    private descricao: string;
    private dificuldade: string;
  
    constructor(nome: string, descricao: string, dificuldade: string) {
      this.nome = nome;
      this.descricao = descricao;
      this.dificuldade = dificuldade;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getDescricao(): string {
      return this.descricao;
    }
  
    public getDificuldade(): string {
      return this.dificuldade;
    }
  
    public static sortearMapa(): Mapa {
      const mapas: Mapa[] = [
        new Mapa(
          "🌲 Floresta Encantada",
          "Uma floresta mágica cheia de mistérios e criaturas mágicas.",
          "Fácil"
        ),
        new Mapa(
          "🔥 Vulcão Ativo",
          "Um vulcão perigoso com lava e rochas instáveis.",
          "Difícil"
        ),
        new Mapa(
          "🌊 Caverna Submersa",
          "Uma caverna parcialmente submersa com perigos ocultos.",
          "Médio"
        ),
        new Mapa(
          "⛰️ Montanha Gelada",
          "Uma montanha coberta de gelo e nevascas constantes.",
          "Difícil"
        ),
        new Mapa(
          "🏜️ Deserto Infinito",
          "Um vasto deserto cheio de segredos e miragens.",
          "Médio"
        ),
      ];
  
      const mapaSorteado = mapas[Math.floor(Math.random() * mapas.length)];
      return mapaSorteado;
    }
  }
  