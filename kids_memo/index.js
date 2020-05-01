//array of cards 
let cardsArray = [];
//store user's choices
let twoChoices = [];

//class of cards
class Card {
    constructor(img, insect){
        this.img = img;
        this.insect = insect;
    }

    generateCard(){
         return (`
            <div class="card">
                <img class="front" src="${this.img}" alt="insect"/>
                <img class="back" src="./imgs/back.jpeg" alt="leaf"/>
                <p>${this.insect}</p>
            </div>        
        `);
    }
};


//create cards via their class and store to array
for (let i = 0; i < 2; i++){
    cardsArray.push(new Card("./imgs/alogaki_panagias.jpg", "Αλογάκι της Παναγίας").generateCard());
    cardsArray.push(new Card("./imgs/beatle.jpg", "Σκαθάρι").generateCard());
    cardsArray.push(new Card("./imgs/red-beatle.jpg", "Πασχαλίτσα").generateCard());
    cardsArray.push(new Card("./imgs/butterfly.jpg", "Πεταλούδα").generateCard());
    cardsArray.push(new Card("./imgs/mermigkas.jpg", "Μυρμήγκι").generateCard());
    cardsArray.push(new Card("./imgs/bee.jpg", "Μέλισσα").generateCard());
};



//Events-------------------------------------------------------------------------
//event of clicking 'start game' button
const btn = document.querySelector("button");
const main = document.querySelector("main");
btn.addEventListener("click", () => {
    twoChoices = [];
    main.innerHTML = "";
    generateRandomNums(12);

    for (let i = 0; i < cardsArray.length; i++){
        main.innerHTML += cardsArray[i];
        document.querySelector("main div:last-child").style.order = randomNumsArray[i];
    }
});

//event of clicking a card (check if two in a row are the same ? keep them open : close both)
let canPlay = true;
main.addEventListener("click", (e) =>{
    if (canPlay == true){
        const insect = e.target.previousSibling.previousSibling;
        twoChoices.push(insect);

        if(e.target.className === "back"){
            e.target.style.zIndex = -1;
            insect.classList.add("fade-in");
            setTimeout(() => {
                insect.classList.remove("fade-in");
            },500)

            if(twoChoices.length == 2 && twoChoices[0].src !== twoChoices[1].src){
                canPlay = false;
                setTimeout(()=> {
                    e.target.style.zIndex = 0;
                    twoChoices[0].nextSibling.nextSibling.style.zIndex = 0;
                    twoChoices = [];
                    canPlay = true;
                } ,500);
            }else if (twoChoices.length == 2 && twoChoices[0].src == twoChoices[1].src){
                twoChoices = [];
            }
        };
    }
});







//Functions-----------------------------------------------------------------------------
//function that put cards in an array randomly
let randomNumsArray = []
function generateRandomNums(num){
    randomNumsArray = [];
    for (let i = 0; i < num; i++){
        let pushed = false;

        while (pushed == false){
            let order = Math.floor(Math.random() * 50);

            if (!randomNumsArray.includes(order)){
                randomNumsArray.push(order);
                pushed = true;
            };
        };
    };
}

