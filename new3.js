function sum(a, b) {
    return a + b
}

function addOne(arg) {
    return arg + 1
}

function sum2(a, b, addOne) {
    console.log(addOne(a + b));
}

const result = sum2(2, 2, addOne)
console.log('result ${sum2(2, 2, addOne)}');