/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jet Lu
 * Created on: Mar 2026
 * This program will find the distance to an object using a sonar.
*/

// variable
let distance:number = 0

// startup
basic.showIcon(IconNames.Happy)

// find the distance with sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distance = sonar.ping(
    DigitalPin.P1, // trigger
    DigitalPin.P2, // echo
    PingUnit.Centimeters
  )
  basic.showString((distance) + " cm")
  basic.showIcon(IconNames.Happy)
})
