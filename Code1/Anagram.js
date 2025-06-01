function Anagram(s, t){
    s = s.split('').sort();
    t = t.split('').sort();
    if(s.length !== t.length){
        return false;
    }

    for(let i = 0; i<s.length-1; i++){
        if(s[i] !== t[i]){
            return false;
        }
    }
    return true;

}
console.log(Anagram("silent", "listen")); 

// Using While Loop
function Anagram(s, t){
    s = s.split('').sort();
    t = t.split('').sort();
    if(s.length !== t.length){
        return false;
    }

    let i = 0;
    while(i < s.length){
        if(s[i] !== t[i]){
            return false;
        }
        i++;
    }
    return true;

}
console.log(Anagram("silent", "listen")); 


