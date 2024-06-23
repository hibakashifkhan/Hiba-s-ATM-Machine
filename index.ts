#! usr/bin/env node

import inquirer from "inquirer";
let BankBalance = 50000
let myPinCode = 3214

console.log("Welcome to Hiba's ATM Machine")
let PinAnswer = await inquirer.prompt([
    {
        name : "pin",
        type : "number",
        message : "Please Enter Your PinCode :"

    }
])
if(PinAnswer.pin === myPinCode){
console.log("Access Granted!")
console.log(`Current Bank Balance = ${BankBalance}`)

let operationAns = await inquirer.prompt([
    {
        name : "operation",
        type : "list",
        message : "Please select an operator",
        choices : ["Withdraw Amount","Check Bank Balance"]
    }
])
if
   (operationAns.operation === "Withdraw Amount"){
let amountAns = await inquirer.prompt([
    {
        name : "amount",
        type : "number",
        message : "Please enter the withdrawal amount"
    }
])


if (amountAns.amount > BankBalance){
    console.log("Insufficient Balance")
}
else{
    BankBalance -= amountAns.amount;
    console.log(`${amountAns.amount} Withdraw Successfull`)
    console.log(`Remaining Balance = ${BankBalance}`)
}
    }

    else if (operationAns.operation === "Check Bank Balance"){
        console.log(`Your account balance is ${ BankBalance}`)
    }

}


