/**
  * process({ config: { timeout: 0 } }) returns 1000 */
function process({ config: { timeout } = {} }) {
  return timeout || 1000;
}

console.log(process({ config: { timeout: 0 } }));
