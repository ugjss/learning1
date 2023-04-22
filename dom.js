var numb = [1, 2, 3, 4, 5];

// initialize a variable to hold the sum
let sum = 0;

// loop through the array and add each element to the sum
for (let i = 0; i < numb.length; i++) {
  sum += numb[i];
}
var resultDiv = document.getElementById("result");
resultDiv.innerHTML = "The sum of array elements is: " + sum;