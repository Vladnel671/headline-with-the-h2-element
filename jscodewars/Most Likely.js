function mostLikely(prob1, prob2) {

    let p1 = prob1.split(":")
    let p2 = prob2.split(":")

    let p11 = p1[0] / p1[1]
    let p22 = p2[0] / p2[1]

    return p11 > p22

}