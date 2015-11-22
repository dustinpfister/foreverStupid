var Map = (function () {

	var state = {

		width : 5000,
		height : 1500,
		horizon : 1275 - 64,
		vpWidth : 640,
		vpHeight : 480,
		vpX : 0, // the map relative position of the view ports upper left corner.
		vpY : 0,

		guyX : 320,
		guyY : -256,
		guyCell : 0,
		guyCellUp : true,
		guyGlowCell : 0,
		guyGlowUp : true,

		maxDoorSlots : 10,
		doorAt : [],
		doors : [800], // x cornets where a door is
		timeout : true,
		startTime : new Date()
	};

	return {

		state : state,

		setup : function () {

			state.vpX = 0;
			state.vpY = 0;
			state.guyX = 320 - 75; //320;
			state.guyY = -256;
			state.timeout = true;

			state.doorAt = [];
			state.doors = [];

			this.placeDoors(5);

		},

		FindOptions : function () {

			var s = 0,
			options = [],
			d,
			dLen = state.doorAt.length;
			slotLoop : while (s < state.maxDoorSlots) {

				d = 0;
				while (d < dLen) {

					if (state.doorAt[d] === s) {

						s++;
						continue slotLoop;

					}

					d++;
				}
				// push the index if it is availabule
				options.push(s);

				s++;
			}

			return options;

		},

		placeDoors : function (count) {

			var options,
			c,
			x,
			index;

			c = 0;
			while (c < count) {

				options = this.FindOptions();

				if (options.length > 0) {

					index = Math.floor(Math.random() * options.length);

					state.doorAt.push(options[index]);

					x = 800 + options[index] * 600;

					state.doors.push(x);

				}

				c++;
			}

		},

		guyMove : function () {

			if (state.guyCellUp) {

				state.guyCell++;

			} else {

				state.guyCell--;
			}

			if (state.guyCell === 0 || state.guyCell === 5) {

				state.guyCellUp = !state.guyCellUp;

			}

		},

		guyRest : function () {

			state.guyCell = 0;
			state.guyCellUp = true;

		},

		roomSet : function () {

			state.guyX = state.vpWidth - 32 - 150;
			state.guyY = state.vpHeight - 32 - 188;

		},

		glowUpdate : function(){
			
			if (state.guyGlowUp) {
				
				state.guyGlowCell++;
				
			} else {
				
				state.guyGlowCell--;

			}
			
			if (state.guyGlowCell === 3 || state.guyGlowCell === 0) {

				state.guyGlowUp = !state.guyGlowUp;

			}
			
		},
		
		roomUpdate : function(){
			
			this.glowUpdate();
			
		},
		
		update : function () {

		    this.glowUpdate();
		

			// update guys position

			if (state.guyY < state.horizon - 188) {

				state.guyY += 5;

			}

			if (state.guyY > state.horizon - 188) {

				state.guyY = state.horizon - 188;

			}

			if (state.guyY === state.horizon - 188 && state.timeout) {

				state.timeout = false;
				state.startTime = new Date();

			}

			if (state.guyY > 220 && state.guyY < state.height - state.vpHeight) {
				state.vpY = state.guyY - 220;
			}

			if (state.guyX > 320) {
				state.vpX = state.guyX - 320;
			}

		},

		// return the index of a door if the guy is at one, else return false
		guyOverDoor : function () {

			var i = 0,
			len = state.doors.length;
			while (i < len) {

				if (state.guyX > state.doors[i] - 75 && state.guyX < state.doors[i] + 75) {

					return i;

				}

				i++;

			}

			return false;

		},

		// give a view port relative position, with the given map relative mapx, and and mapy arguments
		getVPRelative : function (mapX, mapY) {

			return {

				x : mapX - state.vpX,
				y : mapY - state.vpY

			};

		},

		// move the view port into a map position where mapX, and mapY represents a map position that should end up laying in the center of the view port.
		moveViewPort : function (mapX, mapY) {

			state.vpX = mapX - Math.floor(state.vpWidth / 2);
			state.vpY = mapY - Math.floor(state.vpHeight / 2);

		}

	};

}
	());
