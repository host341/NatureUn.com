const nav_menu=document.getElementById("nav_menu");
const nav_list = document.querySelector(".nav_list");
nav_menu.addEventListener("click",()=>{
    nav_menu.classList.toggle("active");
    nav_list.classList.toggle("active");
})

document.querySelectorAll(".nav_links").forEach(
    n=> n.addEventListener("click",()=>{
        nav_menu.classList.remove("active");
        nav_list.classList.remove("active")
    })
)

// ========Events for cards==========


const block_btn=document.querySelector(".block_btn");
const block_p=document.querySelector(".block_p");
const block_split=document.querySelector(".block_split");
const cross=document.querySelector("#cross");

block_btn.addEventListener("click",()=>{
    block_btn.classList.toggle("active");
    block_p.classList.toggle("active");
    block_split.classList.toggle("active");
    cross.classList.toggle("active");

})

let remov=document.querySelector("#cross");

remov.addEventListener("click",()=>{
    block_split.classList.remove("active");
    block_btn.classList.toggle("active");
    cross.classList.remove("active");
    block_p.classList.remove("active");
})


// 2=========


const block_btn2=document.querySelector(".block_btn2");
const block_p2=document.querySelector(".block_p2");
const block_split2=document.querySelector(".block_split2");
const cross2=document.querySelector("#cross2");

block_btn2.addEventListener("click",()=>{
    block_btn2.classList.toggle("active");
    block_p2.classList.toggle("active");
    block_split2.classList.toggle("active");
    cross2.classList.toggle("active");
    
})

let remov2=document.querySelector("#cross2");

remov2.addEventListener("click",()=>{
    block_split2.classList.remove("active");
    block_btn2.classList.toggle("active");
    cross2.classList.remove("active");
    block_p2.classList.remove("active");
})

// 3=========
const block_btn3=document.querySelector(".block_btn3");
const block_p3=document.querySelector(".block_p3");
const block_split3=document.querySelector(".block_split3");
const cross3=document.querySelector("#cross3");

block_btn3.addEventListener("click",()=>{
    block_btn3.classList.toggle("active");
    block_p3.classList.toggle("active");
    block_split3.classList.toggle("active");
    cross3.classList.toggle("active");
    
})

let remov3=document.querySelector("#cross3");

remov3.addEventListener("click",()=>{
    block_split3.classList.remove("active");
    block_btn3.classList.toggle("active");
    cross3.classList.remove("active");
    block_p3.classList.remove("active");
})

// 4===========


const block_btn4=document.querySelector(".block_btn4");
const block_p4=document.querySelector(".block_p4");
const block_split4=document.querySelector(".block_split4");
const cross4=document.querySelector("#cross4");

block_btn4.addEventListener("click",()=>{
    block_btn4.classList.toggle("active");
    block_p4.classList.toggle("active");
    block_split4.classList.toggle("active");
    cross4.classList.toggle("active");
    
})


let remov4=document.querySelector("#cross4");

remov4.addEventListener("click",()=>{
    block_split4.classList.remove("active");
    block_btn4.classList.toggle("active");
    cross4.classList.remove("active");
    block_p4.classList.remove("active");
})

// blog======
function blog(){
    alert("Currently,Blogs Not Avalible.");
}

// pop==================
const pop_btn=document.querySelector("#pop_btn");
const pop=document.querySelector(".pop");

pop_btn.addEventListener("click",()=>{
    pop_btn.classList.toggle("active");
    pop.classList.toggle("active");
    console.log("hi");
})