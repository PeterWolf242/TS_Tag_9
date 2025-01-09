const buttonLoop = document.querySelector(".btnLoopMe") as HTMLButtonElement;
const buttonReset = document.querySelector(".btnReset") as HTMLButtonElement;

function createLoop() {
    const output = document.querySelector(".output p") as HTMLParagraphElement;
    let input = document.querySelector("input") as HTMLInputElement;
    buttonLoop.addEventListener("click", () => {
        const countLoop = parseInt(input.value);
        const repeatO = "o".repeat(countLoop);
        output.textContent = (`L${repeatO}p`);
    }
    )
    
    buttonReset.addEventListener("click", () => {
        input.value = "";
        output.textContent = "L ?o? p";
        console.log("Reset-Button wurde gedrückt");
    })
}
createLoop();


