import * as rollerLatest from "../node_modules/grenton-ts/dist/roller-sh-din/latest/roller-shutter";
import * as rollerFv0102 from "../node_modules/grenton-ts/dist/roller-sh-din/fwType_02_fwApiVersion_01/roller-shutter";

/*
    This script demonstrates how to import the latest version of a module, or pin it to a specific
    firmware version.

    grenton-ts ships one typed wrapper per firmware revision of a module, under "<module>/<version>/...",
    plus a "<module>/latest/..." path that always re-exports the newest revision known to grenton-ts.

    - Import from "latest" when you want the newest API automatically whenever grenton-ts is updated.
    - Import from a specific version (e.g. "fv01_02") when you need to match the exact firmware flashed
      on your physical module, so the API doesn't shift under you on a grenton-ts update.

    Scenario: the living room shutter runs the newest ROLLER_SHUTTER_DIN firmware, which adds precise
    percentage-based positioning (setPosition). The bedroom shutter still runs the older fv01_02
    firmware - setPosition() does not exist on that version, only timed moveUp/moveDown/stop are
    available.
*/


declare const ROL2001: rollerLatest.RollerShutterRaw; //Living room shutter, latest firmware - Object Id, replace it with your own Object Id
declare const ROL2002: rollerFv0102.RollerShutterRaw; //Bedroom shutter, fv01_02 firmware - Object Id, replace it with your own Object Id

const livingRoomShutter = new rollerLatest.RollerShutter(ROL2001); //Latest API - supports setPosition()
const bedroomShutter = new rollerFv0102.RollerShutter(ROL2002); //Pinned to fv01_02 - no position control on this firmware

livingRoomShutter.setPosition(50); // Latest version: move the shutter to an exact 50% position

bedroomShutter.moveDown(0); // fv01_02 version: no position control, only timed up/down movement
bedroomShutter.stop(); // Stop it manually once it reaches roughly the desired point
