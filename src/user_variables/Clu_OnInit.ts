import * as dIn from "../node_modules/grenton-ts/dist/digital-in-din/fv01_02/din"
import * as dOut from "../node_modules/grenton-ts/dist/io-module-din-8/fv02_02/dout";
import { getVariable, setVariable } from "../node_modules/grenton-ts/dist/core/user-variables";
import { logInfo } from "../node_modules/grenton-ts/dist/log";

/*
    This script demonstrates how to read and write user variables.
    Scenario: When the kitchen switch is clicked, the light is toggled and a click counter,
    stored in a user variable named "KitchenClickCount", is incremented and persisted.
    Create a user variable with that name in Object Manager before deploying this script.
*/


declare const DIN1907: dIn.DInRaw; //Digital input Object Id, replace it with your own Object Id
declare const DOU5288: dOut.DOutRaw; //Digital output Object Id, replace it with your own Object Id

const kitchenSwitch = new dIn.DIn(DIN1907); //Creates a new instance of the digital input using the Object Id
const kitchenLight = new dOut.DOut(DOU5288); //Creates a new instance of the digital output using the Object Id

const CLICK_COUNT_VARIABLE = "KitchenClickCount"; // Name of the user variable defined in Object Manager

kitchenSwitch.addOnClick(() => {
    kitchenLight.switch(0); // Switches the light on or off when the switch is clicked

    const clickCount = (getVariable(CLICK_COUNT_VARIABLE) ?? 0) + 1; // Read the current value, defaulting to 0 the first time
    setVariable(CLICK_COUNT_VARIABLE, clickCount); // Persist the updated value back to the user variable

    logInfo(`Kitchen switch clicked ${clickCount} times`); // Log the current click count to the telnet console
})
