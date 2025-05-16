

let value1="";
document.querySelector(".textin").addEventListener("input", event=>{
     value1=event.target.value;
})
document.querySelector(".plus").addEventListener("click", function (){
   
   if(value1){
    let newli =document.createElement("li");
   newli.innerHTML=value1;
let list=document.querySelector(".todolist.flex");
list.appendChild(newli); 
newli.setAttribute("class","todolist_item");
 savetolocal();
document.querySelector(".textin").value="";
value1="";
let y = document.querySelectorAll(".todolist.flex li").length; 
document.querySelector(".length").innerHTML = "You have " + y + " pending tasks";
   }
  
});
document.querySelector(".plus1").addEventListener("click", function(){
   let li= document.querySelectorAll(".todolist.flex li");
   li.forEach(li1=> {
    li1.remove();
   })
   document.querySelector(".length").innerHTML = "You have 0 pending tasks";
localStorage.removeItem("todo");
})



function savetolocal(){
    let list_todo=document.querySelector(".todolist.flex").innerHTML;
    localStorage.setItem("todo",list_todo);
}
document.addEventListener("DOMContentLoaded",function(){
    let seved=localStorage.getItem("todo");
if(seved){
    document.querySelector(".todolist.flex").innerHTML=seved;
}
let y = document.querySelectorAll(".todolist.flex li").length; 
document.querySelector(".length").innerHTML = "You have " + y + " pending tasks";
});

