document.addEventListener("DOMContentLoaded", async () => {
  await fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const race = Object.keys(data.message);
      const DOG_QNT = 10;

      for (let i = 0; i < DOG_QNT; i++) {
        fetchDogIMg(race[i]);
      }
    });
});

function fetchDogIMg(name) {
  try {
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = data.message;
        const dogContainer = document
          .getElementById("dogContainer")
          .appendChild(img);
      });
  } catch (error) {
    console.error("Erro" + error);
  }
}
