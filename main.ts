let direction = 1
let posX = 0
led.plot(posX, 0)
basic.forever(function () {
    basic.pause(1000)
    led.unplot(posX, 0)
    posX += direction
    if (posX == 4) {
        direction = -1
    } else if (posX == 0) {
        direction = 1
    }
    led.plot(posX, 0)
})
