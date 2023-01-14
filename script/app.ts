const counterShow: any = document.querySelector('#counterShow')
const decrease = document.querySelector('#decrease')
const reset = document.querySelector('#reset')
const increase = document.querySelector('#increase')
let counterClick: number = 0;

const typeCounter = (type: string) => {
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
}

increase?.addEventListener('click', () => {
    counterShow.textContent = typeCounter("increase");
});

decrease?.addEventListener('click', () => {
    counterShow.textContent = typeCounter("decrease");
});

reset?.addEventListener('click', () => {
    counterShow.textContent = typeCounter("reset");
});
