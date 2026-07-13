import * as dOut from "../node_modules/grenton-ts/dist/io-module-din-8/fv02_02/dout";
import * as cal from "../node_modules/grenton-ts/dist/clu-zwave-2/fv515_03/calendar";
import { CluZWave2, CluZWave2Raw } from "../node_modules/grenton-ts/dist/clu-zwave-2/fv515_03/clu-zwave-2";

/*
    This script demonstrates how to control a light on a schedule using a Calendar object.
    Scenario: The light switches on at 22:00 and switches off at 06:00 every day.
    The CLU's current hour is read to determine which action to take when the calendar fires.
*/


declare const DOU3948: dOut.DOutRaw; //Light - Digital output Object Id, replace it with your own Object Id
declare const CAL1234: cal.CalendarRaw; //Calendar Object Id, replace it with your own Object Id
declare const CLU221005096: CluZWave2Raw; //CLU Object Id, replace it with your own Object Id

const light = new dOut.DOut(DOU3948);
const calendar = new cal.Calendar(CAL1234);
const clu = new CluZWave2(CLU221005096);

calendar.rule = "0 6,22 * * *"; // Cron expression: fire at 06:00 and 22:00 every day

calendar.addOnCalendar(() => {
    if (clu.hour === 22) {
        light.switchOn(0); // Switch on the light at 22:00
    } else if (clu.hour === 6) {
        light.switchOff(0); // Switch off the light at 06:00
    }
});

calendar.start(); // Start the calendar
