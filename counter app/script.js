let count=0;
let counter=document.getElementById("increase")
let counter1=document.getElementById("decrease")
let counter2=document.getElementById("reset")
let countDisplay=document.getElementById("count")
counter.addEventListener("click",function(){
    count++;
    countDisplay.textContent=count;
})
counter1.addEventListener("click",function(){
    count--;
    countDisplay.textContent=count;
})  
counter2.addEventListener("click",function(){
    count=0;
    countDisplay.textContent=count;
})