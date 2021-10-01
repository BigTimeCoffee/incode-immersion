function sortWords(arr) {
    let obj = {
        odd: [], even: []
    }

    arr.forEach(str => {
        (str.length % 2 === 0 ) ? obj.even.push(str) : obj.odd.push(str)
    })

    const prt = JSON.stringify(obj)
    console.log(prt);
}

sortWords(["work", "hard", "mommy"]);