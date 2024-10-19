
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


// mergeSort

function mergeSort(array) {
    let orderedArray = []
    
    if((array.length === 1)) return array
    else {
      let rightSide = array.splice(Math.round((array.length-1)/2)) 
      let l = mergeSort(array)
      let r = mergeSort(rightSide)
      let arraySize = l.length + r.length

      for (let i = 0; i < arraySize; i++) {
        if(l[0]<r[0] || r.length === 0) orderedArray.push(Number(l.splice(0, 1)))
        else if (r[0]<l[0] || l.length === 0) orderedArray.push(Number(r.splice(0, 1)))
      }
    }

  return orderedArray
}
