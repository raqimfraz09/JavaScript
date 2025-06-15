  
//    1
//   12
//  123
// 1234

let x = 4;

for (let lines = 1; lines <= 5; lines++) {
  let s1 = ""; // Initialize empty spaces
  for (let j = 1; j <= x; j++) {
    s1 = s1 + " "; // Add space
  }

  let str = ""; // Initialize pattern string
  for (let col = 1; col < lines; col++) {
    str = str + col; // Add column numbers like 1, 12, 123, etc.
  }

  console.log(s1 + str); // Print the spaces + numbers
  x--; // Decrease space count with each line
}