basic.forever(function () {
    led.plotBrightness(4, 2, Math.constrain(input.acceleration(Dimension.X), -64, 192) + 64)
    led.plotBrightness(0, 2, 64 - Math.constrain(input.acceleration(Dimension.X), -192, 64))
    led.plotBrightness(2, 0, 64 - Math.constrain(input.acceleration(Dimension.Y), -192, 64))
    led.plotBrightness(2, 4, Math.constrain(input.acceleration(Dimension.Y), -64, 192) + 64)
    led.plotBrightness(2, 2, 255 - Math.constrain(Math.abs(input.acceleration(Dimension.X)), 0, 128) / Math.constrain(input.acceleration(Dimension.Y), Math.abs(input.acceleration(Dimension.Y)), 128))
})
