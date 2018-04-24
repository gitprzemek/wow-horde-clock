var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".minute-hand");
var hourHand = document.querySelector(".hour-hand");
var allHands = document.querySelectorAll(".hand");

function setDate() {

    const nowTime = new Date();

    const seconds = nowTime.getSeconds();
    const secondsDeg = (seconds / 60) * 360;
    secondHand.style.transform = `translate(-50%, -50%) scale(0.98) rotate(${secondsDeg}deg)`;


    const minutes = nowTime.getMinutes();
    const minutesDeg = (minutes / 60) * 360;
    minuteHand.style.transform = `translate(-50%, -50%) scale(0.92) rotate(${minutesDeg}deg)`;

    const hour = nowTime.getHours();
    const hourDeg = (hour / 12) * 360;
    hourHand.style.transform = `translate(-50%, -50%) scale(0.8) rotate(${hourDeg}deg)`;

    if(secondsDeg === 0){
        allHands.forEach(hand => hand.style.transition = "none")
    } else {
        allHands.forEach(hand => hand.style.transition = "")
    }
};
setInterval(setDate, 1000);
setDate();
