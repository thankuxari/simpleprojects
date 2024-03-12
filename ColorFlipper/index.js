document.addEventListener('DOMContentLoaded',()=>{
    const simpleColors = ['red','cyan','#779b86','#d448f1','#d7b5de','green'];

    const clickmeBtn = document.getElementById('clickmeBtn');
    const main = document.getElementsByTagName('main')[0];
    const colorTitleContainer = document.createElement('div');
    colorTitleContainer.classList.add('colortitle-container');
    clickmeBtn.addEventListener('click',pickColor);

    function pickColor(){

        colorTitleContainer.innerHTML = '';

        const colorTitle = document.createElement('h1');
        const color = Math.floor(Math.random() * simpleColors.length);

        document.body.style.backgroundColor = simpleColors[color];
        colorTitle.innerHTML = 'Background color: ' + simpleColors[color];

        colorTitleContainer.appendChild(colorTitle); 
        main.insertBefore(colorTitleContainer,main.firstChild);    
    }
})
