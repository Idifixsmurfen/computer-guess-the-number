let MAX_NUMBER = 100
let MIN_NUMBER = 0

let guess

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    //setMessage(`Is it ${guess-- -1}?`)
    //guess = Math.floor (Math.random () * 101 )

    guess = (MAX_NUMBER + MIN_NUMBER) / 2
    setMessage(`Is it ${guess}?`)
    guess = MAX_NUMBER
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    //setMessage(`Is it ${guess++ +1}?`)
    //guess = Math.floor (Math.random () * 101 )
    
    guess = (MAX_NUMBER + MIN_NUMBER) / 2
    setMessage(`Is it ${guess}?`)
    guess = MIN_NUMBER
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt Correct?
    setMessage("Woho! :)")
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = 50

    setMessage(`Is it ${guess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

