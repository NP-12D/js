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
