// =======================
// GIROS INICIAIS
// =======================

let giros = 10;

const botao = document.getElementById("girar");
const textoGiros = document.getElementById("giros");

const carta = document.getElementById("carta");
const emoji = document.getElementById("emoji");
const nomePokemon = document.getElementById("pokemon");
const raridadeTexto = document.getElementById("raridade");

const colecaoLista = document.getElementById("colecaoLista");

// =======================
// COLEÇÃO
// =======================

let colecao = [];

// =======================
// SORTEIO
// =======================

botao.addEventListener("click", () => {

    if (giros <= 0) {

        alert("Você não possui mais giros!");
        return;

    }

    giros--;
    textoGiros.textContent = giros;

    // Escolhe a raridade pela porcentagem
const numero = Math.random() * 100;

let raridadeEscolhida;

if (numero < 60) {

    raridadeEscolhida = "Comum";

} else if (numero < 85) {

    raridadeEscolhida = "Incomum";

} else if (numero < 95) {

    raridadeEscolhida = "Raro";

} else if (numero < 99) {

    raridadeEscolhida = "Épico";

} else {

    raridadeEscolhida = "Lendário";

}

// Filtra apenas os Pokémon da raridade sorteada
const lista = pokemons.filter(pokemon => pokemon.raridade === raridadeEscolhida);

// Escolhe um Pokémon dessa lista
const sorteado = lista[Math.floor(Math.random() * lista.length)];

    // Atualiza a carta
    emoji.textContent = sorteado.emoji;
    nomePokemon.textContent = sorteado.nome;
    raridadeTexto.textContent = sorteado.raridade;

    // Remove as cores anteriores
    carta.className = "carta";

    // Adiciona a cor da nova raridade
    carta.classList.add(sorteado.classe);

    // Adiciona à coleção
    colecao.push(sorteado);

    atualizarColecao();

});

// =======================
// MOSTRAR COLEÇÃO
// =======================

function atualizarColecao(){

    colecaoLista.innerHTML = "";

    colecao.forEach((pokemon)=>{

        const item = document.createElement("li");

        item.textContent =
        `${pokemon.emoji} ${pokemon.nome} - ${pokemon.raridade}`;

        colecaoLista.appendChild(item);

    });

}
