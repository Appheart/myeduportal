import { STRING } from '../constants/index.js';

function filter(toFilter) {
  let result;

  let data = [1, 2, 3, 4, 5, 5, 4, 4, 5, 2, 3];

  if (typeof toFilter == STRING || typeof toFilter == 'number') {
    result = data.filter((x) => toFilter == x);

    console.log(result);
    return;
  }

  if (Array.isArray(toFilter)) {
    result = data.filter((x) => toFilter.includes(x));

    console.log(result);
    return;
  }
  return result;
}

function getData(data) {}

filter([3, 2]);
