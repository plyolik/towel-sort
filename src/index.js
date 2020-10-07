module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) return result

  matrix.forEach((child, i) => {
    if ((i + 1) % 2 !== 0) {
      result.push(...child)
    } else {
      result.push(...child.reverse())
    }
  });
  return result;
}
