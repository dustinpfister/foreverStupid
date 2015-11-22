var Render = (function(){

    var container = document.getElementById('gamearea'),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
		img = [],
		imgLoaded = [],
		imgCount = 3,
		imgURL = 'img/',
        
    draw = {
    
        load : function(){
        
        },
        
        yearStart : function(){
        
            ctx.fillStyle = '#000000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
            
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
			
			ctx.textBaseline = 'top';
			ctx.font = '80px arial';
			ctx.fillText('Forever Stupid', 320, 30 );
			
			ctx.font = '15px arial';
			ctx.fillText('By Dustin Pfister For the 2015 BGS Jam', 320, 140 );
			
			
			ctx.font = '25px courier';
            ctx.fillText('Class of ' + Game.state.schoolYear + '?', 320, 240 );
            ctx.fillText('click \/ touch to start school year.', 320, 270);
            
        },
		
		hallway : function(){
			
			
		
			var size = 32,
			countX = Math.floor(640 / size) + 2,
			countY = Math.floor(480 / size) + 2,
			
			startX = size - Math.abs(Map.state.vpX) % size,					
			startY = size - Math.abs(Map.state.vpY) % size,
			
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
			pos = Map.getVPRelative( 0,Map.state.horizon);
			ctx.fillStyle = '#2a2a2a';
			ctx.fillRect(0,pos.y,640, 480 - pos.y);
			
			// draw wall
			ctx.drawImage(img[2],pos.x,pos.y-200);
			
			// draw doors
			
			var i=0, len = Map.state.doors.length;
			while(i < len){
			
			    pos = Map.getVPRelative( Map.state.doors[i],Map.state.horizon-188);
			    ctx.fillStyle = '#ffffff';
			    ctx.fillRect(pos.x,pos.y,150, 188);
				
				i++;
			
			}
			
			// draw guy
			pos = Map.getVPRelative(Map.state.guyX, Map.state.guyY);
			//ctx.fillStyle = '#ff0000';
			//ctx.fillRect(pos.x,pos.y,32, 64);
			
			var cell = Map.state.guyCell,
			glowCell = Map.state.guyGlowCell;
			
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
			
			pos = {x: Map.state.guyX, y:Map.state.guyY};
			//ctx.fillStyle = '#ff0000';
			//ctx.fillRect(pos.x,pos.y,32, 64);
			
			var cell = Map.state.guyCell,
			glowCell = Map.state.guyGlowCell;
			
			ctx.drawImage(img[1], 150 * cell,188* (2 * glowCell),150,188, pos.x,pos.y,150,188+5);
			ctx.drawImage(img[0], 150 * cell,0,150,188, pos.x,pos.y,150,188+5);
			
			// smart bar
			ctx.fillStyle='#222222';
			ctx.fillRect(10,10,150,10);
			
			ctx.fillStyle='#00ff00';
			ctx.fillRect(10,10,150 * Game.state.smart,10);
		},
        
		yearEnd : function(){
			
			ctx.fillStyle = '#ff0000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
			
			ctx.fillStyle = '#000000';
			ctx.font = '20px courier';
			ctx.fillText('you failed! See you next year.', 320,220);
			ctx.fillText('click \/ touch to start next school year.', 320, 260);
		},
		/*
        run : function(){
        
            ctx.fillStyle = '#000000';
            ctx.fillRect(0,0,canvas.width,canvas.height);
			
			ctx.fillStyle='#222222';
			ctx.fillRect(10,10,150,10);
			
			ctx.fillStyle='#00ff00';
			ctx.fillRect(10,10,150 * Game.state.smart,10);
            
            
        },
		*/
		
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