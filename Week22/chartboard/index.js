var Chart = require('chart.js/auto');
var moment = require('moment');

console.log(moment().format());

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: 'red',
    }]
    },
    options: {
    scales: {
        y: {
            beginAtZero: true 
        }
    }
}
});


//      ANIMATION       //

const anime = require('animejs');

var pathEls = document.querySelectorAll('path');

for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 0),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
    });
}

var letterEls = document.querySelectorAll('.letter');
for (var i = 0; i < letterEls.length; i++) {
    var letterEl = letterEls[i];
    var offset = anime.setDashoffset(letterEl);
    letterEl.setAttribute('stroke-dashoffset', offset);
    anime({
        targets: letterEl,
        duration: anime.random(0, 1000),
        delay: anime.random(0, 300),
        opacity: [
        { value: 0, duration: anime.random(0, 300) },
        ],
        loop: true
    });
}

var curDate = document.querySelector('.current-date');
curDate.append(moment().format('MMMM Do YYYY, h:mm:ss a'));