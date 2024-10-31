const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const getShuffledItems = (array) => {
  let items = array;
  let shuffled = [];

  while (items.length !== 0) {
    let k = getRandomInt(0, items.length);
    shuffled.unshift(items[k]);
    items.splice(k, 1);
  }

  return shuffled;
};

export default getShuffledItems;
