const section = document.getElementById('grid-container');
const btn = document.querySelector('btn');


function showPrompt() {
    const userInput = prompt("How many boxes would you like?");

    if (userInput !== null) {
        document.getElementById("output").textContent = `You entered: ${userInput}`;
    } else {
        document.getElementById("output").textContent = `You clicked Cancel.`;
    }
}

btn.addEventListener("click", showPrompt);



function gridSize(n) { 
  const size = n * n; 
  for (let i = 0; i < size; i++) { 
    const div = document.createElement('div'); 
    div.classList.add('box'); 
    div.addEventListener("mouseover", () => {
      div.classList.add('hover');
    });
    section.appendChild(div);
  }
}
