input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Angry)
    basic.clearScreen()
    basic.showIcon(IconNames.Skull)
    basic.clearScreen()
    basic.showIcon(IconNames.Ghost)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
    basic.showIcon(IconNames.Ghost)
})
basic.showLeds(`
    # . # . #
    # . # . #
    . # . # .
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . # . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # . . .
        # . . . .
        # # # . .
        `)
})
