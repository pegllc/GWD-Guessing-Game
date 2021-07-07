const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("btnSubmit");
const answerParagraph = document.getElementById("answer");
let attemptsleft = 2;
let stillrunning = true;
let magicnumber=7;
submitButton.addEventListener("click", function () {
    if(!stillrunning){return;}
    let userResponse = userInput.value;
    
    if (attemptsleft != 0)
    {
        if (userResponse >= 1 && 10 >= userResponse)
        {
            if (userResponse == magicnumber)
            {
                answerParagraph.innerText = "You Won Sun";
            }
            else
            {
                attemptsleft--;
                let HigherOrLower="";
                if(userResponse<magicnumber)
                {
                    HigherOrLower="Higher";
                }
                else if(userResponse>magicnumber)
                {
                    HigherOrLower="Lower";
                }
                answerParagraph.innerText = "Try Again Please. "+attemptsleft+" remaining. Secret number is "+HigherOrLower;
            }

        }
        else if (userResponse == 0)
        {
            answerParagraph.innerText = "Enter a number between 1 and 10";
        }
    }
    else
    {
        answerParagraph.innerText = "You outta attempts dawg";
    }
    if (userResponse == -1)
    {
        answerParagraph.innerText = "Terminated";
        stillrunning = false;
    }
    
  
    
    



});

// for(let i = 1; i <= 100; i++){

//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }
//     else if(i % 3 == 0){
//         console.log("Fizz");
//     }else if(i % 5 == 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }