document.querySelector(".leos").addEventListener("click",function(){
   let h= document.querySelectorAll(".img_div");
   h.forEach(div => div.style.display = "block");
   h.forEach( div =>{
    if (div.querySelector("h2").innerHTML !== "Leos") {
    
        div.style.display="none";
    }
   })
   
}
)

document.querySelector(".gclass").addEventListener("click", function(){
    let h2=document.querySelectorAll(".img_div");
    h2.forEach(div => div.style.display = "block");
    h2.forEach(div=>{
        if(div.querySelector("h2").innerHTML !="Black G wagon"){
            div.style.display="none";
        }
    })
   
})
document.querySelector(".all").addEventListener("click", function(){
    let h2=document.querySelectorAll(".img_div");
    h2.forEach(div => div.style.display = "block");
  
   
})
document.querySelector(".glc65").addEventListener("click", function(){
    let h2=document.querySelectorAll(".img_div");
    h2.forEach(div => div.style.display = "block");
    h2.forEach(div=>{
        if(div.querySelector("h2").innerHTML !="GLC65"){
            div.style.display="none";
        }
    })
   
})
document.querySelector(".gt55").addEventListener("click", function(){
    let h2=document.querySelectorAll(".img_div");
    h2.forEach(div => div.style.display = "block");
    h2.forEach(div=>{
        if(div.querySelector("h2").innerHTML !="GT55"){
            div.style.display="none";
        }
    })
    
})