//const  request_module  = require("../utils/TS-parse")

//console.log( request_module )
figma.showUI(__html__);

const plu = figma.ui.onmessage = (message) => {
    console.log("got this from the UI", message)
}

const frame = figma.createFrame();

frame.x = 50
frame.y = 50

// Set size to 1280 x 720
frame.resize(500, 500)

frame.name = plu
//
//
//figma.closePlugin()