const number = document.getElementById('number');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

let counter = 0;

decreaseBtn.addEventListener('click',()=>{
    counter--;
    handleDisplay(counter);
})

resetBtn.addEventListener('click',()=>{
    counter = 0;
    handleDisplay(counter);
})

increaseBtn.addEventListener('click',()=>{
    counter++;
    handleDisplay(counter);
})

function handleDisplay(counter){
    if(counter > 0 ){
        number.innerHTML = counter;
        number.style.color = 'green';
    }else if(counter < 0){
        number.innerHTML = counter;
        number.style.color = 'red';
    }else{
        number.innerHTML = counter;
        number.style.color = 'black'
    }
}