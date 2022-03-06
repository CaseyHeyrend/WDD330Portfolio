const squareElement = document.getElementById('square');
let angle = 0;
function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
    }
console.log('square');


const squareElement2 = document.getElementById('square2');
let angle2 = 0;
setInterval( () => {
    angle2 = (angle2 + 2) % 360;
    squareElement.style.transform = `rotate(${angle2}deg)`
}, 1000/60);
console.log('square2');

const id = requestAnimationFrame(rotate);
cancelAnimationFrame(id); // to return the unique IT to cancel the animation

rotate();