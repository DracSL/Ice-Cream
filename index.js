const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background.png'
})

const gast1 = new Sprite({
  position: {
    x: 450,
    y: 400
  },
  imageSrc: './img/void.png'
})

const gast2 = new Sprite({
  position: {
    x: 550,
    y: 400
  },
  imageSrc: './img/void.png'
})

const gast3 = new Sprite({
  position: {
    x: 650,
    y: 400
  },
  imageSrc: './img/void.png'
})

const gast4 = new Sprite({
  position: {
    x: 750,
    y: 400
  },
  imageSrc: './img/void.png'
})

const gast1Text = new Sprite({
  position: {
    x: 445,
    y: 434
  },
  scale: 0.35,
  imageSrc: './img/void.png'
})

const gast2Text = new Sprite({
  position: {
    x: 545,
    y: 434
  },
  scale: 0.35,
  imageSrc: './img/void.png'
})

const gast3Text = new Sprite({
  position: {
    x: 645,
    y: 434
  },
  scale: 0.35,
  imageSrc: './img/void.png'
})

const gast4Text = new Sprite({
  position: {
    x: 745,
    y: 434
  },
  scale: 0.35,
  imageSrc: './img/void.png'
})

const erdbeer = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/void.png'
})

const schoki = new Sprite({
  position: {
    x: 0,
    y: 0
    
  },
  scale: 0.4,
  imageSrc: './img/Ice1.png'
})

const zitrone = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/Ice2.png'
})

const gast1Eis = new Sprite({
  position: {
    x: 465,
    y: 370
  },
  scale: 0.25,
  imageSrc: './img/void.png'
})

const gast2Eis = new Sprite({
  position: {
    x: 565,
    y: 370
  },
  scale: 0.25,
  imageSrc: './img/void.png'
})

const gast3Eis = new Sprite({
  position: {
    x: 665,
    y: 370
  },
  scale: 0.25,
  imageSrc: './img/void.png'
})

const gast4Eis = new Sprite({
  position: {
    x: 765,
    y: 370
  },
  scale: 0.25,
  imageSrc: './img/void.png'
})

const van = new Sprite({
  position: {
    x: -130,
    y: -145
  },
  imageSrc: './img/thevan2.png',
  scale: 1,
  framesMax: 1
})

const particle = new Sprite({
  position: {
    x: 600,
    y: 360
  },
  imageSrc: './img/void.png',
  scale: 1,
  framesMax: 14
})

const van1 = new Sprite({
  position: {
    x: -34,
    y: -65
  },
  imageSrc: './img/thevan1.png',
  scale: 0.9,
  framesMax: 1
})

const pom = new Fighter({
  position: {
    x: 580, 
    y: 435
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/pomAnim.png',
  framesMax: 8})


const player = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/samuraiMack/Idle.png',
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 157
  },
  sprites: {
    idle: {
      imageSrc: './img/samuraiMack/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './img/samuraiMack/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/samuraiMack/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/samuraiMack/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/samuraiMack/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/samuraiMack/Death.png',
      framesMax: 6
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const enemy = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './img/kenji/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 167
  },
  sprites: {
    idle: {
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/kenji/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/kenji/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})


const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}


function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  //player.update()
  //enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement
  /*

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  } */

  // Enemy movement 
  /*
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else {
    enemy.switchSprite('idle')
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  } */
}

function animate2() {
  window.requestAnimationFrame(animate)
  firstCustomer.update()
}

animate()
/*
window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
        case 's':
          keys.s.pressed = true
          player.lastKey = 's'
          break
      
      case 'w':
        player.velocity.y = -20
        break
      case ' ':
        player.attack()
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
        keys.s.pressed = false
        break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
}) */

