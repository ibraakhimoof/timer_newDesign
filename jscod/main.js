document.addEventListener('DOMContentLoaded', () => {
	const date = new Date('October 24  2021 00:00:00');
	
	const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

	const timeCount = () => {
		let now = new Date();
		let leftUntil = date - now;
        if (leftUntil < 0) {
            let getElement = document.getElementById('time-count')
            getElement.classList.add('finish_title')
            getElement.innerText = 'Bugun saylov kuni'
        }
		
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent =	hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

	};

	timeCount();
	setInterval(timeCount, 1000);
});