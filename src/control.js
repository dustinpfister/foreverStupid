var Control = (function(){


    var state = {
		
		load : function(){
        
        },
        
        yearStart : function(){
        
		     Main.setState('run');
		
        },
        
        run : function(){
        
		    if(Game.state.smart >= 1){
				
				Main.setState('graduate');
				
			}else{
		        
				Game.nextYear();
		        Main.setState('yearStart');
		
		    }
        }
		
		
	};

    return {
    
        attachTo : function(dom){
        
            dom.addEventListener('mousedown', function(){
            
			    console.log(Main.getState());
			
                state[Main.getState()]();
                
                
            
            });
            
        }
    
    }
    
}());