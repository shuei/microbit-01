basic.forever(function () {
    led.plotBrightness(4, 0, (input.acceleration(Dimension.X) + 1023) / 8)
    led.plotBrightness(0, 0, (1023 - input.acceleration(Dimension.X)) / 8)
    led.plotBrightness(2, 2, 255 - input.lightLevel())
})
