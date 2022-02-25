
let currentPage = 0;
const resultsPerPage = 10;
let maxPageNum = 0;
const textBox = document.querySelector("#pageTextBox");

function pokemonList(pageNumber) {
    return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${resultsPerPage}&offset=${pageNumber*resultsPerPage}`)
        .then(response => response.json())
        .then(data => {
            resolve(data);
            maxPageNum = Math.ceil(data.count / resultsPerPage);
            currentPage = pageNumber;
            textBox.value = pageNumber + 1;
        }
        );
    })
}


function renderPage(pageNumber){
    pokemonList(pageNumber).then((data) => {
        const pokedex = document.querySelector("#pokedex");
        pokedex.innerHTML = "";
        data.results.forEach((pokemon) => {
            const item = document.createElement('li');
    
            const detailButton = document.createElement('button');
            detailButton.innerText = pokemon.name;
            item.appendChild(detailButton);
            pokedex.appendChild(item);
            const details = document.createElement('div');
            item.appendChild(details);
            let detailsVisible = false;
            detailButton.addEventListener('click', (event) => {
                event.preventDefault();
                detailsVisible = !detailsVisible;
                details.style.display = detailsVisible? "block" : "none";
                if(details.innerHTML === ""){
                    getPokemonDetails(pokemon)
                    .then((pokemonDetails) => {
                        details.innerHTML = `
                        <div><img src="${pokemonDetails.sprites.front_default}"></div>
                        <div><b>weight: </b> ${pokemonDetails.weight}</div>
                        <div><b>height: </b> ${pokemonDetails.height}</div>
                        `;
                        pokemonDetails.types.forEach((type) => { 
                            details.innerHTML += `
                            <div><b>type: </b> ${type.type.name}</div>`
                        })
                    })
    
                }
    
            })
    
    
        })
    });
}




function getPokemonDetails(pokemon){
    return new Promise((resolve, reject) => {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(data => resolve(data));   
    })

}

renderPage(0);



const previousButton = document.querySelector("#pPage");
const nextButton = document.querySelector("#nPage");
const pageButton = document.querySelector("#inputPage")

previousButton.addEventListener('click', (event) =>{
    event.preventDefault();
    if (currentPage === 0)
        return;

    currentPage--;
    renderPage(currentPage);
})

nextButton.addEventListener('click', (event) =>{
    event.preventDefault();
    if (currentPage === maxPageNum-1)
    {
        return;
    }

    currentPage++;
    renderPage(currentPage);
})

pageButton.addEventListener('click', (event) => {
    event.preventDefault();
    let pageNumber = parseInt(textBox.value) -1;
    if (pageNumber >= 0 && pageNumber <= maxPageNum)
    {
        renderPage(pageNumber);
    }
})
