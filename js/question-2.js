

//Question 2


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGame() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);

        const facts = result.all;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            console.log(facts[i].tags.length);
            console.log(facts[i].rating);
            
            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">
            <h2>${facts[i].name}</h2>
            ${facts[i].tags.length}
            ${facts[i].rating}

        </div>`;
        }
    } catch (error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = displayError("An error unknown occurred :(");
    }
}

getGame();
