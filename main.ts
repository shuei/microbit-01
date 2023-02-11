basic.forever(function () {
    led.plotBrightness(4, 2, (Math.constrain(input.acceleration(Dimension.X), -256, 768) + 256) / 4)
    led.plotBrightness(0, 2, (256 - Math.constrain(input.acceleration(Dimension.X), -768, 256)) / 4)
    led.plotBrightness(2, 0, (256 - Math.constrain(input.acceleration(Dimension.Y), -768, 256)) / 4)
    led.plotBrightness(2, 4, (Math.constrain(input.acceleration(Dimension.Y), -256, 768) + 256) / 4)
    led.plotBrightness(2, 2, 255 - Math.constrain(Math.abs(input.acceleration(Dimension.X)), 0, 128) / Math.constrain(input.acceleration(Dimension.Y), Math.abs(input.acceleration(Dimension.Y)), 128))
})
