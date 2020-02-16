//initialize some variables
const score = document.querySelector('.score')
const highScore = document.querySelector('.high-score');
const round = document.querySelector('.round');
const gameName = document.querySelector('.game-name');
const btnPlay = document.querySelector('.btn-play');
const btnNext = document.querySelector('.btn-next');
const blocksContainer = document.querySelector('.blocks-container');
const blocks = document.getElementsByClassName('block');
const instructions = document.querySelector('.instructions');
const winner = document.querySelector('.winner');
const loser = document.querySelector('.loser');
let blocksOfRound = [];
let roundNum = 1;


//loop through blocks to give an ID to every block
for (let i = 0; i < 30; i++){
    blocks[i].id = i;
}

function mainPage(){
    if(localStorage.getItem('round')){
        round.innerHTML = `Round: ${(localStorage.getItem('round'))}`;
    };    

    //Event: onclick button 'Play', start the music, show the game table and begin the game
    btnPlay.addEventListener('click', () => { 
        clearBlocks();
        document.querySelector('audio').play();

        score.classList.add('fade-out');
        gameName.classList.add('fade-out');
        btnPlay.classList.add('fade-out');
        setTimeout(() => {
            highScore.style.display = 'none';
            gameName.style.display = 'none';
            btnPlay.style.display = 'none';
            score.classList.remove('fade-out');
            gameName.classList.remove('fade-out');
            btnPlay.classList.remove('fade-out');
            round.style.fontWeight = 'bold';
            round.innerHTML = `Round: ${roundNum}`;
            round.style.fontSize = '1.5em';
            blocksContainer.style.display = 'block';
            instructions.style.display = 'block';
        }, 1000) 

        startRound();
    })
}    


//Start the Game with this function
function startRound(){
   memoryPath();
   setTimeout(animationOfMemoryPath, 2000);
   setTimeout(ableToPlay, 3000 + (2000 * roundNum));
}    


//Makes an array with random numbers. These numbers represent the choosen blocks for the round. 
function memoryPath(){
    blocksOfRound = []; 
    for (let i = 0; i < roundNum; i++){
        let randomBlock = 0;
        do{  
            randomBlock = Math.floor(Math.random() * 30)
        }while (randomBlock === 30 || blocksOfRound.includes(randomBlock) === true);  
    blocksOfRound.push(randomBlock); 
    } 
}


//Animates the Path of Memory
function animationOfMemoryPath(){
    let time = 0;
    blocksOfRound.forEach(id => {
        setTimeout(() => {
            blocks[id].classList.add('chosen-block');
        }, time)
        time += 2000;
    });
}


//users turn to play
let index = 0;
function ableToPlay(){
    //create hover in blocks
    blocksContainer.addEventListener('mouseover', forMouseover);
    blocksContainer.addEventListener('mouseout', forMouseout);
    
    //estimate if user choises are correct
    blocksContainer.addEventListener('click', estimateUserChoises); 
}


//function that makes user disable to play
function disableToPlay(){
    blocksContainer.style.cursor = 'default';
    blocksContainer.removeEventListener('mouseover', forMouseover);
    blocksContainer.removeEventListener('mouseout', forMouseout);
    blocksContainer.removeEventListener('click', estimateUserChoises);  
}


//function for winners
function userWins(){
    winner.classList.remove('fade-out');
    score.classList.add('fade-out');
    setTimeout(() => { 
        score.style.display = 'none';
        winner.style.display = 'block'; 
    }, 1000);
}


//Event: click button 'next round'
btnNext.addEventListener('click', () => {
    roundNum++;
    round.innerHTML = `Round: ${roundNum}`;
    score.classList.remove('fade-out');
    winner.classList.add('fade-out');
    clearBlocks();
    setTimeout(() => { 
        winner.style.display = 'none';
        score.style.display = 'block';
        //call startRound to go to the next round
        startRound();
    }, 1000); 
})


//function for losers
function userLoser(){
    blocksContainer.classList.add('fade-out');
    score.classList.add('fade-out');
    setTimeout(() => {
        blocksContainer.style.display = 'none';
        score.style.display = 'none';
        loser.classList.add('fade-in');
        loser.style.display = 'block';
    } ,1000)

    setTimeout(() => {
        score.classList.remove('fade-out');
        blocksContainer.classList.remove('fade-out');
        loser.classList.remove('fade-in');
        loser.classList.add('fade-out');
        setTimeout(() => {
            loser.style.display = 'none';
            loser.classList.remove('fade-out');
            highScore.style.display = 'block';
            round.style.display = 'block';
            round.style.fontSize = '1em';
            round.style.fontWeight = '400';
            instructions.style.display = 'none'
            score.style.display = 'block';
            gameName.style.display = 'block';
            btnPlay.style.display = 'inline-block';
            //keep bestscore
            if (!localStorage.getItem('round')){
                localStorage.setItem('round', roundNum - 1);
            }else if (JSON.parse(localStorage.getItem('round')) < roundNum - 1){
                localStorage.setItem('round', roundNum - 1);
            };
            //call the main page to start from round 1
            roundNum = 1;
            mainPage();
        }, 1000)  
    }, 3000);  
}



/* -------------------------------- Help Functions --------------------------------- */

//function for mouseover
function forMouseover(e){
    blocksContainer.style.cursor = 'pointer';
    if (e.target.classList.contains('block') && e.target.style.backgroundColor !== 'limegreen' && e.target.style.backgroundColor !== 'red'){
        e.target.style.backgroundColor = '#47423c';
    }
}


//function for mouseout
function forMouseout(e){
    if (e.target.classList.contains('block') && e.target.style.backgroundColor !== 'limegreen' && e.target.style.backgroundColor !== 'red'){
        e.target.style.backgroundColor = '#faebd7';
    }
}


//function to estimate user choises
function estimateUserChoises(e){
    if (index < roundNum && e.target.id == blocksOfRound[index]){
        e.target.style.backgroundColor = 'limegreen';
        index++;
    } else if (e.target.classList.contains('block')){
        e.target.style.backgroundColor = 'red';
        index = 0;
        disableToPlay();
        userLoser();
    };

    if (index === roundNum && e.target.style.backgroundColor === 'limegreen'){
        index = 0;
        disableToPlay();
        userWins();
    };   
} 


//function that return the block to their firts situation
function clearBlocks(){
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = '#faebd7';
        blocks[i].className = 'block';
    };
} 


//call the main page to begin the rendering....
mainPage();