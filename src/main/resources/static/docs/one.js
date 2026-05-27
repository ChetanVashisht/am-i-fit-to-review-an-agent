/**
  * This one is fail because there's nothing blocking the cache
  * from being set twice like the double locking pattern
  * pattern popular in java
  *
  * Can be made obvious if we set the id randomly
  *
  **/
const cache = new Map();

async function fetchUser(id) {
  if (cache.has(id)) {
    return cache.get(id);
  }

  const data = await fakeApi(id);
  cache.set(id, data);
  return data;
}

async function fakeApi(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: "User" + id }), 100);
  });
}

(async () => {
  const [a, b] = await Promise.all([
    fetchUser(1),
    fetchUser(1)
  ]);
  console.log(a === b);
})();
