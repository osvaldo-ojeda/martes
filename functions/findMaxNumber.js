function findMaxNumber(array) {
//   console.log(`🚀 ~ findMaxNumber ~ array:`, {...array})
//   console.log(`🚀 ~ findMaxNumber ~ array:`, [...array])
  const maxNumber = Math.max(...array);
  console.log(`🚀 ~ findMaxNumber ~ maxNumber:`, maxNumber)
}

module.exports = findMaxNumber;
