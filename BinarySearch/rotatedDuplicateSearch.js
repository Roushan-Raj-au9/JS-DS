let lst = [1, 0, 1, 1, 1];
let target = 0;

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return true;
        }
        // Check if the left half is sorted
        if (arr[left] < arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        }
        else if (arr[left] > arr[mid]) { // Check if the right half is sorted
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
        else { // Handling duplicates
            left++; // Move left pointer to skip duplicates
        }

    }
    return false;
};

console.log(binarySearch(lst, target));