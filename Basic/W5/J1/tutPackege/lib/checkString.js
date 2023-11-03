function checkExistNumber(inputStr) {
  for (let chr of inputStr) {
    if (!isNaN(parseInt(chr))) {
      return true;
    }
  }
  return false;
}

module.exports = {
  checkExistNumber,
};
