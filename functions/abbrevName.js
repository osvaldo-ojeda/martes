function abbrevName(str) {
  //   const abbrev = str.split(" ")
  //   const initals=abbrev.reduce((ac, val) => ac + val[0] + ".", "")
  //   const upCase=initals.toUpperCase()
//   const abbrev = str.split(" ").reduce((ac, val) => ac + val[0] + ".", "").toUpperCase()
  const abbrev = str.split(" ").map(val=>val[0]).join(".").toUpperCase()
  console.log(`🚀 ~ abbrevName ~ abbrev:`, abbrev);
//   console.log(`🚀 ~ abbrevName ~ initals:`, initals);
//   console.log(`🚀 ~ abbrevName ~ upCase:`, upCase);
}
module.exports = abbrevName;
