let i = 0;

do {
    const body = document.querySelector("body") as HTMLElement;
    body.innerHTML += `<p>The Number is ${i}</p>`;
    i++;
} while (i <= 5);