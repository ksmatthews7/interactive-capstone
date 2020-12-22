function MovingImage(id) {
	this.y = 0;
	this.max_y = 150;
	this.direction = 1;
	this.element = document.getElementById(id);

	this.update = function () {
		this.y += 3 * this.direction;
		if (this.y > this.max_y) {
			this.direction = -1;
		}
		if (this.y < 0) {
			this.direction = 1;
		}
		this.element.style.bottom = this.y + "px";
		setTimeout(this.update.bind(this), 25);
	}

	this.update();
}

// var ball = new MovingImage('ball');
let bounceTimeout;

function bounce() {
	clearTimeout(bounceTimeout);
	const ball = document.querySelector("#ball");

	if (ball.classList.contains("bounce")) {
		ball.classList.remove("bounce");
	} else {
		ball.classList.add("bounce");
	}

	bounceTimeout = setTimeout(bounce, 0.55 * 1000);
}

bounce();