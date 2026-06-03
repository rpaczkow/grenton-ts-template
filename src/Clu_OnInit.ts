import * as dIn from "../node_modules/grenton-ts/dist/digital-in-din/fv02_01/din";
import * as dOut from "../node_modules/grenton-ts/dist/io-module-din-8/fv02_02/dout";

/*
    This script demonstrates how to use a digital input (DIn) to control a digital output (DOut). 
    When light switch clicked, it will switch on or off kitchen light.
    Use it as a starting template for your own Grenton project.
*/

/*
To upload this script to your Grenton CLU, follow these steps:
1. Compile project by running "npm run build" in the terminal. This will compile the TypeScript code and bundle it.
2. Open Grenton Object Manager and navigate to the script that runs on the OnInit event. If it doesn't exist, create a new script and set it to run on the OnInit event.
3. Open the compiled and bundled Lua file (Clu_OnInit_bundle.lua) in a text editor, copy its contents, and paste it into the script editor in Grenton Object Manager.
4. Save the project in Object Manager.
5. Send you project to CLU in Object Manager.
*/

/*
    These Object Ids are random Ids, replace it with the actual Object Id of your digital input/output in the Grenton system. 
    You can find the Object Id in Object Manager software, double click on the digital input/output in the objects tree.
    This will open Object Properties window then copy the Object Id from the Id field and paste it here.
*/
declare const DIN1907: dIn.DInRaw; //Digital input Object Id
declare const DOU5288: dOut.DOutRaw; //Digital output Object Id

const kitchenSwitch = new dIn.DIn(DIN1907); //Creates a new instance of the digital input using the Object Id
const kitchenLight = new dOut.DOut(DOU5288); //Creates a new instance of the digital output using the Object Id

// Set up an event listener for when the digital input is clicked. When it is clicked, toggle the state of the digital output.
kitchenSwitch.addOnClick(() => {
    kitchenLight.switch(0);
})