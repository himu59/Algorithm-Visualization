export function getQuicksortanimation (array) {
        if(array.length <= 1) return array
        const animation = []
        const auxiarray = array.slice()
        quicksort(auxiarray,0,array.length-1,animation)
        console.log(array)
        return animation
}

export function partition(auxiarray,s,e,animation) {
    let pivot = auxiarray[Math.floor((s+e)/2)]
    let j = e;
    let i = s;
    while(i<=j) {
      while(auxiarray[i] < pivot) i++;
      while(auxiarray[j] > pivot) j--;
        if(i<=j) {
            let tmp = auxiarray[i]
            auxiarray[i] = auxiarray[j]
            auxiarray[j] = tmp

            animation.push([i,j])
            i++; j--;
        }
      }
      return i;
}
   

export function quicksort(auxiarray,s,e,animation) {
    var pivot
    if(auxiarray.length > 1) {
    pivot = partition(auxiarray,s,e,animation)
    if(s<pivot-1) quicksort(auxiarray,s,pivot-1,animation);
    if(pivot < e) quicksort(auxiarray,pivot,e,animation);
    }
    
    return auxiarray
}
