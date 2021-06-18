const list = document.querySelectorAll('ul');

function func() {
    let res = '';
    let str = ['1', '3', '4', '5', '6', '7', '8', '9', '0', 'p', 'o', 'i', 'u'];
    for (let i = 0; i < 5; i++) {
        res += (str[getRandom(0, str.length - 1)]);
    }
    if (res.split('').reverse().join('') === res && (!res.includes("0"))) {
        const listelem = document.createElement("li");
        listelem.classList.add('.red')

    } else if (Number(res) && (!res.includes("0"))) {
        const listelem = document.createElement("li");
        listelem.classList.add('.blue')
        console.log(res, "blue");

    } else if (res.includes("0")) {
        return null;
    }
    return res;
};

function str() {

}

function getRandom(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
};
setInterval(func, 3000)