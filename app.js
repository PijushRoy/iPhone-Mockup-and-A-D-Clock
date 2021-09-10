setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // let second = date.getSeconds();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // second = second < 10 ? '0' + second : second;
    // var ampm = hours >= 12 ? 'PM' : 'AM';

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;


    let today = date.getDay()
    let dayList = ['SunDay', 'MonDay', 'TuesDay', 'WednesDay', 'ThusDay', 'FriDay', 'SaturDay']
    let currentDay = `ToDay is ${dayList[today]}`
    document.getElementById("day").innerHTML = currentDay
    console.log(currentDay)
}, 500)



setInterval(() => {
    let date = new Date()
    const hr = date.getHours() * 30
    const min = date.getMinutes() * 6
    const sec = date.getSeconds() * 6

    document.getElementById("analog-hr").style.transform = `rotateZ(${hr + (min / 12)}deg)`;
    document.getElementById("analog-min").style.transform = `rotateZ(${min}deg)`;
    document.getElementById("analog-sec").style.transform = `rotateZ(${sec}deg)`;
}, 500)

