/**
 * shuffle array to create a userlink
 */
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  let newArr = [];
  let count = 0;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    if (count % 2 == 0 && isNaN(array[randomIndex])) {
      //console.log(array[randomIndex] + " is not a number");
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex].toUpperCase(),
        array[currentIndex],
      ];
    } else {
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    count++;
  }

  return array.join("");
};

const generateUniqueLink = (userId) => {
  const date = new Date().getTime();
  const string = userId + date;

  const link = shuffle(string.split(""));
  return link;
};

export default generateUniqueLink;
