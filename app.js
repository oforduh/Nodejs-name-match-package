const checkMatch = (userInput, match) => {
  const percentage = 100;
  let matchedPercentage = 0;
  let matchLength;
  let increment;
  console.log(userInput, match);
  const userInputToArray = userInput.toLowerCase().split(" ");
  const matchToArray = match.toLowerCase().split(" ");
  matchLength = matchToArray.length;
  increment = percentage / matchLength;

  const stringToArray = userInputToArray.forEach((item, index) => {
    if (item === matchToArray[index]) {
      matchedPercentage += increment;
      return matchedPercentage;
    }
  });
  return `${matchedPercentage}%`;
};

console.log(checkMatch("Harrison ofordu henry", "harrison Ofordu "));
    