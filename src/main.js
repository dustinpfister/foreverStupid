var Main = (function(){

    var currentState = 'yearStart',
        
    start = function(){
   
        Game.startNew();
        Control.attachTo(Render.canvas);
        loop();
        
    },
        
    state = {
    
        load : function(){
        
        },
        
        yearStart : function(){
        
        },
		
		hallway : function(){
			
			Game.Map.update();
			
			if(Control.keys[68]){
				
				Game.Map.state.guyX += 5;
				
			}
			
			if(Control.keys[65]){
				
				
				Game.Map.state.guyX -= 5;
				
			}
			
			if(Control.keys[87]){
				
				if( typeof Game.Map.guyOverDoor() === 'number'){
					
					Game.Map.roomSet();
					currentState = 'room';
					
				}
				
			}
			
			if(!Game.Map.state.timeout){
			    
				if(new Date() - Game.Map.state.startTime >= 10000){
					
					currentState = 'yearEnd';
					
				}
			       
			
			}
		},
		
		room : function(){
			
			if(Control.keys[68]){
				
				Game.Map.state.guyX += 5;
				
			}
			
			if(Control.keys[65]){
				
				
				Game.Map.state.guyX -= 5;
				
			}
			
			if(!Game.Map.state.timeout){
			    
				if(new Date() - Game.Map.state.startTime >= 10000){
					
					currentState = 'yearEnd';
					
				}
			       
			
			}
		},
        
		yearEnd : function(){
			
			
		},
		
        run : function(){
        
        },
		
		graduate : function(){
			
			
			
		}
        
    },
        
    
        
    loop = function(){
    
    
        requestAnimationFrame(loop);
        
        state[currentState]();
        Render.draw(currentState);
        
        
    };
    
    start();

    return {
    
        getState : function(){
        
            return currentState;
        
        },
        setState : function(state){
        
            currentState = state;
            
        }
    
    }

}());