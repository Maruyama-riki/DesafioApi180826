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

            document.getElementById("poke-nome").textContent = data.name;
            document.getElementById("poke-id").textContent = data.id;
            document.getElementById("poke-tipos").textContent = data.types.map(t => t.type.name).join(", ");
            document.getElementById("poke-altura").textContent = (data.height / 10) + " m";
            document.getElementById("poke-peso").textContent = (data.weight / 10) + " kg";
            document.getElementById("poke-forms").textContent = data.forms.map(f => f.name).join(", ");
            document.getElementById("poke-abilities").textContent = data.abilities.map(a => a.ability.name).join(", ");
            document.getElementById("poke-sprites").textContent = data.abilities.map(a => a.ability.name).join(", ");
            let sprites = [
    data.sprites.front_default,
    data.sprites.back_default,
    data.sprites.front_shiny,
    data.sprites.back_shiny
];

let galeria = document.getElementById("poke-galeria"); // uma <div id="poke-galeria"></div> no HTML
galeria.innerHTML = ""; // limpa antes de adicionar de novo

sprites.forEach(url => {
    if (url) {
        let img = document.createElement("img");
        img.src = url;
        img.style.width = "80px";
        galeria.appendChild(img);
    }
});


        } catch (error) {
            console.log("Erro: " + error);
        }

    });

   
});