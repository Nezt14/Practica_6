const readline = require(`readline`)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Ingrese su edad: `, (edad)=> {
    if (edad >=0 && edad <=12) {
        console.log(`la persona es un NIÑO de ${edad}, años de edad`)
    }else if(edad >=13 && edad <=17){
        console.log(`la persona es un ADOLECENTE de ${edad}, años de edad`)
    }else if(edad >=18 && edad <=35){
        console.log(`la persona es un ADULTO JOVEN de ${edad}, años de edad`)
    }else if(edad >=36 && edad <=59){
        console.log(`la persona es un ADULTO de ${edad}, años de edad`)
    }else if(edad >60){
        console.log(`la persona es un ADULTO MAYOR de ${edad}, años de edad`)
    }else {
        console.log(`ingrese una edad valida`)
    }
    
})
