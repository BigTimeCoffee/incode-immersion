function pyramid(base) {
    for (let i = 0; i < base; i++) {
        var output = '';
        for (let j = 0; j < base - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '# ';
        console.log(output);  
    } 
}

pyramid(7);