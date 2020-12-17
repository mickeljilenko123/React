const keysList = ['name', 'address', 'age'];
const valuesList = ['Bob', 'Ukraine', 34];


const buildObject = (keys, values) => {
    const arr2 = keys.reduce((acc, e, i) =>
        ({...acc, [e]: values[i] }), {});
    return arr2;
}
console.log(buildObject(keysList, valuesList));