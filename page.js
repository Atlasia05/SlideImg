let rightCnt = 1;
let leftCnt = 1;


let rightBtn = document.querySelector("#triangle-right");
let leftBtn = document.querySelector("#triangle-left");

rightBtn.addEventListener('click', (e) => {
    if(rightCnt != 5) {
        let active = document.querySelector(".active");
        rightCnt = rightCnt + 1;
        leftCnt = rightCnt;
        let pluse = document.querySelector(`.imagebox${rightCnt}`);

        console.log( rightCnt);
        
        active.classList.remove("active");
        pluse.classList.add("active");
        
        let slide = document.querySelector("#imgbox > span > div");

        slide.classList.remove(`box${rightCnt-2}`);
        slide.classList.add(`box${rightCnt-1}`);
    }
})

leftBtn.addEventListener('click', (e) => {
    if(rightCnt != 1) {
        let active = document.querySelector(".active");
        leftCnt--
        rightCnt = leftCnt;
        let pluse = document.querySelector(`.imagebox${leftCnt % 5}`);

        console.log(leftCnt);
        
        active.classList.remove("active");
        pluse.classList.add("active");

        let slide = document.querySelector("#imgbox > span > div");

        slide.classList.remove(`box${leftCnt}`);
        slide.classList.add(`box${leftCnt-1}`);
    }
})