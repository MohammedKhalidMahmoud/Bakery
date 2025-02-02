const list=document.querySelector(".ll");
const icon=document.querySelector("ul .logo");
const tabs=document.querySelectorAll(".sp");

window.addEventListener('scroll', function(){
    if(window.scrollY < 30){
        list.style.backgroundColor="transparent";
        icon.src="./images/bakery-light-1.png";
        tabs.forEach((hr)=>{
            hr.style.color="white";
        })
        
        
    }
    else if(this.window.scrollY>=30){
        console.log("scrolling");
        list.style.backgroundColor="white";
        icon.src="./images/bakery-color.png";
        tabs.forEach((hr)=>{
            hr.style.color="black";
        });
    }

        
});