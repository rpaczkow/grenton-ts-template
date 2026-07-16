import * as dIn from "../../node_modules/grenton-ts/dist/digital-in-din/fwType_02_fwApiVersion_01/din";
import * as dOut from "../../node_modules/grenton-ts/dist/io-module-din-8/fwType_02_fwApiVersion_02/dout";

/*
    This script demonstrates how to toggle a light using a wall switch.
    Scenario: Every click on the switch toggles the light on or off.
*/


declare const DIN6061: dIn.DInRaw; //Switch - Digital input Object Id, replace it with your own Object Id
declare const DOU9906: dOut.DOutRaw; //Light - Digital output Object Id, replace it with your own Object Id

const lightSwitch = new dIn.DIn(DIN6061);
const light = new dOut.DOut(DOU9906);

lightSwitch.addOnClick(() => {
    light.switch(0); // Toggle the light on every click
});
