document.addEventListener("DOMContentLoaded", async () => {
  await fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const race = Object.keys(data.message);
      const DOG_QNT = 10;

      for (let i = 0; i < DOG_QNT; i++) {
        fetchDogIMg(race[Math.floor(Math.random() * race.length)]);
      }
    });
});

function fetchDogIMg(name) {
  try {
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        const nameDog = document.createElement("p");
        nameDog.innerText = name;
        const img = document.createElement("img");
        img.src = data.message;
        const dogContainer = document
          .getElementById("dogContainer")
          dogContainer.appendChild(img );
          dogContainer.appendChild(nameDog)
      });
  } catch (error) {
    console.error("Erro" + error);
  }
}
