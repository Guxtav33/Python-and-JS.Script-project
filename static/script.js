document.addEventListener("DOMContentLoaded", () => {
  const onBtn = document.querySelector(".on-btn");
  const offBtn = document.querySelector(".off-btn");
  const leftBtn = document.getElementById("prevBtn");
  const rightBtn = document.getElementById("nextBtn");
  const mainScreen = document.getElementById("mainScreen");
  const bootText = document.getElementById("bootText");
  const pokemonImage = document.getElementById("pokemonImage");
  const descBox = document.getElementById("descBox");
  const infoBar = document.getElementById("infoBar");
  const searchBtn = document.getElementById("searchBtn");
  const pokemonName = document.getElementById("pokemonName");

  let ligado = false;
  let animando = false;
  let pokemonAtual = 1;
  const maxPokemon = 1025;

  mainScreen.classList.add("screen-off");
  document.body.classList.remove("on");

  function desligarSistema() {
    ligado = false;
    mainScreen.classList.remove("screen-on");
    mainScreen.classList.add("screen-off");
    bootText.style.display = "block";
    bootText.textContent = "SYSTEM OFFLINE";
    pokemonImage.classList.add("hidden");
    descBox.innerHTML = "";
    infoBar.innerHTML = "";
    document.body.classList.remove("on");
  }

  async function buscarPokemonPorNomeOuId(nomeOuId) {
    if (!ligado || animando) return;
    animando = true;

    // Animação de saída
    pokemonImage.classList.add("hologram-exit");
    await new Promise((res) => setTimeout(res, 400));

    bootText.style.display = "block";
    bootText.textContent = "SEARCHING...";
    pokemonImage.classList.add("hidden");
    descBox.innerHTML = "";
    infoBar.innerHTML = "";

    try {
      const nomeLimpo = nomeOuId
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const formData = new FormData();
      formData.append("nome", nomeLimpo);

      const resposta = await fetch("/buscar", {
        method: "POST",
        body: formData,
      });

      const data = await resposta.json();

      if (resposta.ok) {
        pokemonImage.src = data.imagem;
        descBox.innerHTML = `<p><strong>${data.nome}</strong><br>${data.descricao}</p>`;

        const tipoHTML = data.tipo
          .map(
            (t) =>
              `<span class="pokemon-tipo" style="background-color:${corTipo(
                t
              )}">${iconeTipo(t)} ${t.toUpperCase()}</span>`
          )
          .join(" ");

        infoBar.innerHTML = `
          <span>#${String(data.id).padStart(3, "0")}</span>
          <span>${tipoHTML}</span>
          <span>HP: ${data.hp ?? "??"} | Level: ${data.nivel ?? 100}</span>
        `;

        bootText.style.display = "none";
        pokemonImage.classList.remove("hidden", "hologram-exit");
        pokemonImage.classList.add("hologram-enter");
        setTimeout(() => pokemonImage.classList.remove("hologram-enter"), 600);
        pokemonAtual = data.id;
      } else {
        descBox.innerHTML = `<p>${data.erro}</p>`;
        bootText.style.display = "none";
        pokemonImage.classList.add("hidden");
      }
    } catch (error) {
      console.error(error);
      descBox.innerHTML = "<p>Erro ao buscar Pokémon.</p>";
      bootText.style.display = "none";
      pokemonImage.classList.add("hidden");
    }

    animando = false;
  }

  // Botão ON
  onBtn.addEventListener("click", async () => {
    if (ligado) return;
    ligado = true;
    document.body.classList.add("on");
    mainScreen.classList.remove("screen-off");
    mainScreen.classList.add("screen-on");
    bootText.style.display = "block";
    bootText.textContent = "BOOTING SYSTEM...";
    setTimeout(() => (bootText.textContent = "LOADING DATABASE..."), 1000);
    setTimeout(() => (bootText.textContent = "INITIALIZING INTERFACE..."), 2000);
    setTimeout(async () => {
      bootText.textContent = "LOADING #001...";
      await buscarPokemonPorNomeOuId(1);
    }, 3000);
  });

  offBtn.addEventListener("click", desligarSistema);
  searchBtn.addEventListener("click", () => buscarPokemonPorNomeOuId(pokemonName.value));

  leftBtn.addEventListener("click", () => {
    if (!ligado || animando) return;
    pokemonAtual = pokemonAtual > 1 ? pokemonAtual - 1 : maxPokemon;
    buscarPokemonPorNomeOuId(pokemonAtual);
  });

  rightBtn.addEventListener("click", () => {
    if (!ligado || animando) return;
    pokemonAtual = pokemonAtual < maxPokemon ? pokemonAtual + 1 : 1;
    buscarPokemonPorNomeOuId(pokemonAtual);
  });

  // Funções auxiliares
  function corTipo(type) {
    const colors = {
      fire: "#EE8130",
      water: "#6390F0",
      grass: "#7AC74C",
      electric: "#F7D02C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD",
      normal: "#A8A77A",
    };
    return colors[type.toLowerCase()] || "#999";
  }

  function iconeTipo(type) {
    const icons = {
      fire: "🔥",
      water: "💧",
      grass: "🌿",
      electric: "⚡",
      ice: "❄️",
      fighting: "🥊",
      poison: "☠️",
      ground: "🌍",
      flying: "🌪️",
      psychic: "🔮",
      bug: "🐞",
      rock: "🪨",
      ghost: "👻",
      dragon: "🐉",
      dark: "🌑",
      steel: "⚙️",
      fairy: "✨",
      normal: "⭕",
    };
    return icons[type.toLowerCase()] || "❓";
  }
});
