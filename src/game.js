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

			this.lastSmartChange = new Date();
			this.smartRate = 1000;
		},

		nextYear : function () {

			this.year++;
			this.schoolYear = 2001 + this.year;
			this.age = 17 + this.year;

			this.lastSmartChange = new Date();
			this.smartRate = 1000;
			
			this.startTime = new Date();
			//this.smart += 0.1;
			if (this.smart > 1) {

				this.smart = 1;

			}

		}

	};

	return {

		state : state,
		startNew : function () {

			state.newState();

		},

		nextYear : function () {

			state.nextYear();
		},

		smartUp : function () {

			if (!Map.state.timeout) {
				
				
				if(new Date() - state.lastSmartChange >= state.smartRate){
				state.smart += 0.001;

				if (state.smart > 1) {

					state.smart = 1;
				}
				
				state.lastSmartChange = new Date();
				}

			}

		}

	};

}
	());
