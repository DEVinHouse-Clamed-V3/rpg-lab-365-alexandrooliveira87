import chalk from "chalk";
import Arma from "./models/Arma";
import Personagem from "./models/Personagem";
import Inimigo from "./models/Inimigo";
import { delay } from "./utils/delay";

async function montarCenario() {
    console.clear();
    console.log(chalk.blueBright(" 🌌  Bem-vindo ao Jogo RPG Typescript! 🌌\n"));
    await delay(1000);

    console.log(chalk.yellowBright(" 🔧  Construindo seu Mapa...\n"));
    await delay(1500);

    // Criando armas
    const espada = new Arma(" ⚔️  Espada Longa", 50, "Uma espada feita de aço temperado, brilhando à luz da lua.");
    const machado = new Arma(" 🪓  Machado de Guerra", 40, "Um machado robusto, perfeito para desferir golpes brutais.");
    const arco = new Arma(" 🏹  Arco Longo", 30, "Um arco elegante, ideal para caçadores furtivos.");

    console.log(chalk.magentaBright("🛠️  Armas mágicas forjadas:"));
    console.log(`1️⃣ ${chalk.greenBright(espada.getNome())} - Dano: ${espada.getDano()}`);
    console.log(`2️⃣ ${chalk.greenBright(machado.getNome())} - Dano: ${machado.getDano()}`);
    console.log(`3️⃣ ${chalk.greenBright(arco.getNome())} - Dano: ${arco.getDano()}\n`);
    await delay(1500);

    // Criando o personagem principal
    const jogador = new Personagem("🦸 Pombo", 100, 20);
    console.log(
        chalk.cyanBright(
            `✨ Seu personagem principal: ${jogador.getNome()} ( ❤️  Vida: ${jogador.getVida()}, 💪  Força: ${jogador.getForca()})\n`
        )
    );
    await delay(1500);

    // Criando inimigos
    const inimigos = [
        new Inimigo("👾 Goblin Malicioso", 60, 15, arco),
        new Inimigo("💂 Rato Guerreiro", 80, 20, machado),
        new Inimigo("🧛 Vampiro Sombrio", 90, 25, null),
        new Inimigo("🐺 Lobisomem Furioso", 100, 30, null),
        new Inimigo("🐉 Dragão Ancião", 200, 50, espada),
    ];

    console.log(chalk.redBright(" 👹  Inimigos criados:"));
    inimigos.forEach((inimigo, index) => {
        console.log(
            `${index + 1}️⃣  ${chalk.redBright(inimigo.getNome())} ( ❤️  Vida: ${inimigo.getVida()}, 💪  Força: ${inimigo.getForca()})`
        );
    });
    console.log();
    await delay(1500);

    // Equipando uma arma no personagem principal
    console.log(chalk.yellowBright(`🔧  Equipando ${espada.getNome()} em ${jogador.getNome()}...`));
    jogador.equiparArma(espada);
    await delay(1500);

    // Simulação de interação entre os objetos
    console.log(chalk.blueBright("\n⚔️  Que a batalha comece! ⚔️\n"));
    await delay(1000);

    for (const inimigo of inimigos) {
        console.log(chalk.redBright(`🔥  Combate iniciado contra ${inimigo.getNome()}!`));
        await delay(1000);

        while (jogador.getVida() > 0 && inimigo.getVida() > 0) {
            console.log(chalk.cyan(`🎯 Turno de ${jogador.getNome()}:`));
            jogador.atacar(inimigo);

            if (inimigo.getVida() <= 0) {
                console.log(chalk.greenBright(`💥  ${inimigo.getNome()} foi derrotado!`));
                console.log(chalk.yellowBright("✨ Você ganhou +10 pontos de experiência!\n"));
                break;
            }

            console.log(chalk.cyan(`🎯 Turno de ${inimigo.getNome()}:`));
            inimigo.comportamentoAleatorio(jogador);

            if (jogador.getVida() <= 0) {
                console.log(chalk.redBright(`💀  ${jogador.getNome()} foi derrotado!`));
                console.log(chalk.redBright("⚰️  Você foi derrotado. Fim de jogo."));
                return;
            }

            await delay(1500);
        }
    }

    console.log(chalk.greenBright("\n🏆  Parabéns! Você venceu todos os inimigos e se tornou o maior herói do reino!"));
}

montarCenario();
