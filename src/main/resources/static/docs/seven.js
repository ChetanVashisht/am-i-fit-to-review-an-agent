/**
  * Took me really long to figure this out
  * including running it many times
  *
  * retries-- doesn't work; it needs to be
  * retries-1 because -- updates a variale
  * which comes from the closure, not the value
  * going into the function as a parameter
  **/
async function fetchWithRetry(fn, retries = 3) {
  try {
    console.log(fn, retries);
    return await fn();
  } catch (err) {
    if (retries === 0) throw err;
    return fetchWithRetry(fn, retries-1);
  }
}

await fetchWithRetry(async () => {
  throw new Error("fail " + count);
});
