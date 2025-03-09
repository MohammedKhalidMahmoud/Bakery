const nav=document.querySelector(".nav");
const icon=document.querySelector(".nav .logo");
const tabs=document.querySelectorAll(".sp");

window.addEventListener('scroll', function(){
    if(window.scrollY < 30){
        nav.style.backgroundColor="transparent";
        icon.src="./images/bakery-light-1.png";
        tabs.forEach((hr)=>{
            hr.style.color="white";
        })
        
        
    }
    else if(window.scrollY>=30){
        console.log("scrolling");
        nav.style.backgroundColor="white";
        icon.src="./images/bakery-color.png";
        tabs.forEach((hr)=>{
            hr.style.color="black";
        });
    }

        
});