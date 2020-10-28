input.onButtonPressed(Button.A, function () {
    counter += 1
})
input.onButtonPressed(Button.B, function () {
    countdown = true
})
let countdown = false
let counter = 3
countdown = false
basic.forever(function () {
    basic.showNumber(counter)
    if (countdown == true) {
        basic.pause(1000)
        counter += -1
    }
    if (counter <= 0) {
        countdown = false
        music.ringTone(262)
    }
})
