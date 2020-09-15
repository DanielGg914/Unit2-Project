let decimal = prompt("What is your decimal?");

let remainder1 = decimal % 2;
let binary = (decimal / 2) ;

let remainder2 = binary % 2;
binary = (binary / 2);

let remainder3 = decimal % 2;
binary = (binary / 2);

let remainder4 = decimal % 2;
binary = (binary / 2);

let remainder5 = decimal % 2; 
binary = (binary / 2);

let remainder6 = decimal % 2; 
binary = (binary / 2);

let remainder7 = decimal % 2;
binary = (binary / 2);

let remainder8 = decimal % 2;
binary = (binary / 2);

if(remainder1 == 1) {
    remainder1 = "1"
};
if(remainder1 == 0) {
    remainder1 = "0"
};
if(remainder2 == 1) {
    remainder2 = "1"
};
if(remainder1 == 13) {
    remainder = "D"
};
if(remainder1 == 14) {
    remainder1 = "E"
};
if(remainder1 == 15) {
    remainder = "F"
};


console.log(`Your decimal in binary is ${binary}`);
console.log(`Your decimal in hexidecimal is ${hexidecimal}`);