let clicked=false;
    document.getElementById("bu").addEventListener("click", function (){
        clicked = !clicked;
        if(clicked){
            document.getElementById("h1").textContent="HTML CSS";
            document.getElementById("h1").style.color="green";
        }
        else{
            document.getElementById("h1").textContent="JAVASCRIPT";
            document.getElementById("h1").style.color="red";
        }
       
        document.getElementById("h1").style.fontSize="50px";
        
     
    });
    document.querySelector(".add").addEventListener("click", function(){
        let newli= document.createElement("li");
        newli.className="box";
        document.querySelector(".parent").appendChild(newli);
        
    })
    document.querySelectorAll(".contimg").forEach( img=> { img.addEventListener("click", function(){
        document.querySelector(".big").src=this.src;
    });
});

const images = document.querySelectorAll(".contimg"); // Select all images
const bigImage = document.querySelector(".big"); // Main display image
let currentIndex = 0; // Track current image

// Function to update displayed image
function updateImage() {
    bigImage.src = images[currentIndex].src;
}

// Listen for keyboard events
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        // Move forward to the next image (loop if at end)
        currentIndex = (currentIndex + 1) % images.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        // Move backward to the previous image (loop if at start)
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    updateImage(); // Update displayed image
});

// Initialize first image
updateImage();

document.querySelector(".button_1").addEventListener("click", function(){
    document.querySelector(".button_notation").textContent="მონიშნულია";
});
document.querySelector(".button_2").addEventListener("click", function(){
    document.querySelector(".button_notation").textContent="გაუქმებულია";
});
setInterval(gettime,1000);
function gettime(){
let nowtime= new Date();
 let newYear = new Date("January 1, 2026 00:00:00");
 let difference=newYear-nowtime;
 document.querySelector(".days p").innerHTML=Math.floor(difference/(1000 *
 60* 60 *24));

 document.querySelector(".hours p").innerHTML=String(Math.floor((difference %(1000 *
 60* 60 *24))/(1000*60*60))).padStart(2,"0");
 document.querySelector(".minutes p").innerHTML=Math.floor((difference %(1000*60*60))/(1000*60));
 document.querySelector(".seconds p").innerHTML=Math.floor((difference %(1000*60))/1000);
}

function calendar(){
    let today= new Date();
    let mo=today.getMonth();
    let week=today.getDay();
    switch(mo){
        case 0: document.querySelector(".month").innerHTML="იანვარი"; break;
        case 1:  document.querySelector(".month").innerHTML="თებერვალი";break;
        case 2: document.querySelector(".month").innerHTML="მარტი";break;
        case 3: document.querySelector(".month").innerHTML="აპრილი";break;
        case 4: document.querySelector(".month").innerHTML="მაისი";break;
        case 5: document.querySelector(".month").innerHTML="ივნისი";break;
        case 6:  document.querySelector(".month").innerHTML="ივლისი";break;
        case 7:  document.querySelector(".month").innerHTML="აგვისტო";break;
        case 8: document.querySelector(".month").innerHTML="სექტემბერი";break;
        case 9: document.querySelector(".month").innerHTML="ოქტომბერი";break;
        case 10: document.querySelector(".month").innerHTML="ნოემბერი";break;
        case 11: document.querySelector(".month").innerHTML="დეკემბერი";break;
        default: document.querySelector(".month").innerHTML="დეკემბერი";break;


        
    }

    switch(week){
        case 0:  document.querySelector(".week").innerHTML="კვირა";break;
        case 1: document.querySelector(".week").innerHTML="ორშაბათი"; break;
        case 2:  document.querySelector(".week").innerHTML="სამშაბათი";break;
        case 3: document.querySelector(".week").innerHTML="ოთხშაბათი";break;
        case 4: document.querySelector(".week").innerHTML="ხუთშაბათი";break;
        case 5: document.querySelector(".week").innerHTML="პარასკევი";break;
        case 6: document.querySelector(".week").innerHTML="შაბათი";break;

        
    }
    document.querySelector(".date").innerHTML=today.getDate();
    document.querySelector(".year").innerHTML=today.getFullYear() + " year";

    
   
}
calendar();

function onsub(){
    event.preventDefault();
    let x=document.forms["fn"]["f"].value;
if(x==""){
    event.preventDefault();
    alert("name shouldn't be empty");
}
else alert("saved successfully");
}
document.querySelector(".changecolor").style.color = "white";

function colorgenerator(number){
  return Math.floor(Math.random()*number);
 };



let color= document.getElementById("color");
document.querySelector(".changecolor").addEventListener("click",function(){
    let rendomcolor=`rgb(${colorgenerator(255)}, ${colorgenerator(255)}, ${colorgenerator(255)})`;
color.style.backgroundColor=rendomcolor;
});
document.querySelector(".changecolor").addEventListener("keydown",function(){
    let rendomcolor=`rgb(${colorgenerator(255)}, ${colorgenerator(255)}, ${colorgenerator(255)})`;
color.style.backgroundColor=rendomcolor;
});
document.getElementById("color").parentNode.style.width="100%";
document.getElementById("color").parentNode.style.display="flex";
document.getElementById("color").parentNode.style.alignItems="center";
document.getElementById("color").parentNode.style.flexDirection="column";
document.getElementById("color").parentNode.style.gap="10px";


