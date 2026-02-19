 const newText = document.getElementById("magic");

window.addEventListener("keydown", (e)=>{
const tiltX = (Math.random() - 0.5) * 20;
const tiltY = (Math.random() - 0.5) * 20;
newText.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

setTimeout(() => {
    newText.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
}, 150);
        newText.innerHTML = `
        <div class="magic" id="magic">
            <table>
        <tr>
        <th>key</th>
        <th>keyCode</th>
        <th>code</th>
    </tr>
        <tr>
            <th>${e.key === " " ? "space" : e.key}</th>
            <th>${e.keyCode}</th>
            <th>${e.code}</th>
        </tr>
        
    </table>
       </div>`;
        
    })