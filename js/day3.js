(function(){
    
    const randomColor = () => {
        const randColor = Math.random().toString(16).substring(2, 8)
        n.innerHTML = randColor
        document.body.style.backgroundColor = '#' + randColor
    }

    const n = document.getElementsByTagName("p")[0]
    const btn = document.getElementById("generate")
    


btn.addEventListener("click", randomColor)
    
    



})()