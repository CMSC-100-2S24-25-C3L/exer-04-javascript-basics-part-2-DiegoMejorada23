// dvmejorada@up.edu.ph
// 2023-04708
// CMSC 100 C3L
// February 27, 2025
// Exer 04: JavaScript Basics Part 2
// Simulate a register program in JavaScript (functions file)

import { v4 as uuidv4 } from 'uuid';
//import { validator } from 'validator';

function generateUniqueID(firstName, lastName) {
    let uniqueID = "";

    uniqueID = uniqueID + firstName[0].toLowerCase() + lastName.toLowerCase();
    
    let randomAlphanumeric = uuidv4();

    for (let i = 0; i < 8; i++){
        uniqueID = uniqueID + randomAlphanumeric[i];
    }

    return uniqueID;
}