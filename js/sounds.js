export default function Sounds () {

    const tree = new Audio("sounds/Floresta.wav")
    const rain = new Audio("sounds/Chuva.wav")
    const coffee = new Audio("sounds/Cafeteria.wav")
    const fire = new Audio("sounds/Lareira.wav")
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const timerIsFinished = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    tree.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }

    function treePlay(){
        tree.play()
    }

    function treePause(){
        tree.pause()
    }

    function rainPlay(){
        rain.play()
    }

    function rainPause(){
        rain.pause()
    }

    function coffeePlay(){
        coffee.play()
    }

    function coffeePause(){
        coffee.pause()
    }

    function firePlay(){
        fire.play()
    }

    function firePause(){
        fire.pause()
    }

    function timerFinished (){
        timerIsFinished.play()
    }

    return{
        treePlay,
        pressButton,
        treePause,
        rainPlay,
        rainPause,
        coffeePlay,
        coffeePause,
        firePlay,
        firePause,
        timerFinished
    }







}