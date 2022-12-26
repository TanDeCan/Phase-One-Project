import weather from './db.json' assert { type: 'json' };
document.addEventListener('DOMContentLoaded', () => {
function renderWeather(date){

    const li = document.createElement('li');
    li.classList.add('list-li');

    const h3 = document.createElement('h3');
    h3.textContent = weather.DayOfWeek;

    const pCon = document.createElement('p');
    pCon.textContent = weather.Condition;

    const pHiTemp = document.createElement('p');
    pHiTemp.textContent = weather.HighTemp;

    const pLowTemp = document.createElement('p');
    pLowTemp.textContent = weather.LowTemp;

    li.append(h3, pCon, pHiTemp, pLowTemp)
    document.querySelector('#daily-weather').append(li);
}

weather.forEach(date => {
    renderWeather(date);});

})






