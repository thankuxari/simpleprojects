const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal-active');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click',()=>{
    modal.style.display = 'flex';
    overlay.style.display = 'block';
})

closeBtn.addEventListener('click',()=>{
    modal.style.display = 'none'
    overlay.style.display = 'none'
})

