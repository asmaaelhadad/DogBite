const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const startButton = document.querySelector(`#start-button`)
const bgImg = new Image()
bgImg.src = '../images/road.png'

const runner = new Image()
runner.src = '../images/runner.jpg'



const dogWidth = 40
const dogHeight = 80
let animatedId ;
let gameover = false ;



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
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(runner,100 , 160, 60, 100)



if (gameOver) {
  cancelAnimationFrame(animateId)
} else {
  animateId = requestAnimationFrame(animate)
}}
})
