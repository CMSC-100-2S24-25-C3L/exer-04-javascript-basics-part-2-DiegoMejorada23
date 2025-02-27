// dvmejorada@up.edu.ph
// 2023-04708
// CMSC 100 C3L
// February 27, 2025
// Exer 04: JavaScript Basics Part 2
// Simulate a register program in JavaScript (functions file)

import { v4 as uuidv4 } from 'uuid';
import  isEmail  from 'validator/lib/isEmail.js';
import { appendFileSync } from 'node:fs';

function generateUniqueID(firstName, lastName) {
    let uniqueID = "";

    uniqueID = uniqueID + firstName[0].toLowerCase() + lastName.toLowerCase();
    
    let randomAlphanumeric = uuidv4();

    for (let i = 0; i < 8; i++){
        uniqueID = uniqueID + randomAlphanumeric[i];
    }

    return uniqueID;
}


function addAccount(array) {
    // array = [first name (string), last name (string), email (string), age (number)]
    if (array.length === 4) {
        if ((array[0] !== "") && (array[1] !== "") && (array[2] !== "")) {
            if (isEmail(array[2])) {
                if (array[3] >= 18) {
                    let data = array[0] + "," + array[1] + "," + array[2] + "," + generateUniqueID(array[0], array[1]);
                    
                    try {
                        appendFileSync('user.txt', data);
                        return true;
                    } catch (err) {
                        return false;
                    }
                }
            }
        }
    }

    return false;
}

export { addAccount };