const canvas = document.querySelector('canvas'); //set canvas
const ctx = canvas.getContext('2d'); //Set the context to 2d
canvas.width = 800 ; //Set the width of the canvas
canvas.height = 600; //Set the height of the canvas

class Sprite { //class to use for the snake and food
    constructor(position) { //arguement for position of the sprite for the individual ones
        this.position = position; //position of the sprite
    }
        draw(){
            ctx.fillStyle = "black"; //set the color of the sprite
            ctx.fillRect(this.position.x, this.position.y, 20, 20); //size the sprite
}
}

const player = new Sprite({
    x: 400, y: 350
}); //Snake start position

player.draw() //calls the draw function to the player

const food = new Sprite({
    x: Math.floor(Math.random() * (canvas.width - 20)), //random x position for the food
    y: Math.floor(Math.random() * (canvas.height - 20)) //random y position for the food
});

food.draw() //calls the draw function to the food

console.log(player);