myText=document.getElementById("myText");
myBtn=document.getElementById("myBtn");
diceText=document.getElementById("diceText");
diceImage=document.getElementById("diceImage");


function rollDice(){
   const arr=[];
   const image=[];
   let number=Number(myText.value);
  
   for(i=0;i<number;i++){
     let n=Math.floor(Math.random()*6)+1;
     arr.push(n);
     image.push(`<img src="${n}.png" alt="Dice ${n}">`);
   }

   diceText.textContent=arr.join(", ");
   diceImage.innerHTML=image.join(" ");
}
