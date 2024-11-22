"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Arma_1 = __importDefault(require("./models/Arma"));
function main() {
    try {
        // Criando uma nova arma
        const espada = new Arma_1.default("Espada Longa", 50, "Uma espada feita de aço temperado, ideal para combates corpo a corpo.");
        console.log(`************************************************************************************************`);
        console.log(`>>>>>  Arma criada: [${espada.getNome()}] `);
        console.log(`>>>>>  Descrição: [${espada.getDescricao()}]`);
        console.log(`>>>>>  Dano inicial: [${espada.getDano()}] `);
        console.log(`*************************************************************************************************`);
        // Atualizando o dano da arma
        espada.setDano(70);
        console.log(`Novo dano da arma: ${espada.getDano()}`);
        // Testando erro para dano negativo
        // espada.setDano(-10); // Descomente para ver o erro em ação
    }
    catch (error) {
        // Tratando o erro com segurança
        if (error instanceof Error) {
            console.error("Erro:", error.message);
        }
        else {
            console.error("Erro desconhecido:", error);
        }
    }
}
main();
