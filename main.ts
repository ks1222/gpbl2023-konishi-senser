OLED.init(128, 64)
let dust = 0
let rain = 0
let temp = 0
basic.forever(function () {
    dust = Environment.ReadDust(DigitalPin.P16, AnalogPin.P1)
    rain = Environment.ReadWaterLevel(AnalogPin.P1)
    temp = input.temperature()
    OLED.clear()
    OLED.writeString("weather board")
    OLED.newLine()
    OLED.writeString("dust (ug/m3)")
    OLED.writeNumNewLine(dust)
    OLED.writeString("water level")
    OLED.writeNumNewLine(rain)
    OLED.writeString("temperature")
    OLED.writeNumNewLine(temp)
    basic.pause(1000)
})
