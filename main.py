def on_gesture_free_fall():
    basic.show_icon(IconNames.HEART)
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_forever():
    led.plot_brightness(4, 0, (input.acceleration(Dimension.X) + 1023) / 8)
    led.plot_brightness(0, 0, (1023 - input.acceleration(Dimension.X)) / 8)
    led.plot_brightness(2, 2, 255 - input.light_level())
basic.forever(on_forever)
