let prompt=require('prompt-sync')({sigint:true});
let userchoice=prompt("Enter user choice:");
if(!userchoice){
    console.log("Please enter something to play the game");
}
else{
    console.log("YourChoice =", userchoice);
}
let computerChoice=Math.random();
if(computerChoice<0.34){
    computerChoice="rock";
}
else if(computerChoice<=0.67){
    computerChoice="paper";
}
else{
    computerChoice="sci";
}
console.log("Computer choice : ",computerChoice);
function logic(userchoice,computerChoice){
    if(userchoice==computerChoice){
        return "its a tie";
    }
    if(userchoice=="rock"){
        if(computerChoice=="sci"){
            return "you Win!!";
        }
        else{
            return "you Loss,Try again";
        }
        }
    
    if(userchoice=="paper"){
        if(computerChoice=="rock"){
            return "you Win!!";
        }
        else{
            return "you Loss,Try again";
        }
    
    }
    if (userchoice === "sci") {
        if (computerChoice === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
}
console.log(logic(userchoice,computerChoice));