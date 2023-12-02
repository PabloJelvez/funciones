let keyDown = document.getElementById("divColor")

document.addEventListener("keydown", function(event){
    if(event.key === "a" || event.key === "A"){
        keyDown.style.backgroundColor= "pink"
    }else if(event.key === "s" || event.key === "S"){
        keyDown.style.backgroundColor= "orange"
    }else if(event.key === "d" || event.key === "D"){
        keyDown.style.backgroundColor= "lightblue"
    }
})


function addElement(color){
    let container = document.getElementById("container")
    let newDiv = document.createElement("div")
    newDiv.style.width= "200px"
    newDiv.style.height= "200px"
    newDiv.style.backgroundColor= color
    newDiv.style.border= "3px solid black"
    newDiv.style.margin= "20px"
    container.appendChild(newDiv)
}

function removeElement(){
    let container = document.getElementById("container")
    let elements = container.querySelectorAll("div")
    if(elements.length > 0){
        container.removeChild(elements[elements.length - 1])
    }
}

function changeColor(color){
    let container = document.getElementById("container")
    let elements = container.querySelectorAll("div")
    if(elements.length > 0){
        elements[elements.length - 1].style.backgroundColor = color 
    }else{
        addElement(color) 
    }
}

document.addEventListener("keydown", function(event){
    if(event.key === "q" || event.key === "Q"){
        changeColor("purple")
    }else if(event.key === "w" || event.key === "W"){
        changeColor("gray")
    }else if(event.key === "e" || event.key === "E"){
        changeColor("brown")
    }
})













//document.addEventListener("keydown", function(event){
    //if(event.key === "q" || event.key === "Q"){
    //    addElement("purple")
  //  }else if(event.key === "w" || event.key === "W")

//})