def on_forever():
    led.plot_brightness(4,
        2,
        (Math.constrain(input.acceleration(Dimension.X), -256, 768) + 256) / 4)
    led.plot_brightness(0,
        2,
        (256 - Math.constrain(input.acceleration(Dimension.X), -768, 256)) / 4)
    led.plot_brightness(2,
        0,
        (256 - Math.constrain(input.acceleration(Dimension.Y), -768, 256)) / 4)
    led.plot_brightness(2,
        4,
        (Math.constrain(input.acceleration(Dimension.Y), -256, 768) + 256) / 4)
    led.plot_brightness(2,
        2,
        255 - Math.constrain(abs(input.acceleration(Dimension.X)), 0, 128) / Math.constrain(input.acceleration(Dimension.Y),
            abs(input.acceleration(Dimension.Y)),
            128))
basic.forever(on_forever)
