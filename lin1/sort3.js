


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
            (div)=>
                 { div.querySelector("button.x").addEventListener("click", 
                    function(){ div.remove(); 
                        let only=div.querySelector(".only");
                        let cart = JSON.parse(localStorage.getItem("item")) || []; // Retrieve saved items
                                    let itemId = only.dataset.index; 
                        cart.splice(itemId,1);
                        alert("oppa"); 
                        localStorage.setItem("item",JSON.stringify(cart));
                    })
                 })
    }
    displayCart();

document.querySelector(".clear").addEventListener("click", function(){
    localStorage.clear();
})
