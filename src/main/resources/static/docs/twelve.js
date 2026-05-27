/**
  * This one is about using different keys for the map that look the same */
const map = new Map();

const obj = { id: 1 };
map.set(obj, "user1");

console.log(map.get(obj));
