function getPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const pokeInfo = document.getElementById('poke-info');
    const pokeImg = document.getElementById('poke-img');
    const pokeName = document.getElementById('poke-name');
    const pokeId = document.getElementById('poke-id');
    const pokeType = document.getElementById('poke-type');
    const pokeAbilities = document.getElementById('poke-abilities');
    const pokeSpecies = document.getElementById('poke-species');

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(response => response.json())
      .then(data => {
        pokeImg.src = data.sprites.front_default;
        pokeName.textContent = data.name;
        pokeId.textContent = data.id;
        pokeType.textContent = `${data.types[0].type.name}`;
        pokeAbilities.textContent = `${data.abilities[0].ability.name}`;
        pokeSpecies.textContent = `${data.species.name}`;

        pokeInfo.style.display = 'block';
      })
      .catch(error => {
        console.log('Error:', error);
      });
}