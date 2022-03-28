let sc = 0;
const ro = document.querySelector("#arrowTypeGame1");
const tb = document.querySelector("#mouseTypeGame1");
const td = document.querySelectorAll("td");
let trans = 1;
setInterval(()=>{
    div.innerHTML = sc;
}, 50)
setInterval(()=>{
    const ran = Math.floor(Math.random()*9);
    td[trans].style.opacity = 0.2;
    trans = ran;
    td[ran].style.opacity = 1;
}, 800);
let i = 0;
let ii = 0;
function color(a,b,c) {
    tb.style.backgroundColor = `rgba(${a}, ${b}, ${c}, 0.2)`;
    td[trans].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    ro.style.border = `2px solid rgb(${a}, ${b}, ${c})`;
}
setInterval(()=>{
    ii++;
    if (ii>255) {
        i++;
        ii = 0;
        if (i == 6) {
            i = 0;
        }
    }
    switch (true) {
        case (i == 0): color(ii,0,255);
            break;
        case (i == 1):color(255, 0, 255 - ii);
            break;
        case (i == 2):color(255, ii, 0);
            break;
        case (i == 3):color(255 - ii, 255, 0);
            break;
        case (i == 4):color(0, 255, ii);
            break;
        case (i == 5):color(0, 255 - ii, 255);
            break;
    }
}, 10);
const div = document.querySelector("#sco");
function oncl(j) {
    console.log(3);
    if (trans == j) {
        sc= sc + 1;
    } else {
        sc= sc -1;
    }
}
let rota = 0;
function re(){
    rota = 0;
    sc = sc -5;
}
function al(rota){
    ro.style.boxShadow = `0px 0px 20px rgba(255, 0, 0, ${rota - 1.5})`;
}
setInterval(()=>{
    if (rota >= 0) {
        rota += 0.003;
    } else {
        rota -= 0.003;
    }
//
    if (rota >=0.25) {
        re()
    } else if (rota <= -0.25) {
        re()
    } else if (rota <-0.15) {
        al(-rota)
    } else if (rota > 0.15) {
        al(rota)
    } else {
        ro.style.boxShadow = `0px 0px 0px red`;
    }
//
    ro.style.background = `linear-gradient(${rota}turn, #00dbf8, #ffffff, #ff5e00)`;
}, 100);

window.onkeydown = (e) => {if (e.key == "ArrowRight") {
        rota +=0.01;
    } else if (e.key == "ArrowLeft") {
        rota -=0.01;
}}
td[0].onclick = () => { oncl(0); }
td[1].onclick = () => { oncl(1); }
td[2].onclick = () => { oncl(2); }
td[3].onclick = () => { oncl(3); }
td[4].onclick = () => { oncl(4); }        
td[5].onclick = () => { oncl(5); }
td[6].onclick = () => { oncl(6); }
td[7].onclick = () => { oncl(7); }
td[8].onclick = () => { oncl(8); }