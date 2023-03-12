const fs = require('fs')
if(!fs.existsSync('./assests'))
{
    fs.mkdir("./assests",(err)=>{
        if(err)
        {
            console.log(err)
        }
        console.log('folder created')
    });
}
else
{
    fs.rmdir('./assests',(err)=>{
        if(err)
        {
            console.log(err)
        }
        console.log("folder deleted")
    })
}
if(fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err)
        {
            console.log(err)
        }
        console.log('file deleted');
    })
}