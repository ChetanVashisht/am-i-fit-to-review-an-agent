/**
 * This is not safe because city can be null
 * */
function getUserCity(user) {
  return user?.address?.city.toLowerCase() || "unknown";
}

console.log(getUserCity({ address: { city: null } }));
