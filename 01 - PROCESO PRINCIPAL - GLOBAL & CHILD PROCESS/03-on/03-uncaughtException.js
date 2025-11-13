process.on('uncaughtException', (error)=>{
    console.log('este log viene del process.on', error);
})

const test = () => {
    console.log('ejecutando algo');
    throw new Error('ERROR SIMULADO')
}

test()