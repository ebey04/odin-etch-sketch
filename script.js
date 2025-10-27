const section = document.getElementById('grid-container');
const btn = document.querySelector('.btn');


function showPrompt() {
    const userInput = prompt("How many boxes would you like?");

    if (userInput > 100) {
        alert("Please choose 100 or fewer squares.")
        return;
    }
    if (userInput !== null) {
        const num = Number(userInput);
        section.innerHTML = "";
    gridSize(num);
} else {
    document.getElementById("output").textContent = `You clicked Cancel.`;
}
}

btn.addEventListener("click", showPrompt);

function gridSize(n) { 
    const size = n * n; 
    const containerWidth = section.clientWidth;
    const containerHeight = section.clientHeight;

    for (let i = 0; i < size; i++) { 
    const div = document.createElement('div'); 
    div.classList.add('box'); 
div.style.width = `${containerWidth / n}px`;
div.style.height = `${containerHeight / n}px`;

    div.addEventListener("mouseover", () => {
    div.classList.add('hover');
    });
    section.appendChild(div);
    }
}
