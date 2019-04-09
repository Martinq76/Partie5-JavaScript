var languagesArrayCreation = function () {
  languages=['Html', 'CSS', 'Java', 'PHP'];
  return languages;
}

var numbersArrayCreation = function () {
  numbers=[0, 1, 2, 3, 4, 5];
  return numbers;
}

var ElementReplacement = function (languages) {
  languages[2] = 'Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
  window.socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {
  window.languagesInSring = languages.join(',');
  return languagesInSring;
}

var arraySort = function (socialMedia) {
  socialMedia.sort();
  return socialMedia;
}

var arrayInvert = function (languages){
  languages.reverse();
  return languages;
}
