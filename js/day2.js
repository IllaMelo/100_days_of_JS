(function(){
    
    const random = () => {
        const rand = Math.floor(Math.random()*100 + 1)
        n.innerHTML = rand
    }

    const n = document.getElementsByTagName("p")[0]
    const btn = document.getElementById("generate")
    


btn.addEventListener("click", random)
    
    



})()