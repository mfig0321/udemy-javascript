const massMark = 78;
const heightMark = 1.69; // meters
const massJohn = 92;
const heightJohn = 1.95;
 
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
 
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}   

// More detailed output
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}