const iconBtns = document.querySelectorAll("#icon-plus")
const ansPara = document.querySelectorAll(".answer-para")

iconBtns.forEach((iconBtn, para) => {
    iconBtn.addEventListener("click", function(){
        if (iconBtn.src.includes("icon-plus.svg")) {
            iconBtn.src = "./assets/images/icon-minus.svg";
            ansPara[para].style.display = "block"
        } else {
            iconBtn.src = "./assets/images/icon-plus.svg";
            ansPara[para].style.display = "none"
        }
    })
})