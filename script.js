

const getTime = () => {
    const currentDate = new Date();

    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSec = currentDate.getSeconds();

    let digiClock = document.querySelector('.clock');

    //setting 12 hour format
    let hour;
    if (currentHour > 12) {
        hour = currentHour - 12;
    } else if (currentHour == 0) {
        hour = 12;
    }



    digiClock.innerHTML = `
    <div><span class="bold">${hour}</span><br>Hour</div>
            <div><span class="bold">${currentMinute}</span><br>Minute</div>
            <div><span class="bold">${currentSec}</span><br>Second</div>`
}

//calling function every second
setInterval(getTime, 1000);