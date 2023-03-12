const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog1.txt',{encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/blog1');
readStream.on('data',(chuck)=>{
    console.log("---new chuck-----")
    console.log('')
    console.log(chuck);
    console.log("\n NEW CHUNK \n")
    writeStream.write(chuck);
})

readStream.pipe(writeStream);
