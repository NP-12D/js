

    let id=new URLSearchParams(location.search);
let divid=id.get('id');
fetch(`https://koleji.coding-world.com/mvs/movie.php?id=${divid}`)
.then(response=> response.json())
.then(element=>{
document.querySelector(".hiddenmovie").innerHTML=`
<img class="img" src="${element.image}" alt="${element.title}">
<div>
      <h2 class="title">${element.title}</h2>
      <p class="episode">Episode: ${element.episode || ""}</p>
      <p class="year">${element.year} - ${element.duration}</p>
      <p class="category">Category: ${element.category}</p>
      <p class="genre">Genre: ${element.genre.join(", ")}</p>
      </div>
      <b`
document.querySelector(".img").style.cssText="width:50svw;heigth:100svh;";
document.querySelector(".hiddenmovie").style.cssText="height:100svh;display:flex; gap:20px";
document.querySelector(".hiddenmovie div").style.cssText="display:flex;flex-direction:column;font-size:24px";



})

  
