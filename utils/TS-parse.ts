'use strict';


const fs = require('fs');
const https = require('https');
const excelToJson = require('convert-excel-to-json');


const tempFilename = 'file.xlsx';
const file = fs.createWriteStream(tempFilename);
//const data = fs.readFileSync('../data/testData.xlsx', {encoding: 'utf-8'});

// скачиваю файл с сервака БЕЗ сохранения
const request = https.get(
    'https://development.pp-print.ru/data/testData.xlsx',
    function (response) {
        // обработка файла
        response.pipe(file);

        // сюда можно че нить еще вписать

        // слушатель файла
        file.on('finish', () => {
            // читаю библиотекой скачанный файл передав сюда название которое задал ранее
            const result = excelToJson({
                sourceFile: tempFilename,
            });

            console.log(result); // тут читаю результат

            // закрываю файл
            file.close();

            return result

            // конец
        });
    }
);

console.log(request)

module.exports = request;






