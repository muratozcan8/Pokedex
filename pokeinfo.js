const pokeInfo = document.querySelector('.poke-info');
const pokeName = document.querySelector('.name-title');

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

const initPokemonCard = async() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('id')}`;
    let res = await fetch(url);
    let data = await res.json();
    pokemonInfo(data);
}

const pokemonInfo = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const weight = pokemon.weight;
    const height = pokemon.height;
    const type = pokemon.types[0].type.name;
    const ability = pokemon.abilities[0].ability.name;
    const color = colors[type];

    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('poke-card');
    pokemonEl.style.backgroundColor = `${color}`;

    pokeName.innerHTML = name;

    pokemonEl.innerHTML = `
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} image"> <hr>
        <p class="poke-id">ID : ${id}</p> <hr>
        <p class="poke-height">Height : ${height} Meters</p> <hr>
        <p class="poke-weight">Weight : ${weight} Kg</p> <hr>
        <p class="poke-ability">Ability : ${ability}</p> <hr>
        <p class="poke-type">Type : ${type}</p>
    `;

    pokeInfo.appendChild(pokemonEl);
}

initPokemonCard();