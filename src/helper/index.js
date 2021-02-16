import shuffle from 'lodash/shuffle';

let _reals;
export function createReals() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(i);
  }
  result = shuffle(result);
  _reals = result.slice(0, 4);
}

export function getResult(user) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < 4; i++) {
    if (user[i] === _reals[i]) {
      a += 1;
    } else if (_reals.indexOf(user[i]) !== -1) {
      b += 1;
    }
  }
  return {a, b};
}

export const reals = {
  get() {
    return _reals;
  },
  set(value) {
    throw new Error('You should not set reals directly');
  }
}

export function formatTime(time) {
  time = time / 1000 >> 0;
  const result = [];
  let count = 0;
  while (time > 0 && count < 3) {
    result.push(time % 60);
    time = time / 60 >> 0;
    count++;
  }
  return result.reverse().join(':');
}
