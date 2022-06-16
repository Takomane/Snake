const canvas = document.querySelector('canvas'); //set canvas
const ctx = canvas.getContext('2d'); //Set the context to 2d
canvas.width = 800 ; //Set the width of the canvas
canvas.height = 600; //Set the height of the canvas
let speed = 7; //Set the speed of the snake
let xVelocity = 0;
let yVelocity = 0;

function drawGame() { //Draw the game
    setTimeout(drawGame, 1000/ Speed);
    changePlayerPosition();
}
class Sprite { //class to use for the snake and food
    constructor(position) { //arguement for position of the sprite for the individual ones
        this.position = position; //position of the sprite
    }
        draw(){
            ctx.fillStyle = "black"; //set the color of the sprite
            ctx.fillRect(this.position.x, this.position.y, 20, 20); //size the sprite
}
}

const player = new Sprite({ //creates the player
    x: 400, y: 350 //Snake start position
});

player.draw() //calls the draw function to the player

const food = new Sprite({ //creates the food
    x: Math.floor(Math.random() * (canvas.width - 20)), //random x position for the food
    y: Math.floor(Math.random() * (canvas.height - 20)) //random y position for the food
});

food.draw() //calls the draw function to the food

function changePlayerPosition() { //function to change the position of the player
    player.position.x += xVelocity;
    player.position.y += yVelocity;
}

document.body.addEventListener('keydown', keyDown);
function keyDown(event){
    if(event.keyCode === 38){   //up
        xVelocity = 0;
        yVelocity = -1;
    }
}