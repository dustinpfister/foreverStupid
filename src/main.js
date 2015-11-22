var Main = (function () {

	var currentState = 'load',

	start = function () {

		Game.startNew();
		Control.attachTo(Render.canvas);

		Render.loadImages();

		loop();

	},

	state = {

		load : function () {

			var loadPer = Render.loadCheck();

			if (loadPer === 1) {

				currentState = 'yearStart';

			}

		},

		yearStart : function () {},

		hallway : function () {

			Map.update();

			Game.smartUp();

			if (Control.keys[68] || Control.keys[65]) {

				Map.guyMove();

			} else {

				Map.guyRest();

			}

			if (Control.keys[68]) {

				Map.state.guyX += 5;

			}

			if (Control.keys[65]) {

				Map.state.guyX -= 5;

			}

			if (Control.keys[87]) {

				if (typeof Map.guyOverDoor() === 'number') {

					Map.roomSet();
					currentState = 'room';

				}

			}

			if (!Map.state.timeout) {

				if (new Date() - Map.state.startTime >= 30000) {

					if (Game.state.smart === 1) {

						currentState = 'graduate';

					} else {
						currentState = 'yearEnd';
					}

				}

			}
		},

		room : function () {

			Map.roomUpdate();

			Game.smartUp();
			
			Game.state.smartRate = 100;

			if (Control.keys[68] || Control.keys[65]) {

				Map.guyMove();

			} else {

				Map.guyRest();

			}

			if (Control.keys[68]) {

				Map.state.guyX += 5;

			}

			if (Control.keys[65]) {

				Map.state.guyX -= 5;

			}

			if (!Map.state.timeout) {

				if (new Date() - Map.state.startTime >= 30000) {

					if (Game.state.smart === 1) {

						currentState = 'graduate';

					} else {
						currentState = 'yearEnd';
					}
				}

			}
		},

		yearEnd : function () {},

		run : function () {},

		graduate : function () {}

	},

	loop = function () {

		requestAnimationFrame(loop);

		state[currentState]();
		Render.draw(currentState);

	};

	start();

	return {

		getState : function () {

			return currentState;

		},
		setState : function (state) {

			currentState = state;

		}

	}

}
	());
