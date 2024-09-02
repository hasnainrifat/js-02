
let clrBtn = document.querySelector('.clr-btn');
let clr = document.querySelector('#clr');




clrBtn.addEventListener('click', function(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    clr.style.backgroundColor = `rgb(${red}, ${green} , ${blue})`;
});
