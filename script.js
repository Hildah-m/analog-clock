const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function updateClock() {
    const currentTime = new Date();
    
    
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hoursDegrees = (hours % 12) * 30 + (minutes / 60) * 30; 
    const minutesDegrees = (minutes * 6) + (seconds / 60) * 6;    
    const secondsDegrees = seconds * 6;                           

    // Apply the rotations to each hand
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the correct time right away
updateClock();