//function stageOne()
const firstCustomer = new Fighter({
  position: {
    x: canvas.width/2,
    y: canvas.height/2
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './img/speechbubble.png',
  framesMax: 1,
  scale: 100,
  offset: {
    x: 0,
    y: 0
  }})
firstCustomer.imageSrc = './img/speechbubble.png'
firstCustomer.update()
firstCustomer.position.x = canvas.width/2
firstCustomer.position.y = canvas.height/2
firstCustomer.draw()
const customer1 = new Image()
customer1.src = './img/speechbubble.png'
c.drawImage(customer1, 33, 71, 104, 124, 21, 20, 87, 104)
animate2()

var test = false
var test2 = false
var stageOneOver = false



function update() {
  background.update()
  van1.update()
  if (!stageOneOver) {stageOne()}
  /* gast1.update()
  gast2.update()
  gast3.update()
  gast4.update()
  schoki.update() */


}

  




{}
var start = false

function stageOne()
{van.update()

/*  setTimeout(() => {
    test = true;
  }, 5000); */

  setTimeout(() => {
    start = true}
 , 80); 
 if (start) {vierFragen()}

}
var foodie = false
var stageOneChoiceBool = false

function vierFragen()
{
  pom.scale = 0.45
  //pom.position.y = 395
  //pom.position.x = 580
  pom.update()
  if (pom.position.y > 390) {pom.velocity.y = -0.25}
  else (pom.velocity.y = 0)
  
  van.update()
setTimeout(() => {foodie = true
StageOneChoice()}
, 2000)
if (foodie === true){

  gast1.update()
  gast1Text.update()

  gast2.update()
  gast2Text.update()
  gast3.update()
  gast3Text.update()
  gast4.update()
  gast4Text.update()

  /* schoki.scale = 0.25
  schoki.position.x = 565
  schoki.position.y = 370
  schoki.update() */
  particle.update()
  gast1Eis.update()
  gast2Eis.update()
  gast3Eis.update()
  gast4Eis.update()


 

  window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'm':
console.log("Mochi")
          break
        case 'a':
console.log("a")

          break
          case 's':
            break
        
  }})}

  
}


/* position Eis Customer 1   
schoki.position.x = 465
schoki.position.y = 370 */

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

var musicChoice = false
let randomName = "string"


function StageOneChoice()
{
if (!stageOneChoiceBool) {
stageOneChoiceBool = true

if (!musicChoice) {var audio = new Audio('audio/Continue.mp3');
audio.play()
musicChoice = true}

Choice1 = getRandom(4)
Choice2 = getRandom(4)
Choice3 = getRandom(4)
Choice4 = getRandom(4)
randomName = getRandomName()
setTimeout(() => {

gast1.image.src = './img/speechbubble.png'
gast1Eis.image.src = './img/Ice'+Choice1+'.png'
gast1Text.image.src = './img/Schrift'+Choice1+'.png'
var audio = new Audio('audio/Ice'+Choice1+'.mp3');
audio.play()
}, 2000)

setTimeout(() => {

  gast2.image.src = './img/speechbubble.png'
  gast2Eis.image.src = './img/Ice'+Choice2+'.png'
  gast2Text.image.src = './img/Schrift'+Choice2+'.png'
  var audio = new Audio('audio/Ice'+Choice2+'.mp3');
  audio.play()
  }, 3000)

  setTimeout(() => {

    gast3.image.src = './img/speechbubble.png'
    gast3Eis.image.src = './img/Ice'+Choice3+'.png'
    gast3Text.image.src = './img/Schrift'+Choice3+'.png'
    var audio = new Audio('audio/Ice'+Choice3+'.mp3');
    audio.play()
    }, 4000)

    setTimeout(() => {

      gast4.image.src = './img/speechbubble.png'
      gast4Eis.image.src = './img/Ice'+Choice4+'.png'
      gast4Text.image.src = './img/Schrift'+Choice4+'.png'
      var audio = new Audio('audio/Ice'+Choice4+'.mp3');
      audio.play()
      }, 5000)

      if (answered === false) {setTimeout(() => {

        firstStageAnswer()
        }, 6000)}
  
  

}
}
var answered = false
let buttonPromptsAllowed = false
function firstStageAnswer()
{if (!answered) {
  setTimeout(() => {gast4.image.src = './img/speechbubbleHidden.png'
  gast4Text.image.src ='./img/void.png'
  gast4Eis.image.src =   gast4Text.image.src ='./img/void.png'}, 100)

  setTimeout(() => {gast3.image.src = './img/speechbubbleHidden.png'
  gast3Text.image.src ='./img/void.png'
  gast3Eis.image.src =   gast3Text.image.src ='./img/void.png'}, 100)

  setTimeout(() => {gast2.image.src = './img/speechbubbleHidden.png'
  gast2Text.image.src ='./img/void.png'
  gast2Eis.image.src =   gast2Text.image.src ='./img/void.png'}, 100)

  setTimeout(() => {gast1.image.src = './img/speechbubbleHidden.png'
  gast1Text.image.src ='./img/void.png'
  gast1Eis.image.src =   gast1Text.image.src ='./img/void.png'
  timeToAnswer()
  buttonPromptsAllowed = true
  
}, 100)}


}

