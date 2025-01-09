let i = 0;

do {
    const body = document.querySelector("body") as HTMLElement;
    if (i % 2 == 0) {
        body.innerHTML += `<p>The Number is ${i}</p>`;
    }
    i++;
} while (i <= 20);