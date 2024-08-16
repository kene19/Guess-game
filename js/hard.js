let mmn = document.querySelector("#mmn");
let mm = document.querySelector(".cr");
let hint = document.querySelector("#hint");
let mycheckbox = document.getElementById("mycheckbox");
let inpu = document.getElementById("inpu");
let restar = document.querySelector('.restart');
let low = document.querySelector('.low');
let last = document.querySelector('.last');
let bttn = document.querySelector('.bttn');
let arrtime = document.querySelector('#arrtime');
let cuonttime = document.querySelector('.cuonttime');
let loss = document.querySelector('.loss');
let mainn = document.querySelector('.main');
let easy = document.getElementById("easy");
let outtime = document.getElementById("outtime");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let guess = 0;
let arr = [];
let ansewr = Math.floor(Math.random() * 100) + 1;
let x = 61;
let interval;
function back() {
   mainn.style.display = "flex";
   easy.style.display = "none";
   medium.style.display = "none";

}

function fan() {
   x = 61;
   start()
   loss.style.display = "none";
   mainn.style.display = "none";
   cuonttime.style.color = "black";
   let choose = document.querySelector('#choose').value;
   switch (choose) {
      case "easy":
         easy.style.display = "flex";
         medium.style.display = "none";
         hard.style.display = "none";
         break;
      case "medium":
         easy.style.display = "none";
         medium.style.display = "flex";
         hard.style.display = "none";
         break;

      case "hard":
         easy.style.display = "none";
         medium.style.display = "none";
         hard.style.display = "flex";
         x = 61;

         break;
      default:
         //   document.getElementById("err").innerHTML = "errr";
         easy.style.display = "none";
         medium.style.display = "none";
         hard.style.display = "none";
         console.log("not select");
         break;
   }
   console.log(choose);
}

function start() {
   clearInterval(interval);
   interval = setInterval(() => {
      x -= 1
      cuonttime.innerHTML = `${x}`;
      if (x === 0) {
         clearInterval(interval);
         loss.style.display = "flex";
         outtime.textContent = `The number is ${ansewr}`; //lose the game
         outtime.style.color = "#521818";
      }
      if (x === 10) {
         cuonttime.style.color = "red";
      }
   }, 1000);

}


function back1() {
   mainn.style.display = "flex";
   hard.style.display = "none";
   clearInterval(interval);
   // start();
   console.log("back1");
}

function main() {

   console.log(ansewr)
   if (inpu.value == "") {
      inpu.classList.add("inva")
   }
   else {
      guess++;
      inpu.classList.remove("inva")
      arr.push(inpu.value);
      arrtime.innerHTML = `${arr}`;

      if (guess == 3) {
         mycheckbox.style.display = "block";
         low.style.display = "flex";
      }
      if (inpu.value == ansewr) {
         document.getElementById("kk").innerHTML = `<h3>You got it! ${inpu.value}</br> Attempts: ${guess}</h3> `;
         last.style.display = "flex";
         restar.style.display = "block";
         clearInterval(interval);
      }
      else {
         mmn.innerHTML = `Try again`;
      }

      inpu.value = "";

   }
}

mycheckbox.onclick = function () {
   if (mycheckbox.checked) {
      hint.style.display = "block";
      low.style.display = "flex";
      if (ansewr > 50) {

         hint.innerHTML = `Above the number 50`;

      }
      else {
         hint.innerHTML = `Below the number 50`;

      }
   } else {
      hint.style.display = "none";
      low.style.display = "none";
   }
}
function restart() {
   ansewr = Math.floor(Math.random() * 100) + 1;
   inpu.value = "";
   mm.innerHTML = "";
   guess = 0;
   mycheckbox.checked = false;
   mycheckbox.style.display = "none";
   last.style.display = "none";
   hint.innerHTML = "";
   restar.style.display = "none";
   loss.style.display = "none";
   mmn.innerHTML = "";
   arrtime.innerHTML = "";
   low.style.display = "none";
   cuonttime.style.color = "black";
   arr = []
   x = 61;
   start();

}
function resta() {
   ansewr = Math.floor(Math.random() * 10) + 1;
   inpu.value = "";
   mm.innerHTML = "";
   guess = 0;
   mycheckbox.checked = false;
   mycheckbox.style.display = "none";
   last.style.display = "none";
   hint.innerHTML = "";
   restar.style.display = "none";
   loss.style.display = "none";
   mmn.innerHTML = ""
   arrtime.innerHTML = ""
   low.style.display = "none";
   cuonttime.style.color = "black";
   arr = [];
   x = 61;
   start();
}
start();
