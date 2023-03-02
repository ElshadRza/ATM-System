let greetingPrompt = Number(prompt(
  "Hello.You have 1000 dollars in your balance.Press 1 if you would like to withdraw or press 2 to deposit."
));
let balance = 1000;
choiceCheck(greetingPrompt,balance);


function choiceCheck(greetingPrompt,balance) {

  if (greetingPrompt === 1) {
      withdrawFromBalance(greetingPrompt,balance);
  } 
  else if(greetingPrompt === 2){
    depositToBalance(greetingPrompt,balance);
  }
  
  else {
    greetingPrompt = prompt("Please type in a correct number or character:");
  }
}

function withdrawFromBalance(greetingPrompt,balance) {
    let withdrawAmount = prompt("How much would you like to withdraw?");
    
   
  if (withdrawAmount > 1000 || withdrawAmount < 0) {
    withdrawAmount = prompt("Please type in a number between 0 and 1000:");
  } 
  else{
    alert(
      `Operation successfull you have ${balance - withdrawAmount}  dollars left.`
    );
  }

}

function depositToBalance(greetingPrompt,balance) {
  let depositAmount = prompt("How much would you like to deposit?");
  if (depositAmount < 1) {
    depositAmount = prompt("Please type in a correct number greater than 1:");
  }
   else {
    alert(`Operation successful.Your balance is ${Number(balance) + Number(depositAmount)}`);
  }
}
