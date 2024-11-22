"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Arma_1 = __importDefault(require("./models/Arma"));
const Personagem_1 = __importDefault(require("./models/Personagem"));
function main() {
    console.log("🏹 Bem-vindo ao RPG Console Adventure! 🏹\n");
    // Criando uma arma
    const espada = new Arma_1.default("Espada Longa", 50, "Uma espada feita de aço temperado.");
    // Criando personagens
    const jogador = new Personagem_1.default("Herói", 100, 20);
    const inimigo = new Personagem_1.default("Orc", 80, 15);
    console.log(`👤 Jogador criado: ${jogador.getNome()} (Vida: ${jogador.getVida()}, Força: ${jogador.getForca()})`);
    console.log(`🛡️ Inimigo criado: ${inimigo.getNome()} (Vida: ${inimigo.getVida()}, Força: ${inimigo.getForca()})\n`);
    // Equipando a arma no jogador
    console.log(`🔧 Equipando arma no jogador: ${espada.getNome()} (Dano: ${espada.getDano()})`);
    jogador.equiparArma(espada);
    console.log();
    // Combate
    console.log("⚔️ Início do Combate ⚔️\n");
    let turno = 1;
    while (jogador.getVida() > 0 && inimigo.getVida() > 0) {
        console.log(`🔄 Turno ${turno}`);
        // Jogador ataca
        jogador.atacar(inimigo);
        if (inimigo.getVida() <= 0)
            break;
        // Inimigo ataca
        inimigo.atacar(jogador);
        if (jogador.getVida() <= 0)
            break;
        console.log(); // Espaço entre os turnos
        turno++;
    }
    // Fim do combate
    console.log("\n🏁 Fim do Combate 🏁");
    if (jogador.getVida() > 0) {
        console.log(`🎉 ${jogador.getNome()} venceu o combate!`);
    }
    else {
        console.log(`💀 ${inimigo.getNome()} venceu o combate!`);
    }
}
main();
