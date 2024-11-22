"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Arma_1 = __importDefault(require("./models/Arma"));
const Personagem_1 = __importDefault(require("./models/Personagem"));
const Inimigo_1 = __importDefault(require("./models/Inimigo"));
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.clear();
        console.log("🏹 Bem-vindo ao 🎮 RPG Console Adventure! 🏹\n");
        yield delay(1000);
        console.log("💡 Preparando o cenário...\n");
        yield delay(1500);
        // Criando armas
        const espada = new Arma_1.default("Espada Longa", 50, "Uma espada feita de aço temperado.");
        const machado = new Arma_1.default("Machado de Guerra", 40, "Um machado pesado e devastador.");
        // Criando personagens
        const jogador = new Personagem_1.default("🧙 Pombo", 100, 20);
        const inimigo = new Inimigo_1.default("👹 Dick Vigarista", 80, 15, machado);
        console.log("🎮 Personagens criados:");
        console.log(`✨ Jogador: ${jogador.getNome()} (❤️  Vida: ${jogador.getVida()}, 💪  Força: ${jogador.getForca()})`);
        console.log(`👹 Inimigo: ${inimigo.getNome()} (❤️  Vida: ${inimigo.getVida()}, 💪  Força: ${inimigo.getForca()})\n`);
        yield delay(2000);
        // Equipando a arma no jogador
        console.log(`🛠️  Equipando ${espada.getNome()} no ${jogador.getNome()}...`);
        jogador.equiparArma(espada);
        console.log();
        yield delay(1500);
        // Combate
        console.log("⚔️  O combate está prestes a começar... ⚔️\n");
        yield delay(2000);
        let turno = 1;
        while (jogador.getVida() > 0 && inimigo.getVida() > 0) {
            console.log(`🔄 Turno ${turno}`);
            yield delay(1000);
            // Jogador ataca
            console.log(`👤 ${jogador.getNome()} se prepara para atacar...`);
            jogador.atacar(inimigo);
            if (inimigo.getVida() <= 0)
                break;
            yield delay(1500);
            // Inimigo decide sua ação
            console.log(`👹 ${inimigo.getNome()} está observando...`);
            inimigo.comportamentoAleatorio(jogador);
            if (jogador.getVida() <= 0)
                break;
            console.log(); // Espaço entre os turnos
            turno++;
            yield delay(2000);
        }
        // Fim do combate
        console.log("\n🏁 Fim do Combate 🏁");
        yield delay(1500);
        if (jogador.getVida() > 0) {
            console.log(`🎉 Vitória! ${jogador.getNome()} derrotou o terrível ${inimigo.getNome()}!`);
            console.log("💎 Você ganhou 100 pontos de experiência e um item raro! 🎁");
        }
        else {
            console.log(`💀 Derrota... ${inimigo.getNome()} aniquilou o valente ${jogador.getNome()}.`);
            console.log("⚰️ Você retornará mais forte na próxima vez...");
        }
        console.log("\n🕹️ Obrigado por jogar RPG Console Adventure! Até a próxima! 🕹️");
    });
}
main();
