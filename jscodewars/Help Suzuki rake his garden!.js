function rakeGarden(garden) {
    const gardenArr = garden.split(" ");
    const newGardenArr = [];
    for (let i = 0; i < gardenArr.length; i++) {
        if (gardenArr[i] !== "gravel" && gardenArr[i] !== "rock") {
            newGardenArr.push("gravel");
        } else {
            newGardenArr.push(gardenArr[i]);
        }
    }
    return newGardenArr.join(" ");
}