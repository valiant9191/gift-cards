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
// const style=getComputedStyle(fontColor2)
// console.log(style.backgroundColor)

fontColor1.addEventListener('click', ()=>{message.style.color= getComputedStyle(fontColor1).backgroundColor})
fontColor2.addEventListener('click', ()=>{message.style.color= getComputedStyle(fontColor2).backgroundColor})
fontColor3.addEventListener('click', ()=>{message.style.color=getComputedStyle(fontColor3).backgroundColor})
fontColor4.addEventListener('click', ()=>{message.style.color=getComputedStyle(fontColor4).backgroundColor})
fontColor5.addEventListener('click', ()=>{message.style.color=getComputedStyle(fontColor5).backgroundColor})

// background img    card-image
const changeBgImg=document.querySelector('.card-image')

const bgImg1=document.querySelector('.background1');
const bgImg2=document.querySelector('.background2');
const bgImg3=document.querySelector('.background3');
const bgImg4=document.querySelector('.background4');
const bgImg5=document.querySelector('.background5');

bgImg1.addEventListener('click', ()=>{ changeBgImg.src=getComputedStyle(bgImg1).backgroundImage.split('url("').join().replace(/["]|[,]|[)]/g, '')})
bgImg2.addEventListener('click', ()=>{ changeBgImg.src=getComputedStyle(bgImg2).backgroundImage.split('url("').join().replace(/["]|[,]|[)]/g, '')})
bgImg3.addEventListener('click', ()=>{ changeBgImg.src=getComputedStyle(bgImg3).backgroundImage.split('url("').join().replace(/["]|[,]|[)]/g, '')})
bgImg4.addEventListener('click', ()=>{ changeBgImg.src=getComputedStyle(bgImg4).backgroundImage.split('url("').join().replace(/["]|[,]|[)]/g, '')})
bgImg5.addEventListener('click', ()=>{ changeBgImg.src=getComputedStyle(bgImg5).backgroundImage.split('url("').join().replace(/["]|[,]|[)]/g, '')})


// console.log(getComputedStyle(bgImg2).backgroundImage.split('url("').join().replace(/["]|[,]|[)]/g, ''))  


