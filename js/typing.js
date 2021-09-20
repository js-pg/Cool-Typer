function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



nthQuote = getRandomInt(1594)

const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth(quotes, 1));


