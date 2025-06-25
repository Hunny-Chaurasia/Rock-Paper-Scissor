let userScore = 0;
        let compScore = 0;
        let human=document.getElementById("userScore");
        let computer=document.getElementById("compScore");
        console.log(human.innerText ,"and", computer.innerText);
        let msg=document.getElementById("msg-container");
        let choices = document.querySelectorAll("#btns button"); // Select all buttons inside #btns

        const genCompChoice=()=>{
            const options =["rock","paper","scissor"];
            const randomInd=Math.floor(Math.random()*3); //generates number between 0 to 1
            return options[randomInd];
        }; 

        const playGame = (userChoice) => {
            console.log("user choice =",userChoice);
            //Generate computer choice
            const compChoice=genCompChoice();
            console.log(compChoice);
            if (compChoice==userChoice){
                msg.innerHTML=`It was a DRAW ,  Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
            }
            else if(userChoice=="rock" && compChoice=="paper"){
                msg.innerHTML=`You LOSE the match ,  Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
                compScore+=1;
            }
            else if(compChoice=="rock" && userChoice=="paper" ){
                msg.innerHTML=`You WON the match ,  Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
                userScore+=1;
            }
            else if(userChoice=="scissor" && compChoice=="paper"){
                msg.innerHTML=`You WON the match ,  Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
                userScore+=1;
            }
            else if(compChoice=="scissor" && userChoice=="paper" ){
                msg.innerHTML=`You LOSE the match ,  Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
                compScore+=1;
            }
            else if(userChoice=="rock" && compChoice=="scissor"){
                msg.innerHTML=`You WON the match ,  Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
                userScore+=1;
            }
            else if(compChoice=="rock" && userChoice=="scissor" ){
                msg.innerHTML=`You LOSE the match , Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
                compScore+=1;
            }
            else{
                msg.innerHTML=`You LOSE the match , Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
                compScore+=1;
            }

            console.log("user:",userScore);

            console.log("comp",compScore);
            // return userChoice , compChoice ;
            human.innerHTML=userScore;
            computer.innerHTML=compScore;
            msg.innerHTML=`It was a ${decision} , \n Your Choice is ${userChoice} and Robot's Choice is ${compChoice}`;
        };

        choices.forEach((choice) => {
            choice.addEventListener("click", () => {
                console.log(choice.id); 
                userChoice=choice.id;// Log the ID of the clicked button
                // Add your game logic here
                playGame(userChoice);
            });
        });

        let modeBtn = document.querySelector("#mode");
let curmode="light";

modeBtn.addEventListener("click" , () =>{
    if(curmode=="light"){
        let body=document.querySelector("body");
        body.style.backgroundColor="black";
        body.style.color="white";
        curmode="dark"; 
        modeBtn.innerHTML="&#9788"
    }
    else{
        let body=document.querySelector("body");
        body.style.backgroundColor="white";
        body.style.color="black";
        curmode="light";
        modeBtn.innerHTML=""
    }
});