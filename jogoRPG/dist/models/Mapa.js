"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mapa {
    constructor(nome, descricao, dificuldade) {
        this.nome = nome;
        this.descricao = descricao;
        this.dificuldade = dificuldade;
    }
    getNome() {
        return this.nome;
    }
    getDescricao() {
        return this.descricao;
    }
    getDificuldade() {
        return this.dificuldade;
    }
    static sortearMapa() {
        const mapas = [
            new Mapa("🌲 Floresta Encantada", "Uma floresta mágica cheia de mistérios e criaturas mágicas.", "Fácil"),
            new Mapa("🔥 Vulcão Ativo", "Um vulcão perigoso com lava e rochas instáveis.", "Difícil"),
            new Mapa("🌊 Caverna Submersa", "Uma caverna parcialmente submersa com perigos ocultos.", "Médio"),
            new Mapa("⛰️ Montanha Gelada", "Uma montanha coberta de gelo e nevascas constantes.", "Difícil"),
            new Mapa("🏜️ Deserto Infinito", "Um vasto deserto cheio de segredos e miragens.", "Médio"),
        ];
        const mapaSorteado = mapas[Math.floor(Math.random() * mapas.length)];
        return mapaSorteado;
    }
}
exports.default = Mapa;
