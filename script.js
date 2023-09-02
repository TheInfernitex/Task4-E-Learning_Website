const header=document.querySelector("header");
window.addEventListener('scroll',()=>{
    header.classList.toggle("moved", window.scrollY>0);
});

let a=document.querySelectorAll("ul li a");
let b=document.querySelectorAll(".contact2 a");
for(let i=0;i<4;i++)
{
    
a[i].addEventListener('click',()=>
{
    setTimeout(()=>{  
        window.scrollBy(0,-60);
    },30);
});

b[i].addEventListener('click',()=>{
    setTimeout(()=>{  
        window.scrollBy(0,-80);
    },30);
});
}

const navBar=document.getElementById("navBar");
const sideBar=document.querySelector(".sideBar");
const sideImg=document.querySelector("#sideImg");
sideBar.addEventListener('click',()=>{
    console.log("clicked!");
    if(navBar.style.visibility=="visible")
    navBar.style.visibility="hidden";
    else navBar.style.visibility="visible";
    if(sideImg.src=="assets/images/sideBar.png")
sideImg.src = "assets/images/sideBarAlt.png";
else sideImg.src = "assets/images/sideBar.png";
});

let links=document.querySelectorAll("#navBar a");

for(let i=0;i<=4;i++)
{
    links[i].addEventListener('click',()=>{
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    })


}