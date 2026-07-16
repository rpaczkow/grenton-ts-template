import { ModbusValueRemote } from "../../node_modules/grenton-ts/dist/gate-modbus/latest/modbus-value";
import { Timer, TimerRaw, ModeType } from "../../node_modules/grenton-ts/dist/gate-modbus/latest/timer";
import { RemoteGate, RemoteGateRaw } from "../../node_modules/grenton-ts/dist/core/remote-gate";
import { logInfo, logError } from "../../node_modules/grenton-ts/dist/log";

/*
    This script demonstrates how to periodically read a ModbusValue object from CLU remotely, 
    using a Timer running in Interval mode.

    The ModbusValue object (configured to read voltage from an energy meter) resides on ModBus gate. 
    This CLU connects to it and reads the value on each timer tick.
    
*/


declare const MODBUSGATE: RemoteGateRaw; //ModBus Gate Object Id, replace it with your own Object Id
declare const TMR1234: TimerRaw; //Timer Object Id (configured in Object Manager), replace it with your own Object Id

const gate = new RemoteGate(MODBUSGATE);
const voltageReading = new ModbusValueRemote("EnergyMeterModBusValue", gate); //Object Id of the ModbusValue

const readTimer = new Timer(TMR1234);
readTimer.mode = ModeType.Interval; // Fire repeatedly at a fixed interval
readTimer.time = 10000; // Read every 10 seconds (in milliseconds)

readTimer.addOnTimer(() => {
    voltageReading.readValue(); // Trigger a read on the remote CLU

    if (voltageReading.isValueValid) {
        logInfo(`Voltage: ${voltageReading.value} V`);
    } else {
        logError(`Voltage reading invalid, error code: ${voltageReading.errorCode}`);
    }
});

readTimer.start(); // Start the periodic timer
