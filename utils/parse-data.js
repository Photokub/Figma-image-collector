'use strict';
const excelToJson = require('convert-excel-to-json');
//import { excelToJson }  from "@convert-excel-to-json/lib";
//import { excelToJson } from "@types/convert-excel-to-json";
//import { excelToJson } from "@types/node";
//import { excelToJson } from "convert-excel-to-json";

const result = excelToJson({
    sourceFile: './data/testData.xlsx'
});

// result will be an Object containing keys with the same name as the sheets found on the Excel file. Each of the keys will have an array of objects where each of them represents a row of the container sheet. e.g. for a excel file that has two sheets ('sheet1', 'sheet2')
// {
//     sheet1: [{
//         A: 'data of cell A1',
//         B: 'data of cell B1',
//     }]
// }

const sheet = Object.values(result)[0];

const pluArray = sheet.map((elem) => {
        const plu = Object.values(elem)[0];
        return plu
    }
)

const linkArray = sheet.map((elem) => {
        const link = Object.values(elem)[1];
        return link
    }
)

console.log(pluArray)
console.log(linkArray)

module.exports = {
    pluArray,
}

//module.exports.pluArray = "pluArray"

// export {
//     pluArray
// }




