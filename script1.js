// const container = document.querySelector('.container');
// const question = document.querySelector('#question');
// const yes_btn = document.querySelector('#yes_btn');
// const no_btn = document.querySelector('#no_btn');

// const containerRect = container.getBoundingClientRect();
// const no_btnRect = no_btn.getBoundingClientRect();

// yes_btn.addEventListener('click', () => {
//     question.innerHTML = 'Thank You'
// })

// no_btn.addEventListener('mouseover', () =>{
//     const i=Math.floor(Math.random() * (containerRect.width - no_btnRect.width)) + 1;
//     const j=Math.floor(Math.random() * (containerRect.height - no_btnRect.height)) + 1;

//     no_btn.style.left = i + 'px';
//     no_btn.style.top = j + 'px';
// })


function moveRandomeEl(elm)
{
    elm.style.position="absolute";
    elm.style.top=Math.floor(Math.randome()*90+5)+"%";
    elm.style.left=Math.floor(Math.randome()*90+5)+"%";
}
const moveRandome = document.querySelector("#no_btn");
moveRandome.addEventListener("mouseenter", function(e){
    moveRandomeEl(e.target);
})


