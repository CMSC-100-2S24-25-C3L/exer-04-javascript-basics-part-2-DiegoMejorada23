// dvmejorada@up.edu.ph
// 2023-04708
// CMSC 100 C3L
// February 27, 2025
// Exer 04: JavaScript Basics Part 2
//  Simulate a register program in JavaScript (tests file)

import { addAccount } from './index.js';

console.log(addAccount(["Alan"]));                                              // Returns false

console.log(addAccount(["Alan", "Turing"]));                                    // Returns false

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com"]));                 // Returns false

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));             // Returns true

console.log(addAccount(["", "Turing", "aturing@w3c.com", 58]));                 // Returns false

console.log(addAccount(["Alan", "", "aturing@w3c.com", 58]));                   // Returns false

console.log(addAccount(["Alan", "Turing", "", 58]));                            // Returns false

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 17]));             // Returns false

console.log(addAccount(["Alan", "Turing", "aturing", 58]));                     // Returns false

console.log(addAccount(["Diego", "Mejorada", "dvmejorada@up.edu.ph", 20]));     // Returns true