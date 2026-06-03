import * as dIn from "../node_modules/grenton-ts/dist/digital-in-din/fv02_01/din";
import * as dOut from "../node_modules/grenton-ts/dist/io-module-din-8/fv02_02/dout";

/*
    This script demonstrates how to use a digital input (DIn) to control a digital output (DOut). 
    When light switch clicked, it will switch on or off kitchen light.
    Use it as a starting template for your own Grenton project.
*/


declare const DIN1907: dIn.DInRaw; //Digital input Object Id, replace it with your own Object Id
declare const DOU5288: dOut.DOutRaw; //Digital output Object Id, replace it with your own Object Id

const kitchenSwitch = new dIn.DIn(DIN1907); //Creates a new instance of the digital input using the Object Id
const kitchenLight = new dOut.DOut(DOU5288); //Creates a new instance of the digital output using the Object Id

// Set up an event listener for when the digital input is clicked. When it is clicked, toggle the state of the digital output.
kitchenSwitch.addOnClick(() => {
    kitchenLight.switch(0);
})