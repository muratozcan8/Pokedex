const pokeContainer = document.querySelector('.poke-container');

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff ",
};

const pokeCount = 151;

const initPokemon = async() => {
    for(i = 1; i <= pokeCount; i++){
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    createPokemonBox(data);
}

const createPokemonBox = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    let sid = pokemon.id.toString();
    const weight = pokemon.weight;
    const type = pokemon.types[0].type.name;
    const color = colors[type];

    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('poke-box');
    pokemonEl.style.backgroundColor = `${color}`;

    pokemonEl.innerHTML = `
        <a href="detail.html" id="poke-a" onclick="return check(${sid})">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} image">
            <h4 class="poke-name">${name}</h4>
            <p class="poke-id" id="poke-id-info">#${id}</p>
            <p class="poke-type">${type}</p>
        </a>
    `;

    pokeContainer.appendChild(pokemonEl);
}

function check(idx)
{
    localStorage.setItem('id', idx);
    let selectedId = localStorage.getItem('id');
    console.log(selectedId);
}



initPokemon();