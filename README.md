# API de Busca de CEP

Esta é uma API desenvolvida para buscar informações de CEP de serviços externos e armazenar essas informações em um banco de dados local. A API utiliza o framework NestJS e a biblioteca Prisma para interagir com o banco de dados.

## Funcionalidades

- Busca informações de CEP de serviços externos.
- Armazena as informações de CEP no banco de dados local.
- Verifica a existência do CEP no banco de dados antes de inserir novos dados.
- Retorna os detalhes do CEP em formato JSON.

## Como Usar

### Pré-requisitos

- Node.js (versão 18.17.1)
- Banco de Dados Local (configurado no Prisma)

### Instalação

1. Clone este repositório:
```bash
git clone https://github.com/Bljexe/api-cep.git
```
2. Instale as dependências:
```bash
cd api_cep/
npm install
```

3. Configure o banco de dados no arquivo `.env`:
```js
DATABASE_URL=// URL do seu banco de dados
```

4. Execute o comando para rodar as migrations e instalar o banco:
```bash
npx prisma migrate dev
```
4. Inicie a aplicação:
```bash
npm run start:dev
```

### Uso da API

1. Faça uma requisição GET para buscar informações de um CEP:
```bash
curl -X GET http://localhost:3000/cep/83413372
```

2. A API retornará informações detalhadas sobre o CEP em formato JSON:

```json
{
  "cep": "83413372",
  "logradouro": "Rua Exemplo",
  "bairro": "Bairro Exemplo",
  "localidade": "Cidade Exemplo",
  "uf": "EX"
}
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar esta API.