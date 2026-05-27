/** fifteen - I think this is the wrong way to compare
  * dates - we need to use getTime and then compare*/
function isExpired(expiry) {
  return new Date() > new Date(expiry);
}

console.log(isExpired("2026-01-12"));

/** sixteen - since doWork is awaited in the loop
 * there's no parallelization here - fully serial */
async function process(items) {
  const results = [];

  await items.forEach(async (item) => {
    const res = await doWork(item);
    results.push(res);
  });

  return results;
}

async function doWork(x) {
  return await Promise.resolve(x * 2);
}

process([1,2,3]).then(console.log);

/** seventeen - i don't think this is a bug - it assumes that config is immutable */
const config = {
  retries: 3
};

function updateConfig(newConfig) {
  return { ...config, ...newConfig };
}

const c1 = updateConfig({ retries: 0 });
const c2 = updateConfig({});
const c3 = updateConfig(null);

console.log(c1.retries, c2.retries, c3.retries);

/** eighteen - there's no issue here, this is straight from mdn for math.epsilon */
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));

/** nineteen - this wont work - it will double initialize the instance
 * because in both cases we don't get the value initially - if there are
 * side effects it will get triggered twice */
let instance;

function getInstance() {
  if (!instance) {
    instance = create();
  }
  return instance;
}

async function create() {
  return { ts: Date.now() };
}

(async () => {
  const [a, b] = await Promise.all([
    getInstance(),
    getInstance()
  ]);

  console.log(a === b);
})();


/** twenty - we get two different lists here */
function addItem(item, list = []) {
  list.push(item);
  return list;
}

const a = addItem(1);
const b = addItem(2);

console.log(a, b);

/** twentyone - I'm fully bamboozled! - for a guy who knows regexes! */
const regex = /foo/g;

function test(str) {
  return regex.test(str);
}

console.log(`21. ${test("foo")}`);
console.log(`21. ${test("foo")}`);

/** twentytwo - this won't throttle - this will only ever allow one instance
 * also runnint it I notice that it never actually runs because run fn(..args) in settimeout
 * which needs a function as an arg here we get undefined*/
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

const d = debounce(console.log, 100);
d("hello");
d("hello");
