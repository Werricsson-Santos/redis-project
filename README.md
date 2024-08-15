# Redis Project

Este projeto compara o desempenho de consultas no PostgreSQL com e sem o uso de cache do Redis. O objetivo é demonstrar como o Redis pode melhorar a performance das consultas ao PostgreSQL.

## Sumário

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

O Redis Project visa comparar a performance de consultas ao PostgreSQL com e sem a utilização de cache no Redis. O projeto inclui scripts para medir o tempo de resposta das consultas e configurar um ambiente Docker com PostgreSQL e Redis.

## Funcionalidades

- **Performance Measurement:** Comparação do tempo de resposta de consultas ao PostgreSQL com e sem cache no Redis.
- **Docker Setup:** Configuração de contêineres Docker para PostgreSQL e Redis.
- **Benchmark Scripts:** Scripts para realizar consultas e medir o desempenho.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- [Docker](https://www.docker.com/get-started): Para executar PostgreSQL e Redis em contêineres.
- [Docker Compose](https://docs.docker.com/compose/): Para gerenciar múltiplos contêineres Docker.
- [Node.js](https://nodejs.org/): Para executar scripts de benchmark.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Werricsson-Santos/redis-project.git

2. **Navegue para o diretório do projeto e instale as dependências:**

   ```bash
   cd redis-project
   npm install

3. **Suba os contêineres Docker:**

    O projeto inclui um arquivo docker-compose.yml para configurar e iniciar os contêineres do PostgreSQL e Redis. Execute:
   ```bash
   docker-compose up


## Uso

1. **Navegue para o diretório que contêm os códigos:**

   ```bash
   cd code
   
2. **Rode o código para popular o banco:**

   ```bash
   node insert

3. **Rode o código para efetuar as consultas e medir o tempo:**

   ```bash
   node query
