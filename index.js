// step 1 generate a random number;
const randomNumber = Math.floor(Math.random() * 100) + 1;
//console.log(randomNumber);
//step 2
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        return "please enter a valid number.";
    }
}
export {};
