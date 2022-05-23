const btn = document.querySelector(".btn")
const text = document.querySelector(".text")

const Copy = () =>{
    text.select()
    text.setSelectionRange(0,100)
    document.execCommand("copy")
    btn.textContent = "Copied"
    setTimeout(()=>{
        btn.textContent = "Copy"
    },5000)


}
btn.addEventListener("click", Copy)