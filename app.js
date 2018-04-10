// targeting the elements
const seconds = document.querySelector('.sec');
const minutes = document.querySelector('.min');
const hours = document.querySelector('.hour');
const secBall = document.querySelector('.ball');
const bText = document.querySelector('.bText');


//manageing second
let date = new Date;
let sec = date.getSeconds();


function gateTime() {
    sec++;
    date = new Date;
    let min = date.getMinutes();
    let hr = date.getHours();

    // converting 24 hr formate to 12 hr//
    if (hr > 12) {
        hr -= 12;
    } else if (hr === 0) {
        hr = 12;
    }

    //converting time into deg
    let flag = ((sec / 60) * 360) + 90;
    seconds.style.transform = `rotate(${flag}deg)`;
    if (sec % 60 == 0) {
        bText.innerHTML = "60";
    } else {
        bText.innerHTML = `${sec%60}`
    }
    bText.style.transform = `rotate(-${flag}deg)`;
    flag = ((min / 60) * 360) + 90;
    minutes.style.transform = `rotate(${flag}deg)`;
    flag = ((hr / 12) * 360) + 90;
    hours.style.transform = `rotate(${flag}deg)`;
    ballAnimation();



}

let temp = true; //true when ball is outside
function ballAnimation() {

    if (temp) {
        secBall.style.left = `18px`;
        temp = false;
    } else {
        secBall.style.left = `-18px`;
        temp = true;
    }

}


setInterval(gateTime, 1000);