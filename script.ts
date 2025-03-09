const nav : HTMLElement | null =document.querySelector(".nav");
const icon : HTMLImageElement | null=document.querySelector(".nav .logo");
const tabs : NodeListOf<HTMLElement>=document.querySelectorAll(".span");

console.log(tabs.length);
window.addEventListener('scroll', ()=>{
    if(window.scrollY < 30){
        nav? nav.style.backgroundColor="transparent" : console.log("nav is null");
        icon? icon.src="./images/bakery-light-1.png" : console.log("icon is null");
        tabs.forEach((hr)=>{
            hr.style.color="white";
        })
        
        
    }
    else if(window.scrollY>=30){
        console.log("scrolling");
        nav? nav.style.backgroundColor="white" : console.log("nav is null");
        icon? icon.src="./images/bakery-color.png" : console.log("icon is null");
        tabs.forEach((hr)=>{
            hr.style.color="black";
        });
    }

        
});