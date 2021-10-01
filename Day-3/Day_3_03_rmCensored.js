var veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
var swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"}


function rmCensored(obj) {
    Object.keys(obj).forEach(str => {
        (str.includes('*')) ? delete obj[str] : 0
    })
    Object.values(obj).forEach(str => {
        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }
        let keyToDelete = getKeyByValue(obj, str)
        if (str.includes('*')) {
            delete obj[keyToDelete]
        }
    })
    return obj
}

rmCensored(veggies)
console.log(veggies)

rmCensored(swearWords)
console.log(swearWords)


