# Pokédex Web (Flask + PokéAPI)

Aplicação web em Python (Flask) com interface estilo Pokédex ("Gustavo.dex"). Busca um Pokémon pelo nome, ou navega pelos 1025 Pokémon com os botões anterior e próximo, e mostra a imagem oficial, a descrição, o número, os tipos e o HP. Os dados vêm da [PokéAPI](https://pokeapi.co).

## Funcionalidades
- Aparelho com botões **ON** e **OFF** e animação de inicialização
- Busca por nome (o texto é normalizado: maiúsculas e acentos não atrapalham)
- Navegação anterior e próximo pelos 1025 Pokémon
- Imagem oficial, descrição, número, tipos (com cor e ícone por tipo) e HP
- Animação de entrada e saída da imagem

## Como funciona
- `GET /` entrega a página (`templates/index.html`).
- `POST /buscar` recebe o campo de formulário `nome` e consulta a PokéAPI. Devolve JSON com `id`, `nome`, `tipo`, `descricao`, `imagem`, `hp` e `nivel`.
  - A descrição é o texto oficial da PokéAPI, em inglês.
  - O `nivel` é fixo em 100 (valor ilustrativo).
- Erros da API: nome vazio (400), Pokémon não encontrado (404) e falha interna ou da API externa (500).

## Tecnologias
Python 3 · Flask 3.0.3 · Requests 2.32.3 · HTML · CSS · JavaScript · Vercel

## Rodando localmente

```bash
pip install -r requirements.txt
python app.py
```

Abra http://127.0.0.1:5000 no navegador.

## Estrutura

```
app.py            # rotas Flask e integração com a PokéAPI
templates/        # página HTML
static/           # CSS e JavaScript
vercel.json       # configuração de deploy na Vercel
```

## Demo
Em breve.
