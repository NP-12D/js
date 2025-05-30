


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

  document.querySelectorAll(".icon").forEach(icon=>
      {
       icon.style.display="none";
     }
     )


                 document.querySelectorAll(".items>div").forEach
        (
            (div,index)=>
                 { div.querySelector("button.x").addEventListener("click", 
                    function(){ div.remove(); 
                       
                        let cart = JSON.parse(localStorage.getItem("item")) || []; // Retrieve saved items
                                  
                        cart.splice(index,1);
                       
                        localStorage.setItem("item",JSON.stringify(cart));
       sum()

  

                    })
                 })
        });
   
    }
    displayCart();

document.querySelector(".clear").addEventListener("click", function(){
    localStorage.clear();
    window.location.reload();
})


function sum(){
                 let sum = 0;
document.querySelectorAll(".items>div").forEach(div => {
    let price = div.querySelector(".price");
    if (price) {
        sum += parseFloat(price.textContent);
    }
});

document.querySelector(".sum").innerHTML = `${sum}`;
}
sum()