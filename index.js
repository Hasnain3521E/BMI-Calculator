#!/usr/bin/env node
import inquirer from "inquirer";
console.log('-----! BMI Calculator By Muhammad Hasnain !-----');
const info = await inquirer.prompt([
    {
        message: 'Enter Your Weight in Kilgrams:',
        type: 'number',
        name: 'weight',
    },
    {
        message: 'Enter Your Height in Meters:',
        type: 'number',
        name: 'height',
    },
]);
const { weight, height } = info;
const BMI = calculateBMI(height, weight);
console.log(`Your BMI is: ${BMI.toFixed(2)}`);
function calculateBMI(height, weight) {
    return weight / (height * height);
}
function checkBMI(BMI) {
    if (weight <= 0 || height <= 0) {
        console.log('Weight and height must be positive numbers.');
    }
    else if (BMI < 18.5) {
        console.log('You are Underweight');
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log('Your Weight is Normal weight');
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        console.log('You are Overweight');
    }
    else {
        console.log('You are Obese (veryoverweight)');
    }
}
checkBMI(BMI);
