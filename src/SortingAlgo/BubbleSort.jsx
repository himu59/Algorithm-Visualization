export function getBubbleSortAnimation (array) {
    if(array.length <= 1) return array
    const auxiarray = array.slice()
    const animation = []
    BubbleSort(animation,auxiarray,auxiarray.length)
    return animation
}

function BubbleSort(animation,array,n){
   var flag;
   do {
    flag = false
    for(let i = 0; i<n-1; i++) {
        if(array[i] > array[i+1]) {
            var tmp = array[i+1];
            array[i+1] = array[i]
            array[i] = tmp
            animation.push([i,i+1])
            // animation.push([i,i+1])
            flag = true
        }
    }
   } while(flag);
}