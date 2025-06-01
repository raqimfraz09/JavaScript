function Anagram (s, t){
    s = s.replaceAll(/\s+/g, '');
    t = t.replaceAll(/\s+/g, '');

    if(s.length !== t.length){
        return false;
    }
    
    for(let i=0; i<s.length-1; i++){
        if(s[i] !== t[i]){
            return false;
        }
    }
    return true;
}
console.log(Anagram("silent", "listen"));