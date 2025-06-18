fetch('info.json')
    .then(response => response.json())
    .then(data => {
        show(data);
        color2(data);
      
        addClickEvents();
      document.querySelector("#sortSelect").addEventListener("change", function(){
       let conteiner = document.querySelector(".shop");
       conteiner.innerHTML="";
       let selectedvalue=this.value;
       let sortcon;
       if(selectedvalue=="priceAsc"){
sortcon=[...data].sort((a,b)=>a.price-b.price);
       }
       else if(selectedvalue=="priceDesc"){
        sortcon=[...data].sort((a,b)=>b.price-a.price);
       }
       else if(selectedvalue=="nameAsc"){
        sortcon=[...data].sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
       }                                                                                                                                
       else if(selectedvalue=="nameDesc"){
        sortcon=[...data].sort((a,b)=>b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
       }                                                                                                                                
show(sortcon);
 
      });
    });

let conteiner = document.querySelector(".shop");

function show(prodact) {
    prodact.forEach(elem => {
        let item = document.createElement("div");
        item.innerHTML = `
            <img class="img"src="${elem.image}">
            <div class="only" data-index=${elem.id}>
                <h2 class="name">${elem.name}</h2>
                <p class="price" data-info="${parseFloat(elem.price)}">${elem.price}$</p>
                <p class="category">${elem.category}</p>
            
            </div>
                <img class="icon" src="./images/cart.png">
        `;
        conteiner.appendChild(item);
    
    });
    color2();
        addClickEvents();
        addToCart() ;
    
}

function color2() {
    document.querySelectorAll(".only").forEach(item => {
        let categoryElem = item.querySelector(".category"); // ✅ Fixed selector
        if (categoryElem && categoryElem.innerText.trim() === "jeans") {
            categoryElem.style.backgroundColor = "rgb(80, 146, 146)";
        } else if (categoryElem && categoryElem.innerText.trim() === "t-shirt") {
            categoryElem.style.backgroundColor = "rgb(79, 130, 163)";
        } else if (categoryElem && categoryElem.innerText.trim() === "shoes") {
            categoryElem.style.backgroundColor = "rgb(200, 180, 89)";
        }
    });
}

function addClickEvents() {
    document.querySelectorAll(".shop div").forEach(div => {
        div.addEventListener("click", function () {
            let productId = this.dataset.index;

            fetch("info.json")
                .then(response => response.json())
                .then(data => {
                    let selectedProduct = data.find(product => product.id == productId);
                    if (selectedProduct) {
                        let item1 = document.querySelector(".hidden");
                        let hiddenContainer = document.querySelector(".hidden_con"); // ✅ Fixed selection

                        item1.innerHTML = `
                            <img class="img" src="${selectedProduct.image}"><a href="sort2.html?id=${selectedProduct.id}">
                            <h2>${selectedProduct.name}</h2>
                            <p>Price: ${selectedProduct.price}$</p>
                            <p>Category: ${selectedProduct.category}</p>
                            
                            <p class="color">click for more</p></a>
                            <button class="x">x</button>
                        `
                        item1.style.display = "flex";
                        hiddenContainer.style.display = "flex";
                        

                        // ✅ Fixed: Add `.x` event listener after button creation
                        item1.querySelector(".x").addEventListener("click", function () {
                            item1.style.display = "none";
                            hiddenContainer.style.display = "none";
                        });
                    }
                });



        });
    });
}
                
function addToCart() {
 document.querySelectorAll(".shop>div").forEach(div => {
     div.querySelector(".icon").addEventListener("click", function() {
        let item = JSON.parse(localStorage.getItem("item")) || []; 
        if (!Array.isArray(item)) {
            item = []; // Ensure it's an array
        }
        item.unshift(div.innerHTML);
        localStorage.setItem("item", JSON.stringify(item));
  
        console.log(localStorage.getItem("item"));

     });
 });



}
