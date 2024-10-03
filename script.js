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
 