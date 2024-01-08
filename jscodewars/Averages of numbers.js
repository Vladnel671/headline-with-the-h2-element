function averages(numbers) {
    if (!numbers || numbers.length < 2) {
        return []
    }

    const averages = []
    for (let i = 0; i < numbers.length - 1; i++) {
        const currentNumber = numbers[i]
        const nextNumber = numbers[i + 1]
        const average = (currentNumber + nextNumber) / 2
        averages.push(average)
    }
    return averages
}