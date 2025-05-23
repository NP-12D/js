let elementid = new URLSearchParams(location.search);
let elid = Number(elementid.get("id"));

fetch("info.json")
    .then(response => response.json())
    .then(data => {
        let curent = data.find(elementi => elementi.id == elid); // ✅ Fixed `find` function
        
        if (curent) {
            let div = document.querySelector(".fullpage");
            div.innerHTML = `
                <img class="img" src="${curent.image}">
                <h2>${curent.name}</h2>
                <p>Price: ${curent.price}$</p>
                <p>Category: ${curent.category}</p>
                <button class="x">x</button>`
        }
    })
    .catch(error => console.error("Error fetching JSON:", error));
