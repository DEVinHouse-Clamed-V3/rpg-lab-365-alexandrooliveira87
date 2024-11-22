import Arma from "./models/Arma";
import Personagem from "./models/Personagem";
import Inimigo from "./models/Inimigo";

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.clear();
    console.log("🏹 Bem-vindo ao 🎮 RPG Console Adventure! 🏹\n");
    await delay(1000);

    console.log("💡 Preparando o cenário...\n");
    await delay(1500);

    // Criando armas
    const espada = new Arma("Espada Longa", 50, "Uma espada feita de aço temperado.");
    const machado = new Arma("Machado de Guerra", 40, "Um machado pesado e devastador.");

    // Criando personagens
    const jogador = new Personagem("🧙 Pombo", 100, 20);
    const inimigo = new Inimigo("👹 Dick Vigarista", 80, 15, machado);

    console.log("🎮 Personagens criados:");
    console.log(`✨ Jogador: ${jogador.getNome()} (❤️  Vida: ${jogador.getVida()}, 💪  Força: ${jogador.getForca()})`);
    console.log(`👹 Inimigo: ${inimigo.getNome()} (❤️  Vida: ${inimigo.getVida()}, 💪  Força: ${inimigo.getForca()})\n`);
    await delay(2000);

    // Equipando a arma no jogador
    console.log(`🛠️  Equipando ${espada.getNome()} no ${jogador.getNome()}...`);
    jogador.equiparArma(espada);
    console.log();
    await delay(1500);

    // Combate
    console.log("⚔️  O combate está prestes a começar... ⚔️\n");
    await delay(2000);
  
    let turno = 1;
    while (jogador.getVida() > 0 && inimigo.getVida() > 0) {
        console.log(`🔄 Turno ${turno}`);
        await delay(1000);

        // Jogador ataca
        console.log(`👤 ${jogador.getNome()} se prepara para atacar...`);
        jogador.atacar(inimigo);
        if (inimigo.getVida() <= 0) break;

        await delay(1500);

        // Inimigo decide sua ação
        console.log(`👹 ${inimigo.getNome()} está observando...`);
        inimigo.comportamentoAleatorio(jogador);
        if (jogador.getVida() <= 0) break;

        console.log(); // Espaço entre os turnos
        turno++;
        await delay(2000);
    }

    // Fim do combate
    console.log("\n🏁 Fim do Combate 🏁");
    await delay(1500);

    if (jogador.getVida() > 0) {
        console.log(`🎉 Vitória! ${jogador.getNome()} derrotou o terrível ${inimigo.getNome()}!`);
        console.log("💎 Você ganhou 100 pontos de experiência e um item raro! 🎁");
    } else {
        console.log(`💀 Derrota... ${inimigo.getNome()} aniquilou o valente ${jogador.getNome()}.`);
        console.log("⚰️ Você retornará mais forte na próxima vez...");
    }

    console.log("\n🕹️ Obrigado por jogar RPG Console Adventure! Até a próxima! 🕹️");
}

main();
