const clockContainer = document.querySelector('.js-clock'),
      clockTitle = document.querySelector('h1'),
      clockAmong = document.querySelector('.js-days');

function getTime () {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const among = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    clockAmong.innerText = `${among} / ${month} / ${year}`
    clockTitle.innerText = `${hours <10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds <10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
