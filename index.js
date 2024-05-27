#! /usr/bin/env node
import inquirer from "inquirer";
const atm_pin_number = 1234;
let deposit_amount = 10000;
let user_given_pin = await inquirer.prompt({
    name: "atm pin number",
    type: "number",
    message: "Enter your ATM Pin Number",
});
if (atm_pin_number === user_given_pin["atm pin number"]) {
    let user_options = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Select the following options:",
        choices: ["Withdraw", "Check Balance", "Deposit Amount", "Fast Cash"],
    });
    if (user_options.operation === "Withdraw") {
        let amount = await inquirer.prompt({
            name: "withdraw amount",
            type: "number",
            message: "Enter the withdraw amount",
        });
        if (amount["withdraw amount"] <= deposit_amount) {
            console.log(`Your remaining amount is: ${(deposit_amount -=
                amount["withdraw amount"])}`);
        }
        else {
            console.log(`Insufficient Balance`);
        }
    }
    else if (user_options.operation === "Check Balance") {
        console.log(deposit_amount);
    }
    else if (user_options.operation === "Deposit Amount") {
        let cash_deposit = await inquirer.prompt({
            name: "deposit",
            type: "number",
            message: "How much deposit will you make?",
        });
        console.log(`Your Balance after deposit is ${(deposit_amount +=
            cash_deposit.deposit)}`);
    }
    else if (user_options.operation === "Fast Cash") {
        let amount_list = await inquirer.prompt({
            name: "fast withdraw",
            type: "list",
            message: "Select the following amount for withdraw",
            choices: ["5000", "8000", "9000", "11000", "10000", "2000"],
        });
        if (amount_list["fast withdraw"] <= deposit_amount) {
            console.log(`Your remaining amount is: ${(deposit_amount -=
                amount_list["fast withdraw"])}`);
        }
        else {
            console.log(`Insufficcient Balance`);
        }
    }
}
else {
    console.log(`Your ATM pin number is wrong. Kindly enter correct pin number`);
}
