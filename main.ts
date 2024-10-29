let _4digit: grove.TM1637 = null
basic.forever(function () {
    _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
    _4digit.set(5)
    _4digit.show(input.lightLevel())
})
