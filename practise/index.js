const keysList = ['name', 'address', 'age'];
const valuesList = ['Bob', 'Ukraine', 34];


const buildObject = (keys, values) => {
    const arr2 = keys.reduce((acc, e, i) =>
        ({...acc, [e]: values[i] }), {});
    return arr2;
}
console.log(buildObject(keysList, valuesList));


const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

console.log(getTimeWithOffset(2).toLocaleTimeString());

names = "Tror Gvigris Deriana Nori";
num = 4;

function fourLetters(names, num) {
    const arr = names.split(" ");
    let current = 0;
    const arr1 = arr.map(e => {
        if (e.length === num) {
            current += 1;
        }

    })
    console.log(current);
    return arr1;
};
fourLetters(names, num);