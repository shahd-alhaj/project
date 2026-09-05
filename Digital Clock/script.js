function currentTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let flag = "AM";

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        flag = "PM";
    }

    document.getElementById("clock").innerHTML =
        `${hours}:${minutes}:${seconds} ${flag}`;

    setTimeout(function () {
        currentTime();
    }, 1000);
}

currentTime();