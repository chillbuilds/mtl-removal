const fs = require('fs')

let inputFiles = fs.readdirSync('./input')

inputFiles.forEach((file, index) => {
    if(file.endsWith('.obj')){
        console.log(`./input/${file}`)
        let fileData = fs.readFileSync(`./input/${file}`, 'utf-8')
        let fileDataArray = fileData.split('\r\n')
        fileDataArray.splice(0, 4)
        let writeData = fileDataArray.join('\r\n')
        fs.writeFileSync(`./input/${file}`, writeData)
    }
})