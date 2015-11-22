var Control = (function(){


    var keys = [],
	
	state = {
		
		load : function(){
        
        },
        
        yearStart : function(){
        
		     Game.Map.setup();
		     Main.setState('hallway');
		
        },
		
		hallway : function(){
			
			
			
			console.log(Game.Map.getVPRelative(50,Game.Map.state.horizon));
			
		},
		
		room : function(){
			
			
		},
        
        run : function(){
        
		    
			
        },
		
		yearEnd : function(){
			
			if(Game.state.smart >= 1){
				
				Main.setState('graduate');
				
			}else{
		        
				Game.nextYear();
		        Main.setState('yearStart');
		
		    }
			
		},
		
		graduate : function(){
			
			
			
		}
		
	};

    return {
    
	    keys : keys,
        attachTo : function(dom){
        
            dom.addEventListener('mousedown', function(){
            
			    console.log(Main.getState());
			
                state[Main.getState()]();
                
                
            
            });
			
			window.addEventListener('keydown', function(e){
	
	            console.log(e.keyCode);
				keys[e.keyCode] = true;
				
			});
			
			window.addEventListener('keyup', function(e){
				
				keys[e.keyCode] = false;
				
			});
            
        }
    
    }
    
}());