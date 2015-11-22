var Control = (function(){


    var keys = [],
	
	state = {
		
		load : function(){
        
        },
        
        yearStart : function(){
        
		     Map.setup();
		     Main.setState('hallway');
		
        },
		
		hallway : function(){
			
			
			
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
            
                state[Main.getState()]();
                
            });
			
			window.addEventListener('keydown', function(e){
	
				keys[e.keyCode] = true;
				
			});
			
			window.addEventListener('keyup', function(e){
				
				keys[e.keyCode] = false;
				
			});
            
        }
    
    }
    
}());