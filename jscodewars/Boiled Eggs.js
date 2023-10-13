function cookingTime(eggs) {
    const batches = Math.floor(eggs / 8);
    const remainingEggs = eggs % 8;
    let timeTaken = batches * 5;

    if (remainingEggs > 0) {
        timeTaken += 5;
    }

    return timeTaken;
}