function timeToAnswer() {
  // Wait for the rainbow image to load
   // After the rainbow image has loaded, start the animation
    animateRainbow();
    
    // After 3 seconds, move to the next round
    setTimeout(() => {
      nextRound();
      buttonPromptsAllowed = false
    }, 3000);
  };

var streetsServed = 0

function nextRound() {
  // Reset choices and prepare for the next round
  correctAnswersPerStage = 0
  streetsServed += 1
  resetMoneyGravity(moneyParticle)
  resetMoneyGravity(moneyParticle2)
  function hideGuest(gast, gastText, gastEis) {
  gast.image.src = './img/void.png';
  gastText.image.src = './img/void.png';
  gastEis.image.src = './img/void.png';
}

setTimeout(() => hideGuest(gast4, gast4Text, gast4Eis), 100);
setTimeout(() => hideGuest(gast3, gast3Text, gast3Eis), 100);
setTimeout(() => hideGuest(gast2, gast2Text, gast2Eis), 100);
setTimeout(() => {
  hideGuest(gast1, gast1Text, gast1Eis);

}, 100);
  stageOneChoiceBool = false;
  answered = false;
  StageOneChoice()
  guestNum = 1;

  // Clear previous choices or update as needed
  
  // Move to the next stage or perform any other necessary actions
  console.log('Moving to the next round...')
  console.log('$chmackos is ' + Moneyz)
  console.log('Score is ' + Score);}


var yourAnswer = -1;
var answeredNum = 0;
var guestNum = 1; // Variable for Gastnamen
var buttonpressed = false;
var servedGuests = 0

function handleAnswer(choice) {

  if (buttonPromptsAllowed) {
  if (buttonpressed) {
    return; // Do nothing if a button is already pressed
  }

  buttonpressed = true;
  answeredNum += 1;

  switch (guestNum) {
    case 1:
      handleGuestAnswer(gast1, gast1Eis, Choice1);
      break;
    case 2:
      handleGuestAnswer(gast2, gast2Eis, Choice2);
      break;
    case 3:
      handleGuestAnswer(gast3, gast3Eis, Choice3);
      break;
    case 4:
      handleGuestAnswer(gast4, gast4Eis, Choice4);
      break;
  }

  guestNum += 1;
  yourAnswer = -1;
  
}}
let correctAnswersPerStage = 0
let Score = 0
let Moneyz = 0

function handleGuestAnswer(gast, gastEis, correctChoice) {
  if (yourAnswer === correctChoice) {
    gast.image.src = './img/rightchoice.png';
    Score += 50
    Moneyz += 1.50
    correctAnswersPerStage += 1
    happyDing() 
    var audio = new Audio('audio/correct.mp3');
    audio.play()
    particle.position.x = gast.position.x - 30
    particle.image.src = './img/particle.png'
    servedGuests +=1

    setTimeout(() => {
      particle.image.src = './img/void.png'
      gast.image.src = './img/void.png';
      moneyParticle.position.x = gast.position.x
      moneyParticle.position.y = gast.position.y
      moneyParticle.velocity.x += 0.4
      moneyParticle.velocity.y = -5.5
      moneyParticle2.position.x = gast.position.x
      moneyParticle2.position.y = gast.position.y
      moneyParticle2.velocity.x -= 0.4
      moneyParticle2.velocity.y = -5
}
      
   , 333)
    ;
  } else {
    gast.image.src = './img/wrongchoice.png';
    Score -= 50
    soundbit = getRandom(2)
    var audio = new Audio('audio/dogwhine'+soundbit+'.mp3');
    audio.play()
    particle.position.x = gast.position.x - 30
    particle.image.src = './img/particle2.png'
    setTimeout(() => {
      particle.image.src = './img/void.png'}
   , 333)
  }

  gastEis.image.src = './img/Ice' + correctChoice + '.png';
}

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'v':
      yourAnswer = 3;
      handleAnswer();
      break;
    case 'c':
      yourAnswer = 1;
      handleAnswer();
      break;
    case 's':
      yourAnswer = 0;
      handleAnswer();
      break;
    case 'l':
      yourAnswer = 2;
      handleAnswer();
      break;
  }
});

