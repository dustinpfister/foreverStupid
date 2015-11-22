var Render = (function(){

    var container = document.getElementById('gamearea'),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
		img = [],
		imgLoaded = [],
		imgCount = 2,
		imgURL = 'img/',
        
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
		
		hallway : function(){
			
			
		
			var size = 32,
			countX = Math.floor(640 / size) + 2,
			countY = Math.floor(480 / size) + 2,
			
			startX = size - Math.abs(Game.Map.state.vpX) % size,					
			startY = size - Math.abs(Game.Map.state.vpY) % size,
			
			i = 0,
			i2 = 0,
			pos;
			
			// clear
			ctx.fillStyle = '#000000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
			
			// draw grid
			ctx.lineWidth = 1;
			while (i < countY) {

				ctx.strokeStyle = 'rgba(255,255,255,0.5)';
				i2 = 0;
						
				while (i2 < countX) {
							
					ctx.strokeRect(startX - size + size * i2,startY-size + size * i,size,size);
					
					i2++;
							
				}
				
				i++;
				
			}
			
			// draw floor
			pos = Game.Map.getVPRelative( 0,Game.Map.state.horizon);
			ctx.fillStyle = '#00ffff';
			ctx.fillRect(0,pos.y,640, 480 - pos.y);
			
			// draw doors
			pos = Game.Map.getVPRelative( Game.Map.state.doors[0],Game.Map.state.horizon-64);
			ctx.fillStyle = '#ffffff';
			ctx.fillRect(pos.x,pos.y,32, 64);
			
			// draw guy
			pos = Game.Map.getVPRelative(Game.Map.state.guyX, Game.Map.state.guyY);
			//ctx.fillStyle = '#ff0000';
			//ctx.fillRect(pos.x,pos.y,32, 64);
			
			var cell = Game.Map.state.guyCell,
			glowCell = Game.Map.state.guyGlowCell;
			
			ctx.drawImage(img[1], 150 * cell,188* (2 * glowCell),150,188, pos.x,pos.y,150,188+5);
			ctx.drawImage(img[0], 150 * cell,0,150,188, pos.x,pos.y,150,188+5);
			
			
			// smart bar
			ctx.fillStyle='#222222';
			ctx.fillRect(10,10,150,10);
			
			ctx.fillStyle='#00ff00';
			ctx.fillRect(10,10,150 * Game.state.smart,10);
		},
		
		room : function(){
			
			ctx.fillStyle = '#000000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
			
			pos = {x: Game.Map.state.guyX, y:Game.Map.state.guyY};
			ctx.fillStyle = '#ff0000';
			ctx.fillRect(pos.x,pos.y,32, 64);
			
		},
        
		yearEnd : function(){
			
			ctx.fillStyle = '#ff0000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
			
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
        },
		
		loadImages : function(){
			
			var i = 0,tempImg;
			while(i < imgCount){
				
				
				imgLoaded[i] = false;
				
				tempImg = new Image();
				(function(){
				
				    var index = i;
				
				    tempImg.addEventListener('load', function(){
					
					    imgLoaded[index] = true;
					
					    console.log('disco!');
					
				    });
				
				}());
				
				tempImg.src = imgURL + i + '.png';
				img.push(tempImg);
				
				i++;
			}
			
			
		},
		
		loadCheck : function(){
			
			var i=0, loadCount=0;;
			
			while(i < imgCount){
			
			    if(imgLoaded[i]){
					
					loadCount++;
					
				}
			
			    i++;
			}
			
			return loadCount / imgCount;
			
		}
        
    };
    
}());