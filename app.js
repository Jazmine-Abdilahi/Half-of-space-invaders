document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const resultDisplay = document.querySelector('#result')
    let width = 15
    let currentShooterIndex = 202
    let currentInvaderIndex = 0
    let alienInvadersTakenDown = []
    let result = 0
    let direction = 1
    let invaderId
 
    //define the alien invaders
    const alienInvaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
      ]
 
    //draw the alien invaders
    alienInvaders.forEach( invader => squares[currentInvaderIndex + invader].classList.add('invader'))
 
    //draw the shooter
    squares[currentShooterIndex].classList.add('shooter')
 
    //move the shooter along a line
    function moveShooter(e) {
      squares[currentShooterIndex].classList.remove('shooter')
      switch(e.keyCode) {
        case 37:
          if(currentShooterIndex % width !== 0) currentShooterIndex -= 1
          break
        case 39:
          if(currentShooterIndex % width < width - 1) currentShooterIndex += 1
          break
  const grid = document.querySelector('.grid')
  const resultsDisplay = document.querySelector('.results')
  let currentShooterIndex = 202
  let width = 15
  let direction = 1
  let invadersId
  let goingRight = true
  let aliensRemoved = []
  let results = 0
 
  for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
  }
 
  const squares = Array.from(document.querySelectorAll('.grid div'))
 
  const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
  ]
 
  function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
      if(!aliensRemoved.includes(i)) {
        squares[alienInvaders[i]].classList.add('invader')
      }
      squares[currentShooterIndex].classList.add('shooter')
    }
    document.addEventListener('keydown', moveShooter)
 
    //move the alien invaders
    function moveInvaders() {
      const leftEdge = alienInvaders[0] % width === 0
      const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1
 
        if((leftEdge && direction === -1) || (rightEdge && direction === 1)){
          direction = width
        } else if (direction === width) {
        if (leftEdge) direction = 1
        else direction = -1
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
          squares[alienInvaders[i]].classList.remove('invader')
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
          alienInvaders[i] += direction
        }