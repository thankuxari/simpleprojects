document.addEventListener('DOMContentLoaded',()=>{
    const simpleColors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    const clickmeBtn = document.getElementById('clickmeBtn');
    const main = document.getElementsByTagName('main')[0];
    const colorTitleContainer = document.createElement('div');
    colorTitleContainer.classList.add('colortitle-container');
    clickmeBtn.addEventListener('click',pickColor);

    function pickColor(){
        colorTitleContainer.innerHTML = '';
        let colorString = '#'
        //Ftiaxnei seira h1
        const colorTitle = document.createElement('h1');
        for(let i  = 0 ; i <= 5 ; i++){
            
            //Dialegei Indexer
            const color = Math.floor(Math.random() * simpleColors.length);
            
            
            colorString += simpleColors[color];
            
        }

        colorTitle.innerHTML = 'Background color: ' + colorString;
        
        document.body.style.backgroundColor = colorString;
        colorTitleContainer.appendChild(colorTitle); 
        main.insertBefore(colorTitleContainer,main.firstChild);   
        
    }
})
