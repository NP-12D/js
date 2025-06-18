function displayCart() {
        let cart = JSON.parse(localStorage.getItem("item")) || []; // Retrieve saved items
        let cartContainer = document.querySelector(".items");

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach(itemHTML => {
            let itemDiv = document.createElement("div");
            itemHTML += `<button class="x">X</button>
           <div class="cuntity">
            <button class="plus">+</button>
            <p class="num">1</p>
            <button class="minus">-</button></div>`
            itemDiv.innerHTML = itemHTML; // Insert the full saved div
            cartContainer.appendChild(itemDiv);

            

  document.querySelectorAll(".icon").forEach(icon=>
      {
       icon.style.display="none";
     }
     )

function removitem(){
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
               }
                 removitem();
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
    let count = div.querySelector(".num");
 
        if (price && count) {
            let priceValue = parseFloat(price.textContent);
            let countValue = parseFloat(count.textContent); // Ensure it's an integer
            sum += priceValue * countValue; // Multiply price by quantity
        }
        document.querySelector(".sum").textContent = sum;
});


}
sum()


document.querySelectorAll(".cuntity").forEach(container => {
    let numElement = container.querySelector(".num");

    container.querySelector(".plus").addEventListener("click", () => {
        let value = parseFloat(numElement.textContent);
        numElement.textContent = value + 1;
        sum();
    });

    container.querySelector(".minus").addEventListener("click", () => {
        let value = parseFloat(numElement.textContent);
         numElement.textContent = value - 1;
        if (value > 1) {
            numElement.textContent = value - 1;
             sum();
        }
       
       
         
 else if(value==0){
    removitem();}
       
    });
});
