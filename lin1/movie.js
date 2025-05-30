fetch("https://koleji.coding-world.com/mvs/movies.php")
.then(response => response.json())
.then(data =>{

show(data);
hiddenepisod();


})
function show(data){
data.forEach(element => {
  let conteiner=  document.querySelector(".movie");
 let div= document.createElement("div");
 div.innerHTML=`
 <div class="img_con">
 <a href="movie2.html?id=${element.id}"><img class="img"src="${element.image}"></a>
 </div>
 <h2 class="title">${element.title}</h2>
 <p class="episode"> Episode : ${element.episode}</p>
 <p class="year"> ${element.year} - ${element.duration}</p>
 <button class="bigbutton" data-index=${element.id}> Details </button>

 `
 conteiner.appendChild(div);


 div.classList.add("div");



});
hiddenepisod();
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






