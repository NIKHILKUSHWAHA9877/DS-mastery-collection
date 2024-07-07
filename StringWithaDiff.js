function toggleCase(s){
let ans = "";
for(let i = 0;i<s.length;i++){
    ans+=s[i]
let ascii1 = s.charCodeAt(i)
let ascii2 = s.charCodeAt(i+1)

ans+=(ascii1 - ascii2)

}
ans+=(s.length - 1)
return ans
}

//print ascii value gap + next element in string