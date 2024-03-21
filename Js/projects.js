const github = document.querySelector('.github')
const follow = document.querySelector('.follower')

github.addEventListener('click', function (){
  window.open('https://github.com/Mbungai-Francesco','_blank')
})

document.addEventListener("mousemove", (event) => {
  const x = event.clientX + document.documentElement.scrollLeft;
  const y = event.clientY + document.documentElement.scrollTop;
  // console.log(`Mouse position: X=${x}, Y=${y}`)
  follow.style.transform = `translate(${x-32}px, ${y-32}px)`;
  // console.log(`${x1}, ${y1}`)
  // if(Math.abs(x1-(x-32)) > 100 || Math.abs(y1-(y-32)) > 100){
  //   block.style.transform = `translate(${50}vh, ${50}vh)`;
  // }
});