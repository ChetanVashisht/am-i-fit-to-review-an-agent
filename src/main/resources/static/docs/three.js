/**
 * I tripped on this one - running it made it obvious 
 * what the problem was, but I would have caught this 
 * with tests
 * */
function createHandlers() {
  const handlers = [];

  for (var i = 0; i < 3; i++) {
    handlers.push(function () {
      return i;
    });
  }

  return handlers;
}

const hs = createHandlers();
console.log(hs[0](), hs[1](), hs[2]());
