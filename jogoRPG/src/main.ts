import chalk from "chalk";
import Arma from "./models/Arma";
import Personagem from "./models/Personagem";
import Inimigo from "./models/Inimigo";
import Chefe from "./models/Chefe";
import Mapa from "./models/Mapa";
import { delay } from "./utils/delay";

async function montarCenario() {
    console.clear();
    console.log(chalk.blueBright(" 🌌  Bem-vindo ao Jogo RPG Typescript! 🌌\n"));
    await delay(1000);

    console.log(chalk.yellowBright(" 🔧  Sorteando o mapa do jogo...\n"));
    await delay(1500);

    // Sorteando o mapa
    const mapa = Mapa.sortearMapa();
    console.log(chalk.greenBright(` 🗺️  Mapa sorteado:  ${mapa.getNome()}`));
    console.log(chalk.cyanBright(` 📜  Descrição:  ${mapa.getDescricao()}`));
    console.log(chalk.magentaBright(` ⚔️  Dificuldade:  ${mapa.getDificuldade()}\n`));
    await delay(2000);

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
    ];

    console.log(chalk.redBright(" 👹  Inimigos criados:"));
    inimigos.forEach((inimigo, index) => {
        console.log(
            `${index + 1}️⃣  ${chalk.redBright(inimigo.getNome())} ( ❤️  Vida: ${inimigo.getVida()}, 💪  Força: ${inimigo.getForca()})`
        );
    });
    console.log();
    await delay(1500);

    // Criando o chefe
    const chefe = new Chefe(
        "🐉 Dragão Ancião",
        200,
        50,
        "Explosão de Lava"
    );

    console.log(chalk.yellowBright("🌋  Um chefe poderoso aguarda no final:"));
    console.log(
        `${chalk.redBright(chefe.getNome())} ( ❤️  Vida: ${chefe.getVida()}, 💪  Força: ${chefe.getForca()}, 🌟 Habilidade: ${chefe.getHabilidadeEspecial()})\n`
    );
    await delay(1500);

    // Equipando uma arma no personagem principal
    console.log(chalk.yellowBright(`🔧  Equipando ${espada.getNome()} em ${jogador.getNome()}...`));
    jogador.equiparArma(espada);
    await delay(1500);

    // Simulação de combate
    console.log(chalk.blueBright("\n⚔️  Que a batalha comece no mapa sorteado! ⚔️\n"));
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

    // Combate contra o chefe
    console.log(chalk.redBright(`🔥  O desafio final contra ${chefe.getNome()} começa agora! 🔥\n`));
    await delay(1500);

    while (jogador.getVida() > 0 && chefe.getVida() > 0) {
        console.log(chalk.cyan(`🎯 Turno de ${jogador.getNome()}:`));
        jogador.atacar(chefe);

        if (chefe.getVida() <= 0) {
            console.log(chalk.greenBright(`💥  ${chefe.getNome()} foi derrotado!`));
            chefe.comportamentoEspecialAntesDeMorrer(jogador);
            break;
        }

        console.log(chalk.cyan(`🎯 Turno de ${chefe.getNome()}:`));
        chefe.atacar(jogador);

        if (jogador.getVida() <= 0) {
            console.log(chalk.redBright(`💀  ${jogador.getNome()} foi derrotado!`));
            console.log(chalk.redBright("⚰️  Você foi derrotado. Fim de jogo."));
            return;
        }

        await delay(1500);
    }

    console.log(chalk.greenBright(`\n🏆  Parabéns! Você venceu no mapa ${mapa.getNome()} e se tornou o maior herói do reino!`));
}

montarCenario();
