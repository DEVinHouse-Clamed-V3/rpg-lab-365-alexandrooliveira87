[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/HzYlWno6)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17283961&assignment_repo_type=AssignmentRepo)

# Jogo RPG TypeScript

## 📖 Descrição

Este é um jogo de RPG em terminal, desenvolvido em **TypeScript** com foco em conceitos de **POO** (Programação Orientada a Objetos). O jogo apresenta mapas aleatórios, inimigos desafiadores e um chefe final com habilidades especiais, proporcionando uma experiência dinâmica e divertida.

## 🚀 Funcionalidades

- **Sistema de combate por turnos**:
  - Ataques com chances de falha.
  - Inimigos com comportamento aleatório.
  - Chefe final com ataques mais fortes e habilidades especiais.

- **Mapas aleatórios**:
  - Cada jogo ocorre em um mapa sorteado, com características únicas.

- **Personagens e equipamentos**:
  - Personagem principal com armas equipáveis.
  - Inimigos e chefe final desafiadores.

## 🛠️ Estrutura do Projeto


src/
├── models/
│   ├── Arma.ts           # Representa as armas do jogo.
│   ├── Personagem.ts     # Base para o personagem principal e inimigos.
│   ├── Inimigo.ts        # Classe para os inimigos comuns.
│   ├── Chefe.ts          # Classe para o chefe final, com habilidades exclusivas.
│   ├── Mapa.ts           # Classe para gerenciar os mapas do jogo.
├── utils/
│   ├── delay.ts          # Função para criar delays entre ações no terminal.
├── main.ts               # Arquivo principal do jogo.


README.md
markdown
Copiar código
# Jogo RPG TypeScript

## 📖 Descrição

Este é um jogo de RPG em terminal, desenvolvido em **TypeScript** com foco em conceitos de **POO** (Programação Orientada a Objetos). O jogo apresenta mapas aleatórios, inimigos desafiadores e um chefe final com habilidades especiais, proporcionando uma experiência dinâmica e divertida.

## 🚀 Funcionalidades

- **Sistema de combate por turnos**:
  - Ataques com chances de falha.
  - Inimigos com comportamento aleatório.
  - Chefe final com ataques mais fortes e habilidades especiais.

- **Mapas aleatórios**:
  - Cada jogo ocorre em um mapa sorteado, com características únicas.

- **Personagens e equipamentos**:
  - Personagem principal com armas equipáveis.
  - Inimigos e chefe final desafiadores.

## 🛠️ Estrutura do Projeto

```plaintext
src/
├── models/
│   ├── Arma.ts           # Representa as armas do jogo.
│   ├── Personagem.ts     # Base para o personagem principal e inimigos.
│   ├── Inimigo.ts        # Classe para os inimigos comuns.
│   ├── Chefe.ts          # Classe para o chefe final, com habilidades exclusivas.
│   ├── Mapa.ts           # Classe para gerenciar os mapas do jogo.
├── utils/
│   ├── delay.ts          # Função para criar delays entre ações no terminal.
├── main.ts               # Arquivo principal do jogo.

## Como Jogar

Pré-requisitos

Node.js instalado (versão 14 ou superior).
Gerenciador de pacotes como npm ou yarn.

##Passo a passo
#1 - Clone o repositório:

git clone https://github.com/seu-usuario/jogo-rpg-typescript.git

cd jogo-rpg-typescript

#2 - Instale as dependências:

npm install

#3 - Compile o TypeScript:

npx tsc

#4 - Execute o jogo:

npx ts-node src/main.ts

## Regras do Jogo

Mapa Sorteado: Um mapa aleatório é selecionado antes de iniciar o jogo.

#Combate por Turnos:

O jogador e os inimigos se alternam nos ataques.
Cada ataque tem chance de falhar.
Chefe Final: O chefe é mais forte, causa dano dobrado e pode usar uma habilidade especial ao ser derrotado.
Vitória: Derrote todos os inimigos e o chefe para vencer!

# Conceitos Utilizados

TypeScript: Tipagem estática e código seguro.
Programação Orientada a Objetos (POO):
Herança: A classe Chefe herda de Inimigo.
Encapsulamento: Métodos e atributos protegidos ou privados.
Polimorfismo: Métodos sobrescritos, como atacar.

# Funcionalidades Futuras

Sistema de níveis para o personagem principal.
Itens consumíveis para restaurar vida.
Mais mapas e inimigos com habilidades especiais.

# Contribuições

Sinta-se à vontade para contribuir com melhorias ou novas ideias! Faça um fork do projeto, crie uma nova branch e envie um pull request.

# Desenvolvedor

Alexandro Oliveira
GitHub: https://github.com/alexandrooliveira87
LinkedIn: https://www.linkedin.com/in/eng-alexandrooliveira/