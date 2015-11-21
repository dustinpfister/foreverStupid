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