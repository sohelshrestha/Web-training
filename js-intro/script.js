// console.log("First Program");

// console.log(document.body.style.background="green");







// window.setInterval(function(){
//     document.body.innerHtml=`<h1>${new Date()}</h1>`
// }, 1000);

// window.alert("Hello world");

// const result=window.confirm("Are you sure?");
// console.log(result);

// const result=window prompt("What is your name?");
// console.log(result);

const title = document.getElementsByClassName("red");
title[0].style.fontSize = "60px";

const firstList=document.querySelectorAll(".red");
firstList.style.color="purple";

firstList.forEach(function(item){
    item.style.color = 'red';
});

//Events
const button = document.querySelector('button');
document.addEventListener("keyup",function(event){
    console.log(event);
    document.body.style.background="purple";
});