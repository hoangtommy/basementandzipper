const container = document.querySelector('#container');

function askUser () {
	let number = prompt('how many squares per side would you like?');
	return number;
}

function makeBoxes(num) {
	container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`);
	for (let i = 0; i < num**2; i++) {
		let box = document.createElement('div');
		box.classList.add('box');
		box.addEventListener('mouseover', (e) => {
			makeDarker(e.target);
		});
		container.appendChild(box);
	}
}

function makeDarker(target) {
	//need to convert to number otherwise addition of string (target.style.opacity) with number gets hairy
	let currentOpacity = Number(target.style.opacity);
	let opacIncrement = .2;
	if (currentOpacity < 1) {
		currentOpacity += opacIncrement;
	}
	target.style.opacity = currentOpacity;
}

function clickEvent() {
  window['optimizely'] = window['optimizely'] || [];
  window['optimizely'].push({
    type: "event",
    eventName: "custom_book_click",
    tags: {
      revenue: 0, // Optional in cents as integer (500 == $5.00)
      value: 0.00 // Optional as float
    }
  });
}

let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);
function reset() {
  clickEvent();
	container.innerHTML = '';
	makeBoxes(askUser());
}

makeBoxes(24);
