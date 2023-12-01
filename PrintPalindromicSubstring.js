function isPalindrome(s){
let l = 0;
let r = s.length - 1;
while(l<r){
if(s[l] != s[r]){return false}
l++
r--
}
return true
}

function palindromicSubstr(s){
for(let i = 0 ; i<s.length;i++){
for(let j = i; j<s.length ; j++){
let substr = s.substring(i,j+1)
if(isPalindrome(substr) == true)console.log(substr);

}
}
}