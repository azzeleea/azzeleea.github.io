const get = document.getElementById("get");

async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {
        method: "GET",
    });

    const json = await response.json();
    const results = json.results;

    results.forEach((e) => {
    let hasil = fetch(e.url, { method: "GET" })
    
        .then((res) => res.json())
        .then((res) => {
            let pokemon = document.getElementById("pokemon");
            let div = document.createElement("div");
            let A = document.createElement("p");
            A.innerHTML = `${res.id} : ${res.name}`;
            let img = document.createElement("img");
            img.src = `${res.sprites.front_default} `;
            let AA = document.createElement("p");
            AA.innerHTML = `type: ${res.types[0].type.name}`;
          
            div.append(A, img, AA);
            pokemon.append(div);
  
            if (res.types[0].type.name === "grass") {
                div.className = "grass";
            } 
            else if (res.types[0].type.name === "fire") {
                div.className = "fire";
            } 
            else if (res.types[0].type.name === "water") {
                div.className = "water";
            } 
            else if (res.types[0].type.name === "normal") {
                div.className = "normal";
            } 
            else if (res.types[0].type.name === "bug") {
                div.className = "bug";
            } 
            else if (res.types[0].type.name === "poison") {
                div.className = "poison";
            } 
            else if (res.types[0].type.name === "electric") {
                div.className = "electric";
            } 
            else if (res.types[0].type.name === "ground") {
                div.className = "ground";
            }
        });
    });
}