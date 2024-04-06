let lst = [10,20,30,40,50];
let target = 40;

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        console.log('mid >> ', mid);
        if(arr[mid] === target){
            return true;
        }
        else if(arr[mid] > target){
            right = mid - 1;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            return false;
        }
    }
    return false;
};

console.log(binarySearch(lst, target));