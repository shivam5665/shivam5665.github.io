// let navName = document.querySelectorAll(".nav-name");
// let navIcon = document.querySelectorAll('.nav-link');



// for(icon of navIcon){

//     icon.addEventListener('mouseover',function(e){

//        e.target.nextElementSibling.classList.add('show');

//     });
     
// }



// for(icon of navIcon){

//     icon.addEventListener('mouseout',function(e){

//        e.target.nextElementSibling.classList.remove('show');
       
//     });
     
// }

// document.querySelector("#resume-link-1").addEventListener("click", ()=>{
//     window.open(
//       "https://drive.google.com/file/d/1rECL7KJFC1-2hGxOBOBvwORNaAp_T0aj/view?usp=sharing"
//     );
// })

function resumeDownload(){

    window.open(
        "https://drive.google.com/file/d/1i0290izjJ15Lj8PjawrOhBNCg4IkcGyz/view"
      );
}

// document.querySelector("#resume-link-2").addEventListener("click", ()=>{
//     window.open(
//       "https://drive.google.com/file/d/1rECL7KJFC1-2hGxOBOBvwORNaAp_T0aj/view?usp=sharing",
//       "_blank"
//     );
// })


let githubBtn = document.querySelector("#contact-github");

githubBtn.addEventListener('click',function(){
    
    window.location.href = 'https://github.com/shivam5665';

})

let linkedinBtn = document.querySelector(".fa-linkedin");

linkedinBtn.addEventListener('click',function(){
    
    window.location.href = 'https://linkedin.com/in/shiva-saraswat-718048199/';

})

let contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener('click',function(){
    
    window.location.href = '#contact';

})


let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector(".openbtn");

openBtn.addEventListener("click",function(){
    document.querySelector("#side-window").style.width = "250px";
})
  
closeBtn.addEventListener("click",function(){
    document.querySelector("#side-window").style.width = "0";
})
  

let btnform = document.querySelector("#form-submit");

btnform.addEventListener('click',function(){

    window.location.href = "https://shivam5665.github.io/"

})


let navbarColor = document.querySelectorAll(".nav-link");

console.log(navbarColor);
for(let nav of navbarColor){

    nav.addEventListener("click",function(){
    
        let curr = document.querySelector("#nav-bar a.home");
        curr.classList.remove('home');        
        nav.classList.add("home");

    })

}

function bewakoofGithub(){

    window.location.href = "https://github.com/shivam5665/Lync-Club";

}

function geeksGithub(){

    window.location.href = "https://github.com/shivam5665/abundant-coat-8487_";

}


function vertinaryGithub(){

    window.location.href = "https://github.com/shivam5665/bizarre-quilt-7359";

}
function vertNetlify(){

    window.location.href = "https://thepetvet.vercel.app/";

}

function lyncNetlify(){

    window.location.href = "https://lambent-narwhal-8bd70e.netlify.app/";

}
function geeksNetlifyNetlify(){

    window.location.href = "https://effulgent-syrniki-67b038.netlify.app/";

}