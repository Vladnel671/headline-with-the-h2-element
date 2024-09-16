function sumOfSums(n) {
    let bigN = BigInt(n);
    let N1 = bigN + 1n;
    let N2 = bigN + 2n;

    let ZN = (bigN * N1 * N2) / 6n;

    let SZN = (ZN * (ZN + 1n)) / 2n;

    return SZN;
}