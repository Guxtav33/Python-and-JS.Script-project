# 📘 Pokédex Interativa

Uma Pokédex interativa inspirada no universo Pokémon, desenvolvida com **Flask (Python)** no back-end e **HTML, CSS e JavaScript** no front-end.  
O projeto consome dados da **PokeAPI** para exibir informações completas sobre qualquer Pokémon, com uma interface animada e efeitos de "ligar/desligar" no estilo retrô.

---

## 🚀 Funcionalidades

- 🔌 **Sistema de ligar/desligar:** animações simulam o boot e desligamento da Pokédex.  
- 🔍 **Busca por Pokémon:** permite pesquisar por nome ou ID (ex: “pikachu” ou “25”).  
- ⬅️➡️ **Navegação entre Pokémons:** botões de seta permitem navegar pelo catálogo.  
- 📊 **Exibição de informações:** mostra nome, tipo, HP, descrição e imagem oficial.  
- 🌈 **Cores dinâmicas por tipo:** o tipo do Pokémon muda de cor automaticamente.  
- 🧠 **Efeitos visuais:** animações de “holograma” ao trocar ou buscar Pokémons.  
- ⚙️ **Consumo de API em tempo real:** busca dados diretamente da [PokeAPI](https://pokeapi.co/).  

---

## 🧩 Tecnologias Utilizadas

### 💻 **Front-End**
- **HTML5:** estrutura principal da interface da Pokédex.  
- **CSS3:** estilização completa, com efeitos visuais, animações e layout responsivo.  
- **JavaScript (Vanilla):** responsável por toda a lógica da interface, animações e comunicação com o servidor Flask via `fetch()`.

### 🐍 **Back-End**
- **Flask (Python):** framework leve usado para criar o servidor web.  
- **Requests:** biblioteca Python usada para consumir a PokeAPI e obter os dados dos Pokémons.  

---

## 🧠 Estrutura do Projeto
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📁 projeto-pokedex/
├── static/
│ ├── style.css # Estilos visuais da Pokédex
│ └── script.js # Lógica e animações em JavaScript
├── templates/
│ └── index.html # Estrutura HTML da interface
├── app.py # Servidor Flask e integração com PokeAPI


---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seuusuario/projeto-pokedex.git
cd projeto-pokedex
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2️⃣ Criar e ativar um ambiente virtual (opcional, mas recomendado)
python -m venv venv
venv\Scripts\activate     # Windows
source venv/bin/activate  # Linux/Mac
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3️⃣ Instalar as dependências
pip install flask requests
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4️⃣ Executar o servidor Flask
python app.py

(exemplo)
O servidor iniciará em:
👉 http://127.0.0.1:5000/
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🧩 Explicação dos Principais Arquivos
🐍 app.py (Back-End com Flask)

Cria o servidor web e define duas rotas principais:

/ → Renderiza o HTML da Pokédex.

/buscar → Recebe requisições com o nome ou ID do Pokémon e retorna os dados em JSON.

Usa a PokeAPI para buscar:

Nome, ID, tipos, HP, imagem e descrição do Pokémon.

Retorna um JSON formatado para o front-end exibir os dados corretamente.

💡 script.js (Front-End e Lógica)

Controla o estado da Pokédex:

ligado: define se o sistema está ativo ou não.

animando: evita múltiplas buscas simultâneas.

Gerencia os botões de controle:

ON/OFF: liga ou desliga o sistema.

Prev/Next: muda o Pokémon atual.

Search: busca o Pokémon digitado no campo de entrada.

Função buscarPokemonPorNomeOuId() faz uma requisição fetch("/buscar") para o Flask e exibe os dados obtidos.

Inclui animações holográficas ao trocar o Pokémon e efeitos de "boot" simulando inicialização do sistema.

🎨 style.css (Design e Animações)

Reproduz o visual de uma Pokédex real:

Bordas arredondadas, botões físicos e tela principal animada.

Usa transições de brilho para o efeito de ligar/desligar (.screen-on / .screen-off).

Define as animações holográficas:

@keyframes hologramIn e @keyframes hologramOut.

Personaliza cores conforme o tipo do Pokémon (fire, water, grass, etc.).

Utiliza fontes futuristas e efeitos de sombra para reforçar o estilo tecnológico.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🧪 Exemplo de Uso

Clique no botão ON → a Pokédex "liga" com animações de inicialização.

Após o boot, o primeiro Pokémon (#001 - Bulbasaur) é carregado.

Use as setas ⟵ / ⟶ para navegar entre os Pokémons.

Digite o nome ou ID de um Pokémon e pressione Search para buscá-lo.

Clique em OFF para desligar a Pokédex com o efeito visual.

🔧 APIs e Recursos Utilizados

PokeAPI: https://pokeapi.co/

Usada para obter:

/pokemon/{id ou nome} → dados básicos (tipo, stats, imagem).

/pokemon-species/{id} → descrição (flavor text).

📱 Interface (Resumo)
Elemento	Função
mainScreen	Tela principal da Pokédex (exibe imagem e informações).
bootText	Mensagens de inicialização e status do sistema.
pokemonImage	Exibe a imagem oficial do Pokémon.
descBox	Mostra a descrição do Pokémon.
infoBar	Exibe o ID, tipo e status (HP, nível).
onBtn / offBtn	Liga e desliga a Pokédex.
prevBtn / nextBtn	Navegação entre Pokémons.
searchBtn / pokemonName	Busca manual de Pokémon.
💡 Possíveis Melhorias Futuras

🔈 Adicionar sons de boot e seleção.

🧭 Adicionar busca por região (Kanto, Johto, etc.).

💾 Salvar histórico de Pokémons pesquisados.

📱 Tornar a Pokédex totalmente responsiva para celulares.

👨‍💻 Autor

Gustavo Neves Castro
📍 Projeto criado para estudos e prática de desenvolvimento web full-stack com Python + JavaScript + Html + CSS .

💬 Contato: 11 959497034
💬 Gmail: guxtavo33@gmail.com
  

🧾 Licença

Este projeto é de uso livre para fins educacionais.
Baseado em dados públicos da PokeAPI


Media de tempo = foram 1 e meio com assistencia de IA.
.



