document.addEventListener('DOMContentLoaded', () => {

    let pokeButton = document.getElementById("poke-button");

    //API Pokemon:
    pokeButton.addEventListener("click", async () => {
        try {
            let pokeInputText = document.getElementById("pokemon").value;
        
            if (!pokeInputText)
                return alert("Campo de nome/id vazio!");

            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInputText}`);
            let data = await response.json();

            let pokeImage = document.getElementById("poke-img");
            pokeImage.src = data.sprites.front_default;

            let pokeSprites = document.getElementById("poke-sprite");
            pokeMoves.src = data.sprites.front_default;
        } catch (error) {
            console.log("Erro: " + error);
        }

    });

   
});