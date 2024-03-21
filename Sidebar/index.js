const hamburger = document.getElementById('hamburger');
const sideBar = document.getElementById('sidebar');
const closeSideBarBtn = document.getElementById('closeBtn');


hamburger.addEventListener('click',()=>{
    sideBar.classList.toggle('active');
})

closeSideBarBtn.addEventListener('click',()=>{
    sideBar.classList.remove('active');
})