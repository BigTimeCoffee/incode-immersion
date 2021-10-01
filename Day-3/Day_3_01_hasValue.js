function hasValue(obj, arg) {
    let objValues = Object.values(obj)
    let argIsInclude = objValues.includes(arg)
    return console.log(argIsInclude)
}

hasValue({"hello": "bonjour", "my": "mon"}, "bonjour");
hasValue({"hello": "bonjour", "my": "mon"}, "hello");
hasValue({"hello": "bonjour", "my": "mon"}, "tasty");