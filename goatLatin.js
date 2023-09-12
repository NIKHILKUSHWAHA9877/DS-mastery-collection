// Example 1:

// Input: sentence = "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:

// Input: sentence = "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"


var toGoatLatin = function(sentence) {

let vowels = "aeiouAEIOU"
let arr = sentence.split(" ")
let ma = 'ma'
a = ''
for(let i = 0; i<arr.length;i++){
a+='a'
let fromWords = arr[i]
let fromChar = fromWords[0]

if(vowels.includes(fromChar)) arr[i]= fromWords + ma + a
else arr[i] = fromWords.slice(1) + fromChar + ma + a

}


return arr.join(" ")
    
}

let result = toGoatLatin("The quick brown fox jumped over the lazy dog")
console.log(result)
