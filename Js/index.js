const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const startButton = document.querySelector(`#start-button`)
const bgImg = new Image()
bgImg.src = '../images/road.png'
const dOg = new Image()
dOg.src = './images/dog.png'
const runner = new Image()
runner.src = './images/runner.png'
//let bgImgy3= -canvas.height * 2 ;
let bgImgy= 0; 
let bgImgy2= 0;
let bgImgx= 0;
let bgImgx2= -canvas.width;
//let bgImgx3= -canvas.width ;
const dogWidth = 40
const dogHeight = 80
let animateId ;
let gameOver = false ;
let runnerx= 450;
let runnery= 115;
let score = 5 ;


               
class Obstacles {
  constructor(xPos, yPos, width, height, image) {
    this.xPos = xPos  
    this.yPos = yPos
    this.width = width
    this.height = height
   // this.image = image
  }
   draw()  {
     ctx.beginPath()
     ctx.fillStyle = 'brown'
    // this.xPos += 5
    //this.yPos += 0.5
    // ctx.rect(this.xPos, this.yPos, this.width, this.height)
    ctx.drawImage (dOg,this.xPos , this.yPos, this.width, this.height)
    ctx.fill()
     ctx.closePath()
            }
                }
let obst = [new Obstacles(-900, 420,100 ,50, dOg ),
           new Obstacles(-20, 400,50 ,55,dOg),
           new Obstacles(-675, 200,50 ,50, dOg ),
           new Obstacles(-460, 320,25 ,25, dOg),
           new Obstacles(-50, 280,25 ,25, dOg ), 
           new Obstacles(-1000, 280,25 ,25, dOg),
           new Obstacles(1420, 150,25 ,25, dOg ),
           new Obstacles(-800, 420,25 ,25,dOg ),
           new Obstacles(-50, 280,25 ,25, dOg ), 
           new Obstacles(-1000, 280,25 ,25, dOg),
           new Obstacles(1420, 150,25 ,25, dOg ),
           new Obstacles(-800, 420,25 ,25,dOg )];
let obstR =[new Obstacles(900, 320,70 ,75, dOg ),
           new Obstacles(1000, 400,100 ,100,dOg),
           new Obstacles(675, 400,25 ,25, dOg ),
           new Obstacles(900, 420,100 ,50, dOg ),
           new Obstacles(20, 400,50 ,55,dOg),
           new Obstacles(675, 200,50 ,50, dOg ),
           new Obstacles(460, 320,25 ,25, dOg),
           new Obstacles(50, 280,25 ,25, dOg ), 
           new Obstacles(1000, 280,25 ,25, dOg),
           new Obstacles(1420, 150,75 ,75, dOg ),
           new Obstacles(800, 100,75 ,75,dOg ),
           new Obstacles(460, 100,25 ,25, dOg),
           new Obstacles(150, 280,25 ,25, dOg ), 
           new Obstacles(1000, 280,25 ,25, dOg),
           new Obstacles(1420, 150,25 ,25, dOg ),
           new Obstacles(800, 420,25 ,25,dOg )]

window.addEventListener('load',() =>{               
canvas.style.display= 'none' 
document.querySelector('.gameover').style.display = 'none'
 startButton.addEventListener('click',()=>{
  startGame();
             })
  
                                  
function startGame () {
        canvas.style.display= 'block' 
        document.querySelector('.game-intro').style.display = 'none'
        document.querySelector('.gameover').style.display = 'none'

        animate()
                       }
 function gameover () {
                        canvas.style.display= 'none' 
                        document.querySelector('.gameover').style.display = 'block'
                        restart.addEventListener('click', () => {
                          score = 5;
                          gameOver= false;
                         runnerx= 600;
                          runnery= 200;
                          startGame(); })}
 
  //Game function
  const animate = () => {
  
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bgImg, bgImgx, bgImgy, canvas.width, canvas.height)
  // ctx.drawImage(bgImg, bgImgx2, bgImgy2, canvas.width, canvas.height)
    ctx.drawImage(runner,runnerx , runnery, 20, 50)

    // ctx.drawImage(bgImg, bgImgx3, bgImgy3, canvas.width, canvas.height)
    obst.forEach(obstacle => {
      obstacle.draw();
      obstacle.xPos += 3; 
      if ( obstacle.xPos > canvas.width/3 ){ obstacle.xPos = (-200);}
      //if (runnerx+20 >= obstacle.xPos || runnery+50== obstacle.yPos){score -= 1}
       // if (score < 1){gameOver = true;}
      // else if (canvas.width <obstacle.xPos < canvas.width ){ obstacle.xPos += 200;}
      // if (  canvas.width > obstacle.xPos > (canvas.width-50) ){ obstacle.xPos =+ 200;}
      if (runnerx +20 >= obstacle.xPos && runnery+50 >= obstacle.yPos
        &&  runnery <= obstacle.yPos + obstacle.height &&  runnerx <= obstacle.xPos + obstacle.width 
        ){
          score -= 1 ;
          obstacle.xPos = canvas.width + 200
        console.log(score );}
        
        if (score < 1){gameOver = true;}
        
    })

    obstR.forEach(obstacle1 => {
      obstacle1.draw();
      obstacle1.xPos -= 3;
       if ( obstacle1.xPos < (canvas.width / 3) *2 ){ obstacle1.xPos = canvas.width + 200;}
      // else if (canvas.width <obstacle.xPos < canvas.width ){ obstacle.xPos += 200;}
      // if (  canvas.width > obstacle.xPos > (canvas.width-50) ){ obstacle.xPos =+ 200;}
      if (runnerx +20 >= obstacle1.xPos && runnery+50 >= obstacle1.yPos
        &&  runnery <= obstacle1.yPos + obstacle1.height &&  runnerx <= obstacle1.xPos + obstacle1.width 
        ){
          score -= 1 ;
          obstacle1.xPos = canvas.width + 200
        console.log(score );}
        
        if (score < 1){
          gameOver = true; 
                       }
     })
   
   // obstacles.push(new Obstacle(canvas.width * Math.random(), -50, 50, 50))
    
//    bgImgx += 2;
  //  bgImgx2 += 2;
  //runnery += 1;
   // bgImgx3 += 2;
   /* if (bgImgx > canvas.width){

       bgImgx = -canvas.width;
      }
    if (bgImgx2> canvas.width){

      bgImgx2 = -canvas.width;
     }*/
  //if (bgImgy2 < 0 ){bgImgy2 -= 1 ;}
 
 // buttons
  document.addEventListener('keydown', event => {
         if (event.key === 'ArrowDown') {
         if (runnery  <= (canvas.height - 50)) {runnery += 0.05 ;}
    }    
         if (event.key === 'ArrowUp') {
         if (runnery  <= ( canvas.height )) {runnery -= 0.05 ;}
    }
  })
    
    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft') {
        if (runnerx >= 0){ runnerx -= 0.05 ;} }
        if (event.key === 'ArrowRight') {
        if (runnerx <= canvas.width -20) {runnerx += 0.05 ;} }
   }) 
   
   
 
//gameOver
/*function gameOver()  {
  document.querySelector('.game-intro').style.display = 'none'
  cancelAnimationFrame(animateId)
}*/
//animateId = requestAnimationFrame(animate)
if (gameOver) {
  cancelAnimationFrame(animateId)
  gameover();
              }
 else {
 animateId = requestAnimationFrame(animate)
      }
}

})
  