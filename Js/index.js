const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const startButton = document.querySelector(`#start-button`)
const bgImg = new Image()
bgImg.src = '../images/road.png'
/*const bg2 = new Image()
bg2.src = '../images/bg.png'*/

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

class Obstacles {
  constructor(xPos, yPos, width, height) {
    this.xPos = xPos  
    this.yPos = yPos
    this.width = width
    this.height = height
  }
   draw()  {
    ctx.beginPath()
    ctx.fillStyle = 'tomato'
    this.xPos += 5
    ctx.rect(this.xPos, this.yPos, this.width, this.height)
    ctx.fill()
    ctx.closePath()
  }
}
let obst = [new Obstacles(0, 0,25 ,25 ), new Obstacles(20, 20,25 ,25)]

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

 

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bgImg, bgImgx, bgImgy, canvas.width, canvas.height)
   ctx.drawImage(bgImg, bgImgx2, bgImgy2, canvas.width, canvas.height)
    ctx.drawImage(runner,runnerx , runnery, 20, 50)

    // ctx.drawImage(bgImg, bgImgx3, bgImgy3, canvas.width, canvas.height)
    obst.forEach(obstacle => {
      //obstacle.checkCollision()
      obstacle.draw();
     /* obstacle.xPos += 10;
      obstacle.yPos += 10 ;
      obstacle.width +=10 ;
      obstacle.height += 10 ;*/
    })
   // obstacles.push(new Obstacle(canvas.width * Math.random(), -50, 50, 50))
//17 , 70, 20 , 20
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
  //if (bgImgy2 < 0 ){bgImgy2 -= 1 ;}
  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
         if (runnery< canvas.height - 50) {runnery += 0.1 ;}
    }
  })
    
    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
         if (runnerx > 0){ runnerx -= 0.1 ;} }
      if (event.key === 'ArrowRight') {
         if (runnerx < canvas.width -20) {runnerx += 0.1 ;}
   } }) 
   
   
 

if (gameOver) {
  cancelAnimationFrame(animateId)
} else {
  animateId = requestAnimationFrame(animate)
}}
})
