// function to check string is palindrome or not 

function isPalindrome(str) {

    let j=str.length-1;
    for(let i=0 ;i<str.length/2;i++){
 if (str[i] != str[j]) {

    return false;
    
 }

 j--
 
    }
return true;
}

let str1 ="racecar";
let str2 ="cat";
let str3 ='civic';

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));




// let's try another method

let a="civic";
function ispalindrome() {
   
str=a;
b=str.length;
for(i=0;i<Math.floor(b/2);i++){
if (str[i]===str[b-1-i]) {
   console.log("its a palindrome");
   
}
else{

   console.log("its not a palindrome");
}

}
}
ispalindrome();