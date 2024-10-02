async function getpizza() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();

    const result = data.recipes.map(function(pizzaAp) {
        return `
        <div class='pizzaAp'>
            <img src="${pizzaAp.image_url}" alt="${pizzaAp.title}">
            <h2>${pizzaAp.title}</h2>
        </div>
        `;
    }).join('');

    document.querySelector(".pizza-container").innerHTML = result;
}

getpizza();
