const block = document.getElementsByClassName("block");
let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX <= 440 && positionY <=0) {
        positionX +=16;
        block[0].style.left = `${positionX}px`;
        setTimeout(move,100);
    } else if (positionX >=440 && positionY <= 440) {
        positionY +=16;
        block[0].style.top = `${positionY}px`;
        setTimeout(move,100);
    } else if (positionX >= 10 && positionY >=440) {
        positionX -= 16;
        block[0].style.left = `${positionX}px`;
        setTimeout(move,100)
    } else if (positionY >= 10 && positionX <= 10 ) {
        positionY -= 16;
        block[0].style.top = `${positionY}px`;
        setTimeout(move,100)
    }
};
move();

///
function timer (num) {
    console.log(num);
    let stopTimer = setInterval( () => {
        num++
        if (num === 60) {
            clearInterval(stopTimer)
        }
        console.log('count:',num);
    },1000)
};
timer(1);
