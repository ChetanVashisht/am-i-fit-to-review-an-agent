/**
 * I didn't get this one - it seems to work
 * The sync/async version works too.
  * */
function doWork() {
  return Promise.resolve()
    .then(() => {
      throw new Error("fail");
    })
    .catch(err => {
      console.log("handled", err.message);
    })
    .then(() => {
      throw new Error("another fail");
    });
}

doWork().catch(err => {
  console.log("final catch:", err.message);
});
