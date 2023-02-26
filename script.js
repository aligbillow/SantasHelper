const fs = require('fs');
// 1 - final floor  
// ( === santa goes up 
// ) === santa goes down 

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    const floor = directionsArray.reduce((acc, currentValue) => {
        if (currentValue === '(') {
            return acc += 1
        } else if (currentValue === ')') {
            return acc -= 1 
        }   
    }, 0)
    console.timeEnd('santa-time')
    console.log('floor:', floor );
})
}


question1()

// 2 - when does santa first enter the basement
