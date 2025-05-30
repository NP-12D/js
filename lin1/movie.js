fetch("https://koleji.coding-world.com/mvs/movies.php")
.then(response => response.json())
.then(data =>{

show(data);
hiddenepisod();
 gridviwe()


})
function show(data){
data.forEach(element => {
  let conteiner=  document.querySelector(".movie");
 let div= document.createElement("div");
 div.innerHTML=`
 <div class="img_text">
 <div class="img_con">
 <a href="movie2.html?id=${element.id}"><img class="img"src="${element.image}"></a>
 </div>
 <div class="text">
 <h2 class="title">${element.title}</h2>
 <p class="episode"> Episode : ${element.episode}</p>
 <p class="year"> ${element.year} - ${element.duration}</p>
 </div></div>
 <button class="bigbutton" data-index=${element.id}> Details </button>

 `
 conteiner.appendChild(div);


 div.classList.add("div");



});
hiddenepisod();
 gridviwe()
}
function hiddenepisod(){
 let title =document.querySelectorAll(".div");
title.forEach(ele=>{
if(ele.querySelector(".title").innerHTML!=="Breaking Bad"){
  ele.querySelector(".episode").style.display="none";
}})










document.querySelectorAll(".bigbutton").forEach(ele=>{
        ele.addEventListener("click",function(){fetch(`https://koleji.coding-world.com/mvs/movie.php?id=${ele.dataset.index}`)
.then(response=> response.json()
).then(element=>{
document.querySelector(".hiddenmovie").innerHTML=`
<div class="img_con">
 <img class="img"src="${element.image}">
 </div>
 <h2 class="title">${element.title}</h2>
 <p class="episode"> Episode : ${element.episode}</p>
 <p class="year"> ${element.year} - ${element.duration}</p>

 <button class="x" data-index=${element.id}> X </button>
`
document.querySelector(".x").addEventListener("click",function(){
 document.querySelector(".hiddenmovie").style.display="none";
   document.querySelector(".hiddenmoviecon").style.display="none";
   
})
})
   document.querySelector(".hiddenmovie").style.display="flex";
   document.querySelector(".hiddenmoviecon").style.display="flex";
   
})})

}
function gridviwe(){

document.querySelector(".grid2").addEventListener("click",function(){
  document.querySelectorAll(".div").forEach(div=>{
div.style.cssText = "width:80%; height:80px;flex-direction: row; justify-content: space-between";
div.parentElement.cssText = `display :flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    flex-direction: column;
    `;
  })
  document.querySelectorAll(".img").forEach(img=>{
    img.style.cssText = "width:80px; height:80px;";
})
  document.querySelectorAll(".img_con").forEach(img=>{
    img.style.cssText = "width:80px; height:80px;";
})
  document.querySelectorAll(".bigbutton").forEach(img=>{
    img.style.cssText = "width:fit-content; height:50px; ";
})
  document.querySelectorAll(".text").forEach(img=>{
    img.style.cssText = "width:fit-content; height:80px; ";
})
  document.querySelectorAll(".img_text").forEach(img=>{
    img.style.cssText = " flex-direction: row;";
})

})}

document.querySelector(".grid1").addEventListener("click",function(){window.location.reload()})





