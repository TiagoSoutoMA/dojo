document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
		.then((response) => response.json())
		.then((data) => {
			const pokemonContainer =
				document.getElementById("pokemonContainer");
			data.results.forEach(pokemon => {
                fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                    const pokemonDiv = document.createElement("div");
                    pokemonContainer.appendChild(pokemonDiv);
                    const image = document.createElement("img");
                    image.src = data.sprites.front_default;
                    pokemonDiv.appendChild(image);
                })
                
            });
		});
});