function rendcolor(){
  let color=`rgb(${colorgenerator(255)},${colorgenerator(255)},${colorgenerator(255)})`;
  return color;
 }


document.querySelector(".flex").addEventListener("click", (event)=>{
    event.target.style.backgroundColor=rendcolor();
 });

document.getElementById("reset-btn").addEventListener("click", function() {document.querySelectorAll(".flexchange").forEach(divs=>{divs.style.backgroundColor="white";})
 });


 //document.querySelector(".progresbar").addEventListener("click", function (){
 //   document.querySelector(".bar").style.backgroundColor="red";
 //   document.querySelector(".bar").style.width="100px";
//
//
 //});


 let bar = document.querySelector(".bar"); // Select the element with class "bar"
let width = 30; // Initial width in pixels
let interval;

function increaseWidth() {
    if (width >= 1800) { // Stop when width reaches 1970px
        clearInterval(interval); // Stop the interval
        interval = null; // Reset interval ID
    } else {
        width += 100; // Increase width by 10px
        bar.style.width = width + "px"; // Apply the new width
    }
};
document.querySelector(".progresbar").addEventListener("click", function (){
    if (!interval) { // Ensure only one interval runs
        interval = setInterval(increaseWidth, 1000);
    }
  
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let ntime=new Date(0);
let interval2=null;
function timeUpDate(){
    document.querySelector(".time_hour").textContent=String(ntime.getUTCHours()).padStart(2,"0");
    document.querySelector(".time_minute").textContent=String(ntime.getUTCMinutes()).padStart(2,"0");
    document.querySelector(".time_second").textContent=String(ntime.getUTCSeconds()).padStart(2,"0");

}
function timeRer(){
ntime.setSeconds(ntime.getSeconds()+1);
timeUpDate();
}
function startTimer(){
    if(!interval2){
       interval2= setInterval(timeRer,1000);
    }
}
function stopTimer(){
    clearInterval(interval2);
    interval2=null;
}
function rest(){
    stopTimer();
    ntime=new Date(0);
    timeUpDate();

}
function resium () {
    startTimer()
}
 document.querySelector(".start").addEventListener("click",startTimer);
 document.querySelector(".stop").addEventListener("click", stopTimer);
 document.querySelector(".reset").addEventListener("click", rest);
 document.querySelector(".resume").addEventListener("click",resium);




 window.addEventListener("scroll",function (){
    let scroltotop=this.document.querySelector(".scroltotop");
    if(window.scrollY>400){
        scroltotop.style.display="block";
    }
 });
 document.querySelector(".scroltotop").addEventListener("click",function (){
   window.scrollTo({top : 0, behavior:"smooth"});
 });



 let imgindex=0;
 let slider =document.querySelector(".slider2");
 let img2=document.querySelectorAll(".slider2 img");
let totalimges=img2.length;
let sliderwidth =document.querySelector(".imgslider").offsetWidth;
img2.forEach(img=> img.style.width=sliderwidth+ "px");

document.querySelector(".prev").addEventListener("click", function(){
    if(imgindex===0){
        imgindex= totalimges-1;
    }
    else imgindex =imgindex-1;
    imgslider();
 });
 document.querySelector(".next").addEventListener("click", function(){
    if(imgindex===totalimges-1){
        imgindex=0;
    }
    else imgindex = imgindex+1;
    imgslider();
 });

 function imgslider(){
    slider.style.transform=`translateX(${-imgindex *sliderwidth}px)`;
 }



 let index = 0;

let div3=document.querySelectorAll(".slider3 div");
let p1=document.querySelectorAll(".slider3 div p");
p1.forEach(p=> p.style.fontSize=`${p1[0].offsetWidth}px`);
let slider3=document.querySelector(".slider3");
let sw=document.querySelector(".slider-container2").offsetWidth;
if(sw<500){
div3.forEach(img =>img.style.width=`${sw/1}px`);
}
else if(sw>500 && sw<1000 )
{div3.forEach(img =>img.style.width=`${sw/2}px`);}
else {
    div3.forEach(img =>img.style.width=`${sw/4}px`);
}

let totalimg=(div3.length);


document.querySelector(".prev2").addEventListener("click",function (){
    if(index==0){
        index= totalimg-1;
    }
    else{ index=index-1;}
    move();
});
document.querySelector(".next2").addEventListener("click",function (){
    if((index> totalimg-4 && sw>1000) || (index> totalimg-2 && sw < 1000) ||(index> totalimg &&sw <500)  ){
        index = 0;
    }
    else{ index=index+1;}
    move();
});

function move() {
   if(sw>1000){
 slider3.style.transform = `translateX(${-index* sw/4}px)`;
   }
   else if(sw>500 && sw<1000){
    slider3.style.transform = `translateX(${-index * sw/2}px)`;

   }
   else     slider3.style.transform = `translateX(${-index * sw}px)`;

}     
