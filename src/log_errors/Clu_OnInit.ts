import * as dIn from "../node_modules/grenton-ts/dist/digital-in-din/fv01_02/din"
import * as dOut from "../node_modules/grenton-ts/dist/io-module-din-8/fv02_02/dout";
import { logInfo, logWarning  } from "../node_modules/grenton-ts/dist/log";

/*
    This script demonstrates how to log errors or any other information to telnet (diagnostic view). 
    Scenario: When switch is clicked it will switch on/off light. It will also log a messages to the telnet console.
*/


logInfo("Clu_OnInit initialization started."); // Log a message to the telnet console when CLU i starting initialization.

declare const DIN1907: dIn.DInRaw; //Digital input Object Id, replace it with your own Object Id
declare const DOU5288: dOut.DOutRaw; //Digital output Object Id, replace it with your own Object Id

const kitchenSwitch = new dIn.DIn(DIN1907); //Creates a new instance of the digital input using the Object Id
const kitchenLight = new dOut.DOut(DOU5288); //Creates a new instance of the digital output using the Object Id

kitchenSwitch.addOnClick(() => {
    kitchenLight.switch(0); // Switches the light on or off when the switch is clicked
    logInfo("Kitchen switch clicked"); // Log a message to the telnet console when the switch is clicked
})

kitchenSwitch.addOnShortPress(() => {
    logWarning("Kitchen switch short pressed is not supported"); // Log a warning message to the telnet console when the switch is short pressed
});


kitchenLight.addOnSwitchOn(() => {
    logInfo("Kitchen light switched on"); // Log a message to the telnet console when the light is switched on
})

kitchenLight.addOnSwitchOff(() => {
    logInfo("Kitchen light switched off"); // Log a message to the telnet console when the light is switched off
})

logInfo("Clu_OnInit initialization completed."); // Log a message to the telnet console when CLU initialization is completed.