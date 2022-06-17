const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800 ;
canvas.height = 600;
let speed = 7; //Set the speed

function drawGame() { //Draw the game
    setTimeout(drawGame, 1000/ Speed);
    changePlayerPosition();
}
class Sprite { //class to use for the snake and food
    constructor({position, velocity}) { //arguement for position of the sprite for the individual ones
        this.position = position;
        this.velocity = velocity;
        this.height = 20;
    }
        draw(){
            ctx.fillStyle = "black"; //set the color of the sprite
            ctx.fillRect(this.position.x, this.position.y, 20, this.height); //size the sprite
}
update() {
    this.draw()
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) { //stops sprites from going down off the screen
        this.velocity.y = 0; //IF position of sprite it greater than or equal to the height of the canvas, then the velocity will be changed to 0 ayeee loops
    }
    if (this.position.y + this.velocity.y <= 0) { //stops the sprite from going up off the screen
        this.velocity.y = 0;
    }
}
}

const player = new Sprite({
    position: {
    x: 400, y: 350 //Snake start position
},
    velocity: {
        x: 0, y: -1
    }
});


const food = new Sprite({
    position: {
    x: Math.floor(Math.random() * (canvas.width - 20)), //random x position for the food
    y: Math.floor(Math.random() * (canvas.height - 20)) //random y position for the food
},
velocity: {
    x: 0, y: 0
}
});

document.body.addEventListener('keydown', keyDown);
function keyDown(event){
    if(event.keyCode === 38){   //up
        xVelocity = 0;
        yVelocity = -1;
        console.log("click clack");
    }
    if(event.keyCode === 37){   //left
        xVelocity = -1;
        yVelocity = 0;
        console.log("click clack");
    }
    if(event.keyCode === 39){   //right
        xVelocity = 1;
        yVelocity = 0;
        console.log("click clack");
    }
    if(event.keyCode === 40){   //down
        xVelocity = 0;
        yVelocity = 1;
        console.log("click clack");
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    food.update();
}

animate();