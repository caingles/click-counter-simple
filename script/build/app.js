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
        return 0;
    }
};
