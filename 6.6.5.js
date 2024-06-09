const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let arrValues = []

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        obj[key].forEach(value => arrValues.push(value))
    } else {
        arrValues.push(obj[key])
    }
}

console.log(arrValues)