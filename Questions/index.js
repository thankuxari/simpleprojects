const openBtns = document.querySelectorAll('.open-btn');
const paragraph = document.querySelectorAll('p');
const icon = document.querySelectorAll('.fa-solid.fa-plus');
const hr = document.querySelectorAll('hr');

console.log(paragraph);

openBtns.forEach(function(btn,index){

    btn.addEventListener('click',()=>{
        if(icon[index].classList.contains('fa-plus')){
            icon[index].classList.remove('fa-plus');
            icon[index].classList.add('fa-minus');
            paragraph[index].classList.add('active');
            hr[index].classList.add('active');
        }else{
            icon[index].classList.add('fa-plus');
            icon[index].classList.remove('fa-minus');
            paragraph[index].classList.remove('active');
            hr[index].classList.remove('active');
        }
    })
});
