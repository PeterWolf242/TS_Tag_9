function createImageNames(): string[] {
    const returnArray: string[] = [];
    for (let i = 1; i <= 100; i++) {
        const numberPartElement = i.toString().padStart(3, "0");
        const fileName = `image_${numberPartElement}.jpg`;
        returnArray.push(fileName);
    }
    return returnArray;
}

console.table(createImageNames());