window.addEventListener('keyup', () => {
  buttonpressed = false;
});

function happyDing() {if (correctAnswersPerStage === 4){
  setTimeout(() => {
var audio = new Audio('audio/success.mp3');
audio.play()
  }, 300);

correctAnswersPerStage = 0}}


const rainbow = new Image();
rainbow.src = 'img/rainbow.png';

const originalImageWidth = 10; // Original width of the image
const originalImageHeight = 37; // Original height of the image
const targetWidth = 540; // Target width of the stretched image

const initialX = 340; // Initial x position of the image
const initialY = 180; // Initial y position of the image

const animationDuration = 6000; // 3 seconds
const framesPerSecond = 60;
const totalFrames = (animationDuration / 1000) * framesPerSecond;



const chaser = new Sprite({
  position: {
    x: 300,
    y: 145
  },
  imageSrc: './img/chaser.png',
  framesMax: 4,
  scale: 0.4
})

const moneyParticle = new Fighter({
  position: {
    x: 490,
    y: 775
  },
  velocity: {
    x: 0,
    y: 0
  },
  imageSrc: './img/moneyz.png',
  framesMax: 12,
  scale: 1
}) 
const moneyParticle2 = new Fighter({
  position: {
    x: 510,
    y: 795
  },
  velocity: {
    x: 0,
    y: 0
  },
  imageSrc: './img/moneyz2.png',
  framesMax: 12,
  scale: 0.8
}) 

const timeFont = new Sprite({
  position: {
    x: 490,
    y: 175
  },
  imageSrc: './img/time.png',
  framesMax: 1,
  scale: 0.8
})

const eis= new Image()
eis.src = './img/eis.png'


let currentFrame = 0;

function animateRainbow() {
  const widthIncrement = (targetWidth - originalImageWidth) / totalFrames;
  const currentWidth = originalImageWidth + widthIncrement * currentFrame;
 // const currentHeight = (currentWidth / originalImageWidth) * originalImageHeight;
 const chaserPosition =  chaser.position.x + currentWidth - originalImageWidth

 c.drawImage(eis, 830, 160, 66, 77);
 c.drawImage(
  timeFont.image,
  timeFont.framesCurrent * ( timeFont.image.width /  timeFont.framesMax),
  0,
  330,
  timeFont.image.height,
  timeFont.position.x,
  timeFont.position.y,
  ( timeFont.image.width /  timeFont.framesMax) *  timeFont.scale,
  timeFont.image.height *  timeFont.scale)
  // c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(rainbow, initialX, initialY, currentWidth, originalImageHeight);

  c.fillStyle = 'rgba(255, 255, 255, 0)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  //chaser
  c.drawImage(
    chaser.image,
    chaser.framesCurrent * ( chaser.image.width /  chaser.framesMax),
    0,
    840 /  4,
    chaser.image.height,
    chaserPosition,
    chaser.position.y,
    ( chaser.image.width /  chaser.framesMax) *  chaser.scale,
    chaser.image.height *  chaser.scale)
    chaser.animateFrames()
    moneyParticle.update()
    moneyParticle2.update()
    moneyGravity(moneyParticle2)
    moneyGravity(moneyParticle)
    statsDisplay()

  

 

  currentFrame++;

  

  // Reset the animation if it has completed
  if (currentFrame > totalFrames) {
    currentFrame = 0;
  } else {
    requestAnimationFrame(animateRainbow);
  }
}

