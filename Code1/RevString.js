function RevString(str){
    return str.split("").reverse().join("");
}
console.log(RevString("Hello World"));


function RevString(str){
    let reverse = '';

    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
} 
console.log(RevString("RAQIM"));