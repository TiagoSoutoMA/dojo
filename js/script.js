const div = document.getElementById("pokemonContainer").addEventListener("dom", async() => {
    const url = fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(response => 
        response.json().catch(error => console.error("Erro indetificado"))
    );
})

