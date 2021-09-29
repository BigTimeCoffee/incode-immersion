function averageMinMax(...numbers) {
    let min = (Math.min(...numbers));
    let max = (Math.max(...numbers));
    let average = 0 
        for (let i = 0; i < numbers.length; i++) {
        let currNum = numbers[i];
        average += currNum/3;
    }
    console.log(`The min: ${min} \nThe max: ${max}\nThe average: ${average}\n`);
    
}

averageMinMax(...[-42, 0, 42]);
averageMinMax(...[30, 20, 100]);
averageMinMax(...[-23, -4, -12]);




/*for (let i=0; i<numbers.length; i++) 
        console.log(numbers[i]);
 */       


