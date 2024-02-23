import inquirer from "inquirer";

import chalk from "chalk";

// step 1 generate a random number;

const randomNumber: number = Math.floor(Math.random()*100)+1;
let remainingChances = 6;
//console.log(randomNumber);

//step 2

function validateNumber(input:string):boolean | string {
    const number = parseFloat(input);
    if(isNaN(number)){
        return "please enter a valid number.";
    }
    if (number < 0 || number > 100){
        return "please guess a number between 1 to 100."
    }
    return true;
}
async function askForGuessing(){
inquirer.prompt([{
    type:'input',
    name:'guess',
    message:'please guess a number 1 and 100:',
    validate:validateNumber,
}])
// step 3
.then((answers:any)=>{
    const guessNumber = parseInt(answers.guess)
    if (guessNumber === randomNumber){
        console.log(chalk.bgBlue.yellow(`congratulation! you guessed the #{randomNumber} correctly!`))
        process.exit(0)
    }
    else if (guessNumber < randomNumber){
        remainingChances--;
        console.log(chalk.bgRed.bgBlue(`To low, kindly guess again your remaining chances are${remainingChances}:`))
        if( remainingChances = 0){
console.log(chalk.green.bgRed(`we are really sorry you have missed all your chances correct number is ${randomNumber}`));
        }else{
            askForGuessing()
        }
    }
    else if (guessNumber< randomNumber)
    {
     remainingChances--;
     console.log((`To high,kindly guess again your remaining chances left${remainingChances}:`));
     if(remainingChances =0){
        console.log((`we are really sorry you have missed all your chances correct number is ${randomNumber}`));
     }else
     {askForGuessing()}
    }

}
)
}
askForGuessing()