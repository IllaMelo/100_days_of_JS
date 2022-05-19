(function(){
    
    let count = 0
    const n = document.getElementsByTagName("p")[0]
    
    const Subtract = () =>{
       count-=1
       n.innerHTML = count
       SetColor()
    }
    const Reset = () =>{
        count=0
        n.innerHTML = count
        SetColor()
    }
    const Add = () =>{
        count+=1
        n.innerHTML = count
        SetColor()
    }
    const SetColor = () =>{
        if (count<0){
            n.style.color = "red"

        }else if (count>0){
            n.style.color = "yellow"
        }else{
            n.style.color = "white"
        }
    }
    

    document.getElementById("reset").addEventListener("click", Reset)
    document.getElementById("subtract").addEventListener("click", Subtract)
    document.getElementById("add").addEventListener("click", Add)



})()