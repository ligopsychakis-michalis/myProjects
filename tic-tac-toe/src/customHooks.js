import Block from "./components/Block";
import React,{useState} from 'react';

//the entire logic of game 'tic tac toe'-------------------------------------------------
export function useGame(){
    // const [winnerIndexes, setWinnerIndexes] = useState([]);
    let winnerIndexes= [];
    const [score, setScore] = useState({playerX:0, playerO:0});
    const [turnOf, setTurnOf] = useState("X");
    const [winner, setWinner] = useState(null);
    let haveWinner = false;

    const winnerCases = ["012","345","678","036","147","258","048","246"];

    //generate the blocks
    let blockArray = [];
    for (let i = 0; i < 9; i++){
        blockArray.push(<Block key={i} handleClick={handleClick} />);
    };  

    //handle player choice
    function handleClick(e){
        if (!winner && !e.target.innerHTML){
            e.target.innerHTML = turnOf;
            checkForWinner();
            checkForDraw();

            if (!winner){
            switch (turnOf){
                case "X":
                setTurnOf("O");
                break;
                case "O":
                setTurnOf("X") 
                break; 
            }
            }
        }
    };

    //end of game if winner
    function checkForWinner(){
        const blocks = document.querySelectorAll(".block");

        for (let i = 0; i < winnerCases.length; i++){
            const ind1 = parseInt(winnerCases[i][0]);
            const ind2 = parseInt(winnerCases[i][1]);
            const ind3 = parseInt(winnerCases[i][2]);

            if (blocks[ind1].innerHTML && blocks[ind1].innerHTML == blocks[ind2].innerHTML && blocks[ind2].innerHTML == blocks[ind3].innerHTML){
                setWinner(turnOf);
                winnerIndexes = [ind1, ind2, ind3];
                haveWinner = true;
                if (turnOf == "X"){
                    setScore({...score, playerX: score.playerX + 1});
                }else{
                    setScore({...score, playerO: score.playerO + 1});
                };
                blueWinner();
                break;
            };
        };
    };


    //end of game if Draw
    function checkForDraw(){
        const blocks = document.querySelectorAll(".block");

        if (!haveWinner){
            for (let i = 0; i < blocks.length; i++){
                if (blocks[i].innerHTML == ""){
                    break;
                }else if (i == blocks.length - 1) {
                    setWinner("Draw");
                };
            };
        };
    };


    //reset the game.. loser play first
    function handlePlayAgain(){
        setWinner(null);
        winnerIndexes = [];
        const blocks = document.querySelectorAll(".block");
        for (let i = 0; i < blocks.length; i++){
            blocks[i].innerHTML = "";
            blocks[i].style.color = "#ececec";
        }
    }

    function blueWinner(){
        const blocks = document.querySelectorAll(".block");
        const [ind1, ind2, ind3] = winnerIndexes;

        blocks[ind1].style.color = "#8cceff";
        blocks[ind2].style.color = "#8cceff";
        blocks[ind3].style.color = "#8cceff";
    }

    return [blockArray, turnOf, winner, score, handlePlayAgain];
}