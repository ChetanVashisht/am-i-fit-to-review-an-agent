/**
  * This one is easy, especially if I can run it
  * the assign method mutates the target - it's not
  * safe */
const defaults = {
  retries: 3,
  headers: {
    "Content-Type": "application/json"
  }
};

function createRequest(config) {
  const finalConfig = Object.assign(defaults, config);
  return finalConfig;
}

const r1 = createRequest({ retries: 5 });
const r2 = createRequest({});

console.log(r2.retries);
