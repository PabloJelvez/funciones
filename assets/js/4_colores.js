let clickBlue = document.getElementById("divBlue")
booleanBlue = true
clickBlue.addEventListener("click", () => 
{
    if(booleanBlue == true){
    clickBlue.style.backgroundColor= "black"
    booleanBlue = false

    }else if(booleanBlue == false){
    clickBlue.style.backgroundColor= "blue"
    booleanBlue = true
    }
}) 

let clickRed = document.getElementById("divRed")
booleanRed = true
clickRed.addEventListener("click", () => 
{
    if(booleanRed == true){
    clickRed.style.backgroundColor= "black"
    booleanRed = false

    }else if(booleanRed == false){
    clickRed.style.backgroundColor= "Red"
    booleanRed = true
    }
}) 

let clickGreen = document.getElementById("divGreen")
booleanGreen = true
clickGreen.addEventListener("click", () => 
{
    if(booleanGreen == true){
    clickGreen.style.backgroundColor= "black"
    booleanGreen = false

    }else if(booleanGreen == false){
    clickGreen.style.backgroundColor= "Green"
    booleanGreen = true
    }
}) 

let clickYellow = document.getElementById("divYellow")
booleanYellow = true
clickYellow.addEventListener("click", () => 
{
    if(booleanYellow == true){
    clickYellow.style.backgroundColor= "black"
    booleanYellow = false

    }else if(booleanYellow == false){
    clickYellow.style.backgroundColor= "Yellow"
    booleanYellow = true
    }
}) 