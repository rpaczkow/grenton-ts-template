import * as dIn from "../node_modules/grenton-ts/dist/digital-in-din/fwType_02_fwApiVersion_01/din";
import * as dOut from "../node_modules/grenton-ts/dist/io-module-din-8/fwType_02_fwApiVersion_02/dout";
import * as pre from "../node_modules/grenton-ts/dist/clu-zwave-2/fwType_03_fwApiVersion_515/presence-sensor";

/*
    This script demonstrates how to control a light using a presence sensor.
    Scenario: The light switches on when presence is detected and switches off automatically after
    60 seconds of no presence. The presence sensor runs in ImpulseInput mode - each trigger from
    the contact resets the inactivity timeout instead of immediately switching off.
*/


declare const DIN4819: dIn.DInRaw; //Presence sensor contact - Digital input Object Id, replace it with your own Object Id
declare const PRE6713: pre.PresenceSensorRaw; //Presence sensor Object Id, replace it with your own Object Id
declare const DOU3948: dOut.DOutRaw; //Light - Digital output Object Id, replace it with your own Object Id

const garagePresenceSensorContact = new dIn.DIn(DIN4819);
const garagePresenceSensor = new pre.PresenceSensor(PRE6713);
const light = new dOut.DOut(DOU3948);

garagePresenceSensor.timeout = 60; // Switch off the light after 60 seconds without detecting presence
garagePresenceSensor.mode = pre.ModeType.ImpulseInput; // Each contact trigger resets the timeout instead of switching off immediately

garagePresenceSensorContact.addOnSwitchOff(() => {
    garagePresenceSensor.detectPresence(); // Trigger presence detection when the contact is opened
});

garagePresenceSensor.addOnSwitchOn(() => {
    light.switchOff(0); // Switch on the light when presence is detected
});

garagePresenceSensor.addOnSwitchOff(() => {
    light.switchOn(0); // Switch off the light after the timeout expires with no presence
});

garagePresenceSensor.start(); // Start the presence sensor