function moneyGravity(money) {
 money.velocity.y += 0.2}

 function resetMoneyGravity(money) {
  money.velocity.y = 0
  money.velocity.x = 0
 }

 function statsDisplay() {

    document.querySelector('#moneyMade').innerHTML = "$chmackos earned: " + Moneyz
    document.querySelector('#score').innerHTML = "Score: " + Score
    document.querySelector('#customersServed').innerHTML = "Customers served: " + servedGuests
    document.querySelector('#streetsServed').innerHTML = "Streets served: " + streetsServed
    document.querySelector('#currentStreet').innerHTML = randomName
 }














 // Straßennamen

 const cutePrefixes = [
  "Cuddly",
  "Fluffy",
  "Floofer",
  "Adorable",
  "Charming",
  "Whiskerful",
  "Snuggly",
  "Lovable",
  "Playful",
  "Delightful",
  "Sweet",
  "Bouncy",
  "Furry",
  "Tiny",
  "Cheerful",
  "Giggly",
  "Silly",
  "Joyful",
  "Ticklish",
  "Precious",
  "Chirpy",
  "Enchanting",
  "Sunny",
  "Bubbly",
  "Clever",
  "Dainty",
  "Dazzling",
  "Chipper",
  "Sparkly",
  "Pawfect",
  "Whimsical",
  "Snazzy",
  "Squishy",
  "Twinkly",
  "Dreamy",
  "Merry",
  "Snoot",
  "Flower",
  "Sprinkly",
  "Quirky",
  "Squeaky",
  "Purrfect",
  "Gleeful",
  "Scrimtchy",
  "Tippytap",
  "Blossom",
  "Buttercup",
  "Snoozy",
  "Doodlebug",
  "Dizzy",
  "Gummy",
  "Flippity",
  "Blinkie",
  "Bumble",
  "Honey",
  "Luna",
  "Pickle",
  "Zigzag",
  "Snicker",
  "Noodle",
  "Boop",
  "Scooter",
  "Wiggly",
  "Choco",
  "Cuddly",
  "Fluffy",
  "Adorable",
  "Charming",
  "Whiskerful",
  "Snuggly",
  "Lovable",
  "Playful",
  "Delightful",
  "Sweet",
  "Bouncy",
  "Furry",
  "Tiny",
  "Cheerful",
  "Giggly",
  "Silly",
  "Joyful",
  "Ticklish",
  "Precious",
  "Chirpy",
  "Enchanting",
  "Sunny",
  "Bubbly",
  "Clever",
  "Dainty",
  "Dazzling",
  "Chipper",
  "Sparkly",
  "Pawfect",
  "Whimsical",
  "Snazzy",
  "Squishy",
  "Twinkly",
  "Dreamy",
  "Merry",
  "Sprinkly",
  "Quirky",
  "Squeaky",
  "Purrfect",
  "Gleeful",
  "Doodle",
  "Blossom",
  "Buttercup",
  "Snoozy",
  "Doodlebug",
  "Dizzy",
  "Gummy",
  "Flippity",
  "Blinkie",
  "Bumble",
  "Honey",
  "Luna",
  "Pickle",
  "Zigzag",
  "Snicker",
  "Noodle",
  "Boop",
  "Scooter",
  "Wiggly",
  "Choco",
  "Zoomie",
];



// Example usage: Combine with street name suffixes
const streetNameSuffixes = [
  "Ave.",
  "Street",
  "Lane",
  "Road",
  "Way",
  "Blvd",
  "Square",
  "Court",
  "Drive",
  "Place",
];



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(cutePrefixes);
shuffleArray(streetNameSuffixes);


function getRandomName() {
  const combinedNames = cutePrefixes.flatMap((prefix) =>
    streetNameSuffixes.map((suffix) => `${prefix} ${suffix}`)
  );

  // Shuffle the combined names array
  shuffleArray(combinedNames);

  // Return a random name
  return combinedNames[Math.floor(Math.random() * combinedNames.length)];
}

// Example usage
;
console.log(randomName);
