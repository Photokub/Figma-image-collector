figma.showUI(__html__);


figma.ui.onmessage = pluginMessage => {

    (async () => {

        //const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post") as ComponentSetNode

        const pluArr = pluginMessage.pluArr;
        const linkArr = pluginMessage.linkArr;
        console.log(pluArr)
        console.log(linkArr)


        const link = await figma.createText()
        await figma.loadFontAsync({family: "Inter", style: "Regular"})
        link.x = 50
        link.y = 50
        link.characters = pluginMessage.linkValue
        link.fontSize = 18
        link.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}]

        const imageLink = await figma.createImageAsync(
            pluginMessage.linkValue
        )

        const imageContainer = figma.createRectangle()
        //const {width, height} = await imageLink.getSizeAsync()
        imageContainer.resize(475, 400)
        imageContainer.fills = [
            {
                type: 'IMAGE',
                imageHash: imageLink.hash,
                scaleMode: 'FIT'
            }
        ]

        pluArr.forEach((elem) => {
            const frame = figma.createFrame();
            frame.x = 50
            frame.y = 50
            frame.resize(475, 400)
            frame.name = elem
            frame.appendChild(imageContainer)
        })


        /////////////синхронный запрос///////////////
        let array = linkArr[Symbol.iterator]();
        let arr = Array.from(array);
        console.log(arr)

        for (let elem of arr) {
            if (typeof elem === "string") {
                console.log(elem)
                let imgLink = await figma.createImageAsync(elem)
                console.log(imgLink)

                const rectangleObject = figma.createRectangle()
                rectangleObject.resize(475, 400)
                rectangleObject.fills = [
                    {
                        type: 'IMAGE',
                        imageHash: imgLink.hash,
                        scaleMode: 'FIT'
                    }
                ]

                //pluArr.forEach((elem) => {
                    const frame = figma.createFrame();
                    frame.x = 50
                    frame.y = 50
                    frame.resize(475, 400)
                    frame.name = elem
                    frame.appendChild(rectangleObject)
                //})
            }
        }


        //todo /////////////асинхронный запрос///////////////
        // let asyncArray = linkArr;
        // //let asyncArray = linkArr[Symbol.asyncIterator]();
        // let asyncArr = Array.from(asyncArray);
        // //console.log(asyncArr);
        //
        // let generatorArray = function* (arr) {
        //     let i = 0
        //     let length = arr.length
        //
        //     while (true) {
        //         yield arr[i]
        //         i++
        //         if (i === length) i = 0
        //     }
        // };
        //
        // // await (async () => {
        //     const arrayLoop = generatorArray(asyncArr)
        //     for await (let value of arrayLoop) {
        //         console.log(arrayLoop.next())
        //         if (typeof value === "string") {
        //             console.log(value)
        //             let imgLink = await figma.createImageAsync(value)
        //             console.log(imgLink)
        //
        //             const rect = figma.createRectangle()
        //             imageContainer.resize(475, 400)
        //             imageContainer.fills = [
        //                 {
        //                     type: 'IMAGE',
        //                     imageHash: imgLink.hash,
        //                     scaleMode: 'FIT'
        //                 }
        //             ]
        //
        //             pluArr.forEach((elem) => {
        //                 const frame = figma.createFrame();
        //                 frame.x = 50
        //                 frame.y = 50
        //                 frame.resize(475, 400)
        //                 frame.name = elem
        //                 frame.appendChild(rect)
        //             })
        //         }
        //     }
        //     ;
        //
        // // })();


        await figma.closePlugin()
    })()
}

