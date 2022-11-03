const hiddenNav =document.querySelector(".hiddenNav")
const hamMenu=document.querySelector(".ham-menu")

hamMenu.addEventListener("click",displayHiddenMenu)
function displayHiddenMenu(){
    hiddenNav.classList.toggle("active")
}

const observerOptns= {
    root:null,
    threshold:0,
    rootMargin:"0px 0px -150px 0px"
}
function cb(entries){
    console.log(entries)
    entries.forEach((entry)=>{
        console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add("in-view")
        observer.unobserve(entry.target)
    }
    });
 }
 const observer= new IntersectionObserver(cb,observerOptns);

 window.addEventListener(("DOMContentLoaded"),(event)=>{
   const sectn3=document.querySelector(".sectn3")
   console.log(sectn3)
    // const headings=Array.from(document.getElementsByClassName("headings"))
    // for(let heading of headings){
    //     observer.observe(heading);
    // }
    observer.observe(sectn3)
 })