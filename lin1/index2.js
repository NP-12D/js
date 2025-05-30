document.querySelector(".leos").addEventListener("click",function(){
   let h= document.querySelectorAll(".img_div");
   h.forEach(div => div.style.display = "flex");
   h.forEach( div =>{
    if (div.querySelector("h2").innerHTML !== "Leos") {
    
        div.style.display="none";
    }
   })
   
}
)

document.querySelector(".gclass").addEventListener("click", function (){

    let d=document.querySelectorAll(".img_div");
    d.forEach(div=>div.style.display="flex");
    d.forEach(div=> {
       if( div.querySelector("h2").innerHTML !== "Black G wagon"){
        div.style.display="none";
       }
    })
})
document.querySelector(".all").addEventListener("click", function(){
    let h2=document.querySelectorAll(".img_div");
    h2.forEach(div => div.style.display = "flex");
  
   
})
document.querySelector(".glc65").addEventListener("click", function(){
    let h2=document.querySelectorAll(".img_div");
    h2.forEach(div => div.style.display = "flex");
    h2.forEach(div=>{
        if(div.querySelector("h2").innerHTML !="GLC65"){
            div.style.display="none";
        }
    })
   
})
document.querySelector(".gt55").addEventListener("click", function(){
    let h2=document.querySelectorAll(".img_div");
    h2.forEach(div => div.style.display = "flex");
    h2.forEach(div=>{
        if(div.querySelector("h2").innerHTML !="GT55"){
            div.style.display="none";
        }
    })
    
})

//let h2=document.querySelectorAll(".img_div");
//h2.forEach(div=>{
//    div.addEventListener("focus", function (){
//     div.style.cssText="width:500px; height:400px; display : fixed;"
//    })
//    div.addEventListener("blur", function (){
//        div.style.cssText="width:200px; height:300px; display : flex;"
//       })
//   
//})
