/**
  * Breaks for arrays 
  */
function merge(target, source) {
  for (let key in source) {
    if (typeof source[key] === "object") {
      if (!target[key]) target[key] = {};
      merge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const a = { config: { retries: 3 } };
const b = { config: [{ timeout: 1000 }] };

const result = merge(a, b);
console.log(result);
