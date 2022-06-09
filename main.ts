basic.forever(function () {
    led.plotBrightness(4, 2, (input.acceleration(Dimension.X) + 1023) / 8)
    led.plotBrightness(0, 2, (1023 - input.acceleration(Dimension.X)) / 8)
    led.plotBrightness(2, 0, (1023 - input.acceleration(Dimension.Y)) / 8)
    led.plotBrightness(2, 4, (input.acceleration(Dimension.Y) + 1023) / 8)
    led.plotBrightness(2, 2, 255 - input.lightLevel())
})
