//Write code to fetch data for 10 Pokemon
//Use a JavaScript loop to display the names and URLs of your 10 Pokemon on the page
//Add an event listener to each Pokemon to listen for a click

async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      displayPokemonList(data.results);
    } catch (error) {
      console.error(error.message);
    }
}
function displayPokemonList (data){
    for (const poke of data){
        const div = document.createElement('div');
        div.innerHTML = `<a href="${poke.url}">${poke.name}</a>`
        document.body.appendChild(div);
    }
}
getData();