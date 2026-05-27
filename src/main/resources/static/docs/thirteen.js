/** JSON cloning breaking for all non trivial objects
  * Even adding functions,dates,proxy breakes this */
const original = {
  date: new Date(),
  nested: { value: 1 },
};

const clone = JSON.parse(JSON.stringify(original));

console.log(typeof clone.date);
