document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
		.then((response) => response.json())
		.then((data) => {
			const pokemonContainer =
				document.getElementById("pokemonContainer");
			console.log(data.results);
		});
});
