/**
  * This one tripped me up - I thought that since we aren't doing
  * anything async in the function - that the exception will get 
    * caught - running it reveals the uncaught nature */
async function main() {
  try {
    doAsyncThing(); // forgot await
  } catch (e) {
    console.log("caught", e.message);
  }
}

async function doAsyncThing() {
  throw new Error("boom");
}

main();
