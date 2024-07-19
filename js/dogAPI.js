document.addEventListener('DOMContentLoaded', async() => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {data.message; console.log(data.message)})
    
})