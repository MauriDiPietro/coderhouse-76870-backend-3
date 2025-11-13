process.on('exit', (code)=>{
    console.log(`el proceso finalizó con codigo ${code}`);
})


console.log('ejecutando algo.......');


process.exit(5)