let userscore=0;
let computerscore=0;

const choice=document.querySelectorAll(".choices");

let button= document.querySelector("#turn");
 const para=document.querySelector("#user-score");
const para1= document.querySelector("#computer-score");

const getCompchoice=()=> {
const options = ["rock","paper","scissors"];
const radIdx = Math.floor(Math.random() * 3);
return options[radIdx];

// we multiplied it by 3 so that values lies between 0 to number-1,it lies between 0 to 2.
// if we do math.random() * 10, values lies between 0 and 9
// to remove those extra values after decimal we use Math.floor(Math.random() * 10 )
// these numbers can be used as a index values for generating random computer choice

}
const drawgame=()=>{

button.innerText="it is a draw!play again.";
button.style.backgroundColor="#034f84";
}

const shoWinner= (userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        para.innerText=userscore;

    
        button.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        button.style.backgroundColor="green";

    }
    else{
        computerscore++;
        para1.innerText=computerscore;
        
        button.innerText=`you lost! ${compchoice} beats your ${userchoice}`;
        button.style.backgroundColor="red";
    }
}

const playGame=(userchoice) => {
    console.log("userchoice is= ", userchoice );
    const compchoice = getCompchoice();
    console.log("compchoice is=",compchoice);
    if(userchoice===compchoice){
drawgame();
  }else{
    let userWin = true;
    if(userchoice==="rock"){
        // computer now has only two choices either scissors or paper , beacuse if it will be a rock then it will be a draw.
       userWin =  compchoice==="paper" ? false : true; 
    }
else if(userchoice="scissors"){
    userWin= compchoice==="rock"? false : true;
}

else{
    userWin = compchoice ==="scissors" ? false : true;
}
shoWinner(userWin,userchoice,compchoice);
  }
    }; 


choice.forEach((choices)=>{

choices.addEventListener("click",()=> {

const userchoice = choices.getAttribute("id");

playGame( userchoice );
});
});

// paper scissor
// paper rock