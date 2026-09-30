# API - Support Tickets

Documentação base: https://efficient-sloth-d85.notion.site/API-de-ticket-de-suporte-25654d26e5704936a5da1b3083f03c27

API para gerenciamento de tickets de suporte técnico. A aplicação permite **criar**, **atualizar**, **listar** e **deletar** os tickets com **filtros** estáticos e dinamicos, além de adiciona a solução final do problema.

## Tecnologias

- Node.js
- JavaScript com ES Modules
- Módulo nativo `node:http` para o servidor HTTP
- Módulo nativo `node:fs/promises` para persistência dos dados
- UUID para gerar identificadores únicos dos tickets

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/guilhermexpc/rs-fs-support-tickets.git
```

<details>

<summary> Guia de Instalação</summary>

2. Acesse a pasta do projeto:

   ```bash
   cd rs-fs-support-tickets
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

A API estará disponível em `http://localhost:3333`.

 </details>
 <br>

## Funcionalidades

- Criar um ticket de suporte técnico
- Listar todos os tickets
- Filtrar tickets pelo status
- Atualizar as informações de um ticket
- Fechar um ticket informando a solução aplicada
- Remover um ticket

## Modelo de ticket

Cada ticket possui os seguintes campos:

| Campo         | Tipo     | Descrição                                   |
| ------------- | -------- | ------------------------------------------- |
| `id`          | `string` | Identificador único gerado pela API         |
| `equipment`   | `string` | Equipamento que apresenta o problema        |
| `description` | `string` | Descrição do problema                       |
| `user_name`   | `string` | Nome do solicitante                         |
| `status`      | `string` | Status do ticket: `open` ou `closed`        |
| `solution`    | `string` | Solução aplicada ao problema, quando houver |
| `created_at`  | `string` | Data de criação do ticket                   |
| `updated_at`  | `string` | Data da última atualização                  |

## Endpoints

### Criar ticket (POST)

<details>
<summary> Rota Post </summary>

```http
POST /tickets
Content-Type: application/json
```

```bash
curl --request POST \
  --url http://localhost:3333/tickets \
  --header 'Content-Type: application/json' \
  --data '{
	"equipment": "Computador",
	"description": "Formatação",
	"user_name": "Carlos Onildo"
}'
```

</details>

### Listar tickets

<details>
<summary> Rota Get </summary>

```http
/tickets
```

```bash
curl --request GET \
  --url http://localhost:3333/tickets
```

</details>

### Filtrar tickets por status

<details>
<summary> Rota Get </summary>

Use o parâmetro de consulta `status` com os valores `open` ou `closed`:

```http
/tickets?status=open
```

```bash
curl --request GET \
  --url 'http://localhost:3333/tickets?status=open'
```

</details>

### Fechar ticket

<details>
<summary> Rota Patch </summary>

```http
PATCH /tickets/:id/close
Content-Type: application/json
```

```bash
curl --request PATCH \
  --url http://localhost:3333/tickets/41f9d1ce-edbd-433b-a4d5-f1cdd1191f9b/close \
  --header 'Content-Type: application/json' \
  --data '{
	"solution": "Computador Formatado"
}'
```

O status do ticket é alterado para `closed`.

</details>

### Atualizar ticket

<details>
<summary> Rota Put </summary>

```http
/tickets/:id
```

```bash
curl --request PUT \
  --url http://localhost:3333/tickets/6092571f-4689-4dca-8658-8fee2572b2ac \
  --header 'Content-Type: application/json' \
  --data '{
	"equipment": "Joystick",
	"description": "Botão X não funciona"
}'
```

</details>

### Remover ticket

<details>
<summary> Rota Delete </summary>

```http
DELETE /tickets/:id
```

```bash
curl --request DELETE \
  --url http://localhost:3333/tickets/654af27a-4110-4347-bf61-4b0e10369c30
```

</details>

## Estrutura do projeto

```text
src/
├── server.js                         # Inicialização do servidor HTTP
├── database/
│   ├── database.js                    # Operações de persistência
│   └── database.json                  # Dados dos tickets
├── handlers/tickets/
│   ├── create.js                      # Criação de tickets
│   ├── index.js                       # Listagem e filtros
│   ├── remove.js                      # Remoção de tickets
│   ├── update.js                      # Atualização de tickets
│   └── updateStatus.js                # Fechamento de tickets
├── middlewares/
│   ├── jsonHandler.js                 # Leitura do corpo JSON
│   └── routeHandler.js                # Resolução das rotas
├── routes/
│   ├── index.js                       # Registro das rotas
│   └── tickets.js                     # Rotas de tickets
└── utils/
		├── extractQueryParams.js          # Leitura dos parâmetros de consulta
		└── parseRoutePath.js              # Conversão das rotas em expressões regulares
```

## Script disponível

```bash
npm run dev
```

Inicia o servidor em modo de desenvolvimento usando o `node --watch`.
