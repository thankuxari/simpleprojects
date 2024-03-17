const navBarLinks = document.getElementById('nav-bar-links');
const hamburger = document.getElementById('hamburger');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navBarLinks.classList.toggle('active');
});


    
