var colors=[]

let slider = document.getElementById("myRange");
let root = document.documentElement;
const turnButton = document.getElementById('turnButton')

function rangeValue(){
    root.style.setProperty ('--uc-col2', slider.value)
}
turnButton.addEventListener('click', ()=>{
  
    userColor=[]
   
    userColor=[colors[0], Number(slider.value), colors[2]]
    console.log(userColor)
    console.log(colors)
    colorAccuracy(userColor)
    slider.value=125
})

function colorAccuracy(){
    deltaR = colors[0]-userColor[0]
    deltaG = colors[1]-userColor[1]
    deltaB = colors[2]-userColor[2]
    deltaE = Math.sqrt(Math.pow(deltaR, 2) + Math.pow(deltaG, 2) + Math.pow(deltaB, 2))
    colAcc= (1- deltaE/441.67)*100
    document.getElementById('color-accuracy').value=colAcc.toFixed(2);
    newColor()
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  
  function newColor(){
    for(i=0; i<3; i++){
        colors[i]=getRandomIntInclusive(0,255)
    }
    root.style.setProperty ('--ref-col1', colors[0])
    root.style.setProperty ('--ref-col2', colors[1])
    root.style.setProperty ('--ref-col3', colors[2])
    
    root.style.setProperty ('--uc-col1', colors[0])
    root.style.setProperty ('--uc-col2', slider.value)
    root.style.setProperty ('--uc-col3', colors[2])
  }
