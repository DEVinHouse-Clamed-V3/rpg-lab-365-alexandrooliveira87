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
const chalk_1 = __importDefault(require("chalk"));
const Arma_1 = __importDefault(require("./models/Arma"));
const Personagem_1 = __importDefault(require("./models/Personagem"));
const Inimigo_1 = __importDefault(require("./models/Inimigo"));
const delay_1 = require("./utils/delay");
function montarCenario() {
    return __awaiter(this, void 0, void 0, function* () {
        console.clear();
        console.log(chalk_1.default.blueBright(" 🌌  Bem-vindo ao Jogo RPG Typescript! 🌌\n"));
        yield (0, delay_1.delay)(1000);
        console.log(chalk_1.default.yellowBright(" 🔧  Construindo seu Mapa...\n"));
        yield (0, delay_1.delay)(1500);
        // Criando armas
        const espada = new Arma_1.default(" ⚔️  Espada Longa", 50, "Uma espada feita de aço temperado, brilhando à luz da lua.");
        const machado = new Arma_1.default(" 🪓  Machado de Guerra", 40, "Um machado robusto, perfeito para desferir golpes brutais.");
        const arco = new Arma_1.default(" 🏹  Arco Longo", 30, "Um arco elegante, ideal para caçadores furtivos.");
        console.log(chalk_1.default.magentaBright("🛠️  Armas mágicas forjadas:"));
        console.log(`1️⃣ ${chalk_1.default.greenBright(espada.getNome())} - Dano: ${espada.getDano()}`);
        console.log(`2️⃣ ${chalk_1.default.greenBright(machado.getNome())} - Dano: ${machado.getDano()}`);
        console.log(`3️⃣ ${chalk_1.default.greenBright(arco.getNome())} - Dano: ${arco.getDano()}\n`);
        yield (0, delay_1.delay)(1500);
        // Criando o personagem principal
        const jogador = new Personagem_1.default("🦸 Pombo", 100, 20);
        console.log(chalk_1.default.cyanBright(`✨ Seu personagem principal: ${jogador.getNome()} ( ❤️  Vida: ${jogador.getVida()}, 💪  Força: ${jogador.getForca()})\n`));
        yield (0, delay_1.delay)(1500);
        // Criando inimigos
        const inimigos = [
            new Inimigo_1.default("👾 Goblin Malicioso", 60, 15, arco),
            new Inimigo_1.default("💂 Rato Guerreiro", 80, 20, machado),
            new Inimigo_1.default("🧛 Vampiro Sombrio", 90, 25, null),
            new Inimigo_1.default("🐺 Lobisomem Furioso", 100, 30, null),
            new Inimigo_1.default("🐉 Dragão Ancião", 200, 50, espada),
        ];
        console.log(chalk_1.default.redBright(" 👹  Inimigos criados:"));
        inimigos.forEach((inimigo, index) => {
            console.log(`${index + 1}️⃣  ${chalk_1.default.redBright(inimigo.getNome())} ( ❤️  Vida: ${inimigo.getVida()}, 💪  Força: ${inimigo.getForca()})`);
        });
        console.log();
        yield (0, delay_1.delay)(1500);
        // Equipando uma arma no personagem principal
        console.log(chalk_1.default.yellowBright(`🔧  Equipando ${espada.getNome()} em ${jogador.getNome()}...`));
        jogador.equiparArma(espada);
        yield (0, delay_1.delay)(1500);
        // Simulação de interação entre os objetos
        console.log(chalk_1.default.blueBright("\n⚔️  Que a batalha comece! ⚔️\n"));
        yield (0, delay_1.delay)(1000);
        for (const inimigo of inimigos) {
            console.log(chalk_1.default.redBright(`🔥  Combate iniciado contra ${inimigo.getNome()}!`));
            yield (0, delay_1.delay)(1000);
            while (jogador.getVida() > 0 && inimigo.getVida() > 0) {
                console.log(chalk_1.default.cyan(`🎯 Turno de ${jogador.getNome()}:`));
                jogador.atacar(inimigo);
                if (inimigo.getVida() <= 0) {
                    console.log(chalk_1.default.greenBright(`💥  ${inimigo.getNome()} foi derrotado!`));
                    console.log(chalk_1.default.yellowBright("✨ Você ganhou +10 pontos de experiência!\n"));
                    break;
                }
                console.log(chalk_1.default.cyan(`🎯 Turno de ${inimigo.getNome()}:`));
                inimigo.comportamentoAleatorio(jogador);
                if (jogador.getVida() <= 0) {
                    console.log(chalk_1.default.redBright(`💀  ${jogador.getNome()} foi derrotado!`));
                    console.log(chalk_1.default.redBright("⚰️  Você foi derrotado. Fim de jogo."));
                    return;
                }
                yield (0, delay_1.delay)(1500);
            }
        }
        console.log(chalk_1.default.greenBright("\n🏆  Parabéns! Você venceu todos os inimigos e se tornou o maior herói do reino!"));
    });
}
montarCenario();
