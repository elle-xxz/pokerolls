let pokemons = [];

async function carregarPokemons(){

    for(let i = 1; i <= 1025; i++){

        const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i}`
        );

        const dados = await resposta.json();

        pokemons.push({

            nome: dados.name,

            imagem:
            dados.sprites.other["official-artwork"].front_default,

            numero: dados.id

        });

    }

    console.log("Pokémon carregados:", pokemons.length);

}

carregarPokemons();
