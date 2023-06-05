//index.js

function dogYear(age, round) {
  let humanAge = 16 * Math.log(age) + 31;

  if (round == true) {
    return Math.round(humanAge);
  } else if (round == false) {
    return humanAge;
  } else {
    return humanAge;
  }
}

function reverseDogYear(age, round) {
  let dogAge = (Math.exp((age - 31) / 16) * 100) / 100;

  if (round == true) {
    return Math.round(dogAge);
  } else if (round == false) {
    return dogAge;
  } else {
    return dogAge;
  }
}

module.exports.dogYear = dogYear
module.exports.reverseDogYear = reverseDogYear