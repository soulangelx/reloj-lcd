function minutos2 () {
    if (segundos > 59) {
        segundos = 0
        minutos += 1
    }
}
function horas () {
    if (minutos > 59) {
        minutos = 0
        hora += 1
    } else if (hora > 23) {
        hora = 0
    }
}
let segundos = 0
let minutos = 0
let hora = 0
I2C_LCD1602.LcdInit(0)
hora = 22
minutos = 29
segundos = 0
loops.everyInterval(1000, function () {
    segundos += 1
})
basic.forever(function () {
    minutos2()
    horas()
    I2C_LCD1602.ShowNumber(hora, 0, 0)
    I2C_LCD1602.ShowString(":", 2, 0)
    I2C_LCD1602.ShowNumber(minutos, 3, 0)
    I2C_LCD1602.ShowString(":", 5, 0)
    I2C_LCD1602.ShowNumber(segundos, 6, 0)
    I2C_LCD1602.ShowString("" + input.temperature() + "°C", 10, 0)
})
