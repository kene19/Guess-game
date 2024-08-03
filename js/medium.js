let mmn1 = document.querySelector("#mmn1");
let mm1 = document.querySelector(".cr1");
let hint1 = document.querySelector("#hint1");
let mycheckbox1 = document.getElementById("mycheckbox1");
let inpu1 = document.getElementById("inpu1");
let restar1 = document.querySelector('.restart1');
let last1 = document.querySelector('.last1');
let bttn1 = document.querySelector('.bttn1');
let arrtime1 = document.querySelector('#arrtime1');
let low1 = document.querySelector('.low1');
let guess1 = 0;
let arr1 = []
let ansewr1 = Math.floor(Math.random() * 50) + 1;


function main1() {

   if (inpu1.value == "") {
      inpu1.classList.add("inva")
   }
   else {

      guess1++;

      arr1.push(inpu1.value)
      arrtime1.innerHTML = `${arr1}`
      console.log(ansewr1)
      inpu1.classList.remove("inva")
      if (guess1 == 3) {
         mycheckbox1.style.display = "block";
         low1.style.display = "flex";
      }
      if (inpu1.value == ansewr1) {
         document.getElementById("kk1").innerHTML = `<h3>You got it! ${inpu1.value}</br> Attempts: ${guess1}</h3> `;
         last1.style.display = "flex";
         restar1.style.display = "block";
      }
      else {
         mmn1.innerHTML = `Try again`;
      }

      inpu1.value = "";
   }
}

mycheckbox1.onclick = function () {
   if (mycheckbox1.checked) {
      hint1.style.display = "block";
      low1.style.display = "flex";
      if (ansewr1 > 25) {

         hint1.innerHTML = `Above the number 25`;


      }
      else {
         hint1.innerHTML = `Below the number 25`;
      
      }
   } else {
      hint1.style.display = "none";
      low1.style.display = "none";
   }
}
function restart1() {
   ansewr1 = Math.floor(Math.random() * 50) + 1;
   inpu1.value = "";
   mm1.innerHTML = "";
   guess1 = 0;
   mycheckbox1.checked = false;
   mycheckbox1.style.display = "none";
   last1.style.display = "none";
   hint1.innerHTML = "";
   restar1.style.display = "none";
   low1.style.display = "none";
   mmn1.innerHTML = "";
   arrtime1.innerHTML = "";
   arr1 = []
}
