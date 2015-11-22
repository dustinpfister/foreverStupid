var Game = (function () {

    


	var state = {

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
			//this.smart += 0.1;
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

		},
		
		nextYear : function () {

			state.nextYear();
		},
		
		
		smartUp : function(){
			
			
		}

	};

}
	());
