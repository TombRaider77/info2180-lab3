window.onload = function(){
    const board=document.getElementById("board");
    const controls=document.getElementsByClassName("controls");
    const button=document.getElementsByClassName("btn")[0];
    const game=document.getElementById("game");
    const status=document.getElementById("status");


    const e= board.querySelectorAll('div');
    let play = 'X';
    let positions=['', '', '', '', '', '', '', '', ''];

    const start= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for (let i=0; i<=8; i++){
        e[i].setAttribute("class", "square");
    }

    const player= (element,index) =>{
        console.log(element.innerText)
        if(element.innerText !== 'X' || element.innerText !== 'O'){
            element.innerText= play;
            element.classList.add(play);
            positions[index]=play;
            console.log(positions);
            winner();
            if(play === 'X'){
                play='O';
            }
            else
            {
                play='X';
            }
        }

    }
    
    e.forEach( (element, index) => {
        element.addEventListener('click', () => player(element, index));
        element.addEventListener('mouseover', function(){
            element.classList.add('hover');
        });
        element.addEventListener('mouseout', function(){
            element.classList.remove('hover');
        });
    });
   
    
    button.addEventListener('click', ()=>{
        positions=['', '', '', '', '', '', '', '', ''];
        status.innerHTML= 'Move your mouse to a square and click to play as X or as O.'
        status.classList.remove('you-won');
        e.forEach(element =>{
            element.innerText ='';
            element.classList.remove('X');
            element.classList.remove('O');
        });
    });

    function winner(){
        for(let w=0; w<=7; w++){
            const win = start[w];
    
            const p1= positions[win[0]];
            const p2 = positions[win[1]];
            const p3 = positions[win[2]];
            if (p1 === ''|| p2 === ''|| p3===''){
                continue;
            }  
            if (p1=== p2 && p2 === p3){
                status.innerHTML= 'Congratulations! ' + p1 +' is the winner';                
                status.classList.add('you-won');
                break;
            }  

        }
    }
}