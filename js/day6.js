const btn = document.querySelector(".btn")
const result = document.querySelector(".vowel")


const VowelCounter = ()=>{
    const text = document.querySelector(".text").value
    let counter = 0
    for(i=0;i<=text.length;i++){
       
        if(text[i].match(/([a,e,i,o,u])/)){
            counter++;
        }
    }
    result.innerHTML = `The word ${text} has ${counter} vowels!!!`
}

btn.addEventListener("click", VowelCounter)