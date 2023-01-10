function cleanString(S) {
  let q = []

  for (let i = 0; i < S.length; ++i) {
    if (S[i] != "#") q.push(S[i])
    else if (q.length != 0) q.pop()
  }

  // build final string
  let ans = ""

  while (q.length != 0) {
    ans += q.pop()
  }

  // return final string
  let answer = ""
  for (let j = ans.length - 1; j >= 0; j--) {
    answer += ans[j]
  }
  return answer
}
