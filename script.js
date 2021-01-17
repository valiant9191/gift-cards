const textOnPicture=document.querySelector('.message');

const inputFormJs=document.querySelector('#inputForm');

const button1 = document.querySelector('.button')


// get and put info from text form to text into card
button1.addEventListener('click', ()=>textOnPicture.innerHTML=inputFormJs.value )


// font-colors
const fontColor1=document.querySelector('.color1');
const fontColor2=document.querySelector('.color2');
const fontColor3=document.querySelector('.color3');
const fontColor4=document.querySelector('.color4');
const fontColor5=document.querySelector('.color5');



const message=document.querySelector('.message')
const style=getComputedStyle(fontColor2)
console.log(style.backgroundColor)

fontColor1.addEventListener('click', ()=>{message.style.color= getComputedStyle(fontColor1).backgroundColor})
fontColor2.addEventListener('click', ()=>{message.style.color= getComputedStyle(fontColor2).backgroundColor})
fontColor3.addEventListener('click', ()=>{message.style.color=getComputedStyle(fontColor3).backgroundColor})
fontColor4.addEventListener('click', ()=>{message.style.color=getComputedStyle(fontColor4).backgroundColor})
fontColor5.addEventListener('click', ()=>{message.style.color=getComputedStyle(fontColor5).backgroundColor})




