/**
  * zero and -zero are equal
    */
const values = [NaN, 0, -0];

for (let i = 0; i < values.length; i++) {
  for (let j = 0; j < values.length; j++) {
    if (values[i] === values[j]) {
      console.log(i, j, values[i], values[j]);
    }
  }
}
