


function displayCart() {
        let cart = JSON.parse(localStorage.getItem("item")) || []; // Retrieve saved items
        let cartContainer = document.querySelector(".items");

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach(itemHTML => {
            let itemDiv = document.createElement("div");
            itemHTML += `<button class="x">X</button>`
            itemDiv.innerHTML = itemHTML; // Insert the full saved div
            cartContainer.appendChild(itemDiv);
        });
        document.querySelectorAll(".items>div").forEach
        (
            div=>
                 { div.querySelector("button.x").addEventListener("click", 
                    function(){ div.remove(); 
                        alert("oppa"); })
                 })
    }
    displayCart();

document.querySelector(".clear").addEventListener("click", function(){
    localStorage.clear();
})
