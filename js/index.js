import {
   treeCard,
   treeCardOff,
   treeCardOn,
   rainCard,
   rainCardOn,
   rainCardOff,
   coffeeCard,
   coffeeCardOff,
   coffeeCardOn,
   fireCard,
   fireCardOff,
   fireCardOn,
   buttonPlay,
   buttonStop,
   buttonAdd,
   buttonRemove,
   secondsDisplay,
   minutesDisplay,
} from "./elements.js"

import  Timer  from "./timer.js"

import  ToggleBgCard  from "./toggleCardColor.js"

import Sounds from "./sounds.js"

const sounds = Sounds ({

})

const timer = Timer ({ 
  secondsDisplay,
  minutesDisplay
})

const toggleBgCard = ToggleBgCard({
  treeCard,
  treeCardOn,
  treeCardOff,
  rainCard,
  rainCardOn,
  rainCardOff,
  coffeeCard,
  coffeeCardOn,
  coffeeCardOff,
  fireCard,
  fireCardOn,
  fireCardOff
})

treeCard.addEventListener('click', () => {
  toggleBgCard.toggleFillColorTree()
  if(treeCardOn.classList.contains('hide')){
    sounds.treePause()
  } else {
    sounds.treePlay()
  }
})
rainCard.addEventListener('click', ()=>{
  toggleBgCard.toggleFillColorRain()
  if(rainCardOn.classList.contains('hide')){
    sounds.rainPause()
  } else {
    sounds.rainPlay()
  }
})
coffeeCard.addEventListener('click', () => {
  toggleBgCard.toggleFillColorcoffee()
  if(coffeeCardOn.classList.contains('hide')){
    sounds.coffeePause()
  } else {
    sounds.coffeePlay()
  }
})
fireCard.addEventListener('click', () => {
  toggleBgCard.toggleFillColorfire()
  if(fireCardOn.classList.contains('hide')){
    sounds.firePause()
  } else {
    sounds.firePlay()
  }
})

buttonPlay.addEventListener('click', () => {
  sounds.pressButton()
  timer.countdown()
})

buttonStop.addEventListener('click', () => {
  sounds.pressButton()
  timer.stop()
})

buttonAdd.addEventListener('click', () => {
  sounds.pressButton()
  timer.addMinutes()
})

buttonRemove.addEventListener('click', () => {
  sounds.pressButton()
  timer.removeMinutes()
})

  


 
  