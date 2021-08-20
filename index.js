
function sum(fromN, toN) {
  let total = fromN;
  if (fromN < toN) {
    total += sum(fromN+1, toN);
  }
  return total;
}

module.exports = sum;
