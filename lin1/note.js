function save(){
    let n=document.querySelector(".note").value;
    localStorage.setItem("note",n);

}
document.querySelector(".home").addEventListener("click",function (){
    localStorage.clear();
});
document.querySelector(".done").addEventListener("click",
save);
document.addEventListener("DOMContentLoaded",function(){
    let a=localStorage.getItem("note");
    if (a) { 
        document.querySelector(".note").value = a;
    }
  
})
document.querySelector(".note").addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
});

document.querySelector(".them").addEventListener("click", light);
function light(){
    document.body.classList.toggle("light");
    document.querySelector(".note").classList.toggle("light");
    document.querySelectorAll("button").forEach(b=>{b.classList.toggle("light");});
    document.querySelector(".header").classList.toggle("borderbpttom");
    localStorage.setItem("them",document.body.classList.contains("light")?"light":"");}

document.addEventListener("DOMContentLoaded",function(){
    let t=localStorage.getItem("them");
    if(t==="light"){
light();

    }
})