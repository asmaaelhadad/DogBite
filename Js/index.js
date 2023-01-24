const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const startButton = document.querySelector(`#start-button`)
const bgImg = new Image()
bgImg.src = '../images/road.png'

const runner = new Image()
runner.src = '../images/runner.png'


//let bgImgy3= -canvas.height * 2 ;
let bgImgy= 0;
let bgImgy2= 0;
let bgImgx= 0;
let bgImgx2= -canvas.width;
//let bgImgx3= -canvas.width ;
const dogWidth = 40
const dogHeight = 80
let animatedId ;
let gameOver = false ;
let runnerx= 600;
let runnery= 200;

class Obstacle {
  constructor(xPos, yPos, width, height) {
    this.xPos = xPos
    this.yPos = yPos
    this.width = width
    this.height = height
  }}

window.addEventListener('load',() =>{
canvas.style.display= 'none' 
 startButton.addEventListener('click',()=>{

startGame();

 })
    const startGame = () => {
    
        canvas.style.display= 'block' 
        document.querySelector('.game-intro').style.display = 'none'
    animate()
  }
/*draw() {
    ctx.beginPath()
    ctx.fillStyle = 'tomato'
    this.yPos += 2
    ctx.rect(this.xPos, this.yPos, this.width, this.height)
    ctx.fill()
    ctx.closePath()
  }*/
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bgImg, bgImgx, bgImgy, canvas.width, canvas.height)
   ctx.drawImage(bgImg, bgImgx2, bgImgy2, canvas.width, canvas.height)
    ctx.drawImage(runner,runnerx , runnery, 20, 50)

    // ctx.drawImage(bgImg, bgImgx3, bgImgy3, canvas.width, canvas.height)
    
    bgImgx += 2;
    bgImgx2 += 2;
    //runnery += 1;
   // bgImgx3 += 2;
  if (bgImgx > canvas.width){

       bgImgx = -canvas.width;
      
    }
    if (bgImgx2> canvas.width){

      bgImgx2 = -canvas.width;
    
    }
  
  

if (gameOver) {
  cancelAnimationFrame(animateId)
} else {
  animateId = requestAnimationFrame(animate)
}}
})
