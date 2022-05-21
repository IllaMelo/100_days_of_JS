const modal = document.querySelector(".modal")
const btn = document.querySelector(".test")
const exit = document.querySelector(".exit")


const OpenModal = (e) =>{
    e.preventDefault()
    modal.style.display = "flex"
}
const CloseModal =()=>{
    modal.style.display = "none"
}
btn.addEventListener("click", OpenModal)
exit.addEventListener("click", CloseModal)
modal.addEventListener("click", CloseModal)
