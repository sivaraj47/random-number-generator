const btn = document.getElementById("btn");
const numberS = document.getElementById("number");

let Fnumber=[0,1,2,3,4,5,6,7,8,9];

btn.addEventListener('click', function(){
  let Fnumber= 'The Number is ';
  for (i=0;i<6;i++) {
    Fnumber += findN();
  }
  numberS.innerHTML=Fnumber;
});

function findN(){
  let randIndex = Math.floor(Math.random()*10);
  return Fnumber[randIndex];
}
