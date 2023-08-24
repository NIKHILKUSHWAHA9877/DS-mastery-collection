//20. Valid Parentheses
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


var isValid = function(s) {
let output = [];
for(let i = 0; i<s.length;i++){
let c = s[i];
if(c == '(' || c == '[' || c == '{'){
    output.push(c)
}else{
    if(output.length == 0)return false;

let top = output[output.length - 1] // here length -1 is because it will take top element means which is inserted at last

if(top == '(' && c == ')') output.pop();
else if(top == '[' && c == ']') output.pop();
else if (top == '{' && c == '}') output.pop();
else 
    return false;


}
}
if(output.length > 0)return false  // means at the end after every element is poped out with is same/matching element and still some element is left then it means it is not valid so return false;
 
return true;
}