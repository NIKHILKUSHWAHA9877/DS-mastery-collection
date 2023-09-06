// Longest Common Subsequence

var recursionLCS = function(string_1,string_2 , i , j){
if(i === 0 || j === 0) return 0 //base case
if(string_1[i - 1] === string_2[j - 1]){  // starting comparing from last first then pop them out if equal

return 1 + recursionLCS(string_1 , string_2 , i - 1 , j - 1 ) // if in previous step they are equal then move i , j to back

}else{
let excI = recursionLCS(string_1 , string_2 , i - 1 , j)
let excJ = recursionLCS(string_1 , string_2 , i , j - 1)
return Math.max(excI , excJ)

}

}
var longestCommonSubsequence = function(text1, text2) {
    return recursionLCS(text1, text2, text1.length, text2.length); 
  };
  let result = longestCommonSubsequence("mhunuzqrkzsnidwbun", "szulspmhwpazoxijwbq"); 
console.log(result);