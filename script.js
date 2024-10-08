
// iterative solution
function fibs(num) {
  let array = []
  for(let n = 0; n < num; n++) {
      if(n < 1) array.push(0)
      else if (n > 0 && n < 2) array.push(1)
      else {
          array.push((array[array.length-1]) + (array[array.length-2]))
      }
  }
  return array


}


// recursive solution
function fibRec(n) {
  let store;
  if (n === 1) return [0]
  else {
      store = fibRec(n-1)
      if(store.length < 2) {
          store.push(store.length)
      } else {
          store.push((store[store.length - 1]) + (store[store.length - 2]))
      }
  }


  return store
}

