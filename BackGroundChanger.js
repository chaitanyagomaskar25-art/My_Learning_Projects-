
    

const btn = document.querySelector('button');
if(btn){
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    // confirm("Do you want to change the color ?")
  })
}