"use strict";
const counterShow = document.querySelector('#counterShow');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
let counterClick = 0;
const typeCounter = (type) => {
    if (type === "increase") {
        counterClick += 1;
        return counterClick;
    }
    if (type === "decrease") {
        counterClick -= 1;
        return counterClick;
    }
    if (type === "reset") {
        counterClick = 0;
        return counterClick;
    }
};
increase === null || increase === void 0 ? void 0 : increase.addEventListener('click', () => {
    counterShow.textContent = typeCounter("increase");
});
decrease === null || decrease === void 0 ? void 0 : decrease.addEventListener('click', () => {
    counterShow.textContent = typeCounter("decrease");
});
reset === null || reset === void 0 ? void 0 : reset.addEventListener('click', () => {
    counterShow.textContent = typeCounter("reset");
});
