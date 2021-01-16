const textOnPicture=document.querySelector('.message');

const inputFormJs=document.querySelector('#inputForm');

const button1 = document.querySelector('.button')


// get and put info from text form to text into card
button1.addEventListener('click', ()=>textOnPicture.innerHTML=inputFormJs.value )



