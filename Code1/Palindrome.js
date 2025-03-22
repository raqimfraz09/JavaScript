function isPalindrome(str){
    let string = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for(i = 0; i < string.length - i - 1; i++){
        if(string[i] !== string[string.length - i - 1]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal. Panama"));

//  Using two pointers

function isPalindrome(s){
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let i = 0;
    let j = string.length - 1;

    while(i < j){
        if(string[i] !== string[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal. Panama"));