function checkScore(score) {
  if (score >= 70) {
    return "Pass";
  }
  return "Try again";
}
console.log(checkScore(85));
