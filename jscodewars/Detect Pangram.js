function isPangram(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, '');
    const uniqueLetters = new Set(string);
    return Array.from('abcdefghijklmnopqrstuvwxyz').every(letter => uniqueLetters.has(letter));
}