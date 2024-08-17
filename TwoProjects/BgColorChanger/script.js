// Generate Random Hex Color

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color;
}

let intervalId;
const startChangingBgColor = function() {

    const changeBgColor = function() {
        document.body.style.backgroundColor = randomColor();
    }

     intervalId = setInterval(changeBgColor, 1000)
    
}

const stopChangingBgColor = function() {
   clearInterval(intervalId)  
}
 
document.querySelector('#start').addEventListener('click', startChangingBgColor)
document.querySelector('#stop').addEventListener('click', stopChangingBgColor)
