var Render = (function(){

    var container = document.getElementById('gamearea'),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        
    draw = {
    
        load : function(){
        
        },
        
        yearStart : function(){
        
            ctx.fillStyle = '#000000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
            
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
			ctx.font = '20px courier';
            ctx.fillText('Class of ' + Game.state.schoolYear + '?', 320, 240 );
            ctx.fillText('click \/ touch to start', 320, 270);
            
        },
        
        run : function(){
        
            ctx.fillStyle = '#000000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
			
			ctx.fillStyle='#222222';
			ctx.fillRect(10,10,150,10);
			
			ctx.fillStyle='#00ff00';
			ctx.fillRect(10,10,150 * Game.state.smart,10);
            
            
        },
		
		graduate : function(){
			
			ctx.fillStyle = '#000000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
			
			ctx.fillStyle = '#ffffff';
			ctx.textAlign = 'center';
			ctx.fillText('You Graduated High School! AGE: ' + Game.state.age, 320, 220);
			
		}
    
    };
    
    container.appendChild(canvas);
	
    canvas.width = 640;
    canvas.height = 480;
    
    return {
    
        canvas: canvas,
        draw : function(currentState){
        
        
            draw[currentState]();
        }
        
    };
    
}());