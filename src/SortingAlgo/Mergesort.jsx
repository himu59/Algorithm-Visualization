export function getMergeSortAnimation (array) {
    const animation = []
    if(array.length <= 1) return array
    const auxiArray = array.slice();
    MergeSortHelper(array,0,array.length-1,auxiArray,animation)
    return animation
}

function MergeSortHelper(mainArray,start,end,auxiArray,animation,) {

    if(start === end) return
    const mid = Math.floor((start+end)/2)
    MergeSortHelper(auxiArray,start,mid,mainArray,animation)
    MergeSortHelper(auxiArray,mid+1,end,mainArray,animation)

    doMerge(mainArray,start,mid,end,auxiArray,animation)
}

function doMerge(mainArray,start,mid,end,auxiArray,animation){
    let i = start
    let k = start
    let j = mid+1

    while(i<=mid && j<=end){
        animation.push([i,j]) // to change color
        animation.push([i,j]) // to revert color
        if(auxiArray[i] <= auxiArray[j]){
            animation.push([k,auxiArray[i]])
            mainArray[k++] = auxiArray[i++]
        }
        else{
            animation.push([k,auxiArray[i]])
            mainArray[k++] = auxiArray[j++]
        }
    }
    while(i<=mid){
        animation.push([i,i])
        animation.push([i,i])
        animation.push([k,auxiArray[i]])
        mainArray[k++] = auxiArray[i++]
    }
    while(j<=end){
        animation.push([j,j])
        animation.push([j,j])
        animation.push([k,auxiArray[i]])
        mainArray[k++] = auxiArray[j++]
    }
}
