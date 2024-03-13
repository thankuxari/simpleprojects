document.addEventListener('DOMContentLoaded',()=>{

    //All possible hex combinations
    const simpleColors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    const clickmeBtn = document.getElementById('clickmeBtn');
    const main = document.getElementsByTagName('main')[0];
    const colorTitleContainer = document.createElement('div');
    colorTitleContainer.classList.add('colortitle-container');
    clickmeBtn.addEventListener('click',pickColor);

    function pickColor(){

        //Clear previous title container
        colorTitleContainer.innerHTML = '';
        let colorString = '#'


        const colorTitle = document.createElement('h1');

        for(let i  = 0 ; i <= 5 ; i++){
            
            //Pick the random number
            const color = generateRandomNumber();
            
            colorString += simpleColors[color];
        }

        colorTitle.innerHTML = 'Background color: ' + colorString;
        
        document.body.style.backgroundColor = colorString;
        colorTitleContainer.appendChild(colorTitle); 
        main.insertBefore(colorTitleContainer,main.firstChild);   
        
    }


    function generateRandomNumber(){
        return Math.floor(Math.random() * simpleColors.length);
    }
})
