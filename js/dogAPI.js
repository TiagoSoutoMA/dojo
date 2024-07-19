document.addEventListener('DOMContentLoaded', async() => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        const race = Object.keys(data.message);
        const raceRandom = Math.floor(Math.random() * race.length);
        fetchDogIMg(race[raceRandom]);
    })
})

function fetchDogIMg(name){
    try{
        fetch(`https://dog.ceo/api/breed/${name}/images/random`)
            .then(response => response.json())
            .then(data => {
                
            })
    }catch(error){
        console.error("Erro" + error)
    }
}