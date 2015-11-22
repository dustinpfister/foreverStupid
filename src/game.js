var Game = (function () {

    var Map = (function(){
		
		var state = {
			
			width: 5000,
			height: 1500,
			horizon : 1275-64,
			vpWidth : 640,
			vpHeight : 480,
			vpX : 0, // the map relative position of the view ports upper left corner.
			vpY : 0,
			
			guyX : 320,
			guyY : -256,
			
			doors : [800], // x cornets where a door is
			timeout : true,
			startTime : new Date()
		};
		
		return {
			
			state : state,
			
			
			setup : function(){
				
				state.vpX = 0;
				state.vpY = 0;
				state.guyX = 320;
				state.guyY = -256;
				state.timeout = true;
				
				state.doors = [];
				state.doors.push(800);
				
			},
			
			roomSet : function(){
				
				state.guyX = state.vpWidth - 32 - 32;
				state.guyY = state.vpHeight - 32 - 64;
				
			},
			
			update : function(){
				
				
				// update guys position
				
				if(state.guyY < state.horizon - 64){
					
					state.guyY += 5;
					
				}
				
				if(state.guyY > state.horizon - 64){
				
				    state.guyY = state.horizon - 64;
				
				}
				
				
				if(state.guyY === state.horizon - 64 && state.timeout){
					
					state.timeout = false;
					state.startTime = new Date();
					
					
				}

				
				if(state.guyY > 220 && state.guyY < state.height - state.vpHeight){
				    state.vpY = state.guyY-220;
				}
				
				if(state.guyX > 320){
				    state.vpX = state.guyX - 320;
				}
				
				
			},
			
			// return the index of a door if the guy is at one, else return false
			guyOverDoor : function(){
				
				var i=0, len = state.doors.length;
				while(i < len){
					
					if(state.guyX > state.doors[i]-32 && state.guyX < state.doors[i]+32){
						
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
		
	}()),


	state = {

		newState : function () {

			this.year = 1;
			this.schoolYear = 2001 + this.year;
			this.age = 17 + this.year;
			this.smart = 0; // a value between 0 (stupid) and 1 (smart)
			this.smartPoints = 0;
			this.toGraduate = 1600;
			this.startTime = new Date();

		},

		nextYear : function () {

			this.year++;
			this.schoolYear = 2001 + this.year;
			this.age = 17 + this.year;

			
			this.startTime = new Date();
			this.smart += 0.1;
			if (this.smart > 1) {

				this.smart = 1;

			}

		}

	};

	return {

		Map : Map,
		state : state,
		startNew : function () {

			state.newState();

			console.log(state);

		},
		
		nextYear : function () {

			state.nextYear();
		}

	};

}
	());
