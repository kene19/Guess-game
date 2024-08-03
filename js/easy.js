let mmn2 = document.querySelector("#mmn2");
let mm2 = document.querySelector(".cr2");
let hint2 = document.querySelector("#hint2");
let mycheckbox2 = document.getElementById("mycheckbox2");
let inpu2 = document.getElementById("inpu2");
let restar2 = document.querySelector('.restart2');
let last2 = document.querySelector('.last2');
let bttn2 = document.querySelector('.bttn2');
let arrtime2 = document.querySelector('#arrtime2');
let low2 = document.querySelector('.low2');
let guess2 = 0;
let arr2 = []
let ansewr2 = Math.floor(Math.random() * 10) + 1;
function main2() {

    if (inpu2.value == "") {
        inpu2.classList.add("inva")
    }
    else {
        guess2++;
        inpu2.classList.remove("inva")
        arr2.push(inpu2.value)
        arrtime2.innerHTML = `${arr2}`
        console.log(ansewr2)

        if (guess2 == 3) {
            mycheckbox2.style.display = "block";
            low2.style.display = "flex";
        }
        if (inpu2.value == ansewr2) {
            document.getElementById("kk2").innerHTML = `<h3>You got it! ${inpu2.value}</br> Attempts: ${guess2}</h3> `;
            last2.style.display = "flex";
            restar2.style.display = "block";


        }
        else {
            mmn2.innerHTML = `Try again`;
        }
        inpu2.value = "";
    }
}

mycheckbox2.onclick = function () {
    if (mycheckbox2.checked) {
        hint2.style.display = "block";
        low2.style.display = "flex";
        if (ansewr2 > 5) {

            hint2.innerHTML = `Above the number 5`;
        }
        else {
            hint2.innerHTML = `Below the number 5`;

        }
    } else {
        hint2.style.display = "none";
        low2.style.display = "none";
    }
}
function restart2() {
    ansewr2 = Math.floor(Math.random() * 10) + 1;
    inpu2.value = "";
    mm2.innerHTML = "";
    guess2 = 0;
    mycheckbox2.checked = false;
    mycheckbox2.style.display = "none";
    last2.style.display = "none";
    hint2.innerHTML = "";
    low2.style.display = "none";
    restar2.style.display = "none";
    mmn2.innerHTML = "";
    arrtime2.innerHTML = "";
    arr2 = []
}
