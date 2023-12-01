

 //const ele = document.getElementById("ele1")
 //ele.addEventListener("click", () => {
 //    ele.style.backgroundColor = "yellow"
 //}//)


function pintar(ele, color = "green"){
    ele.style.backgroundColor = color
}
let ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar(ele, "yellow"))
