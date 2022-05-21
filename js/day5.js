const btn = document.querySelector(".btn")
const palindrome = document.querySelector(".palindrome")



const IsPalindrome = () =>{
    const  text = document.getElementById("text").value
    var Palindrome = ""
    for (j=text.length;j>=0;j--){
            Palindrome += [text[j]]
    }
    for(z=0;z<=text.length;z++){
        if(text===Palindrome){
            palindrome.innerHTML = text + " is palindrome"
        }else{
            palindrome.innerHTML = text + " is not palindrome"
        }

    }
 
}

btn.addEventListener("click", IsPalindrome)