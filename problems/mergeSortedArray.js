// leetCode--> https://leetcode.com/problems/merge-sorted-array/description/

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

function merge(nums1, m, nums2, n) {
    let result = Array(m + n);
    let i = 0;  //iterate on nums1
    let j = 0;  //iterate on nums2
    let k = 0;  //iterate on result
    
    while(i < m && j < n){
        if(nums1[i] < nums2[j]){
            result[k] = nums1[i];
            i++;
            k++;
        }
        else{
            result[k] = nums2[j];
            j++;
            k++;
        }
    }

    while(i < m){
        result[k] = nums1[i];
        i++;
        k++;
    }

    while(j < n){
        result[k] = nums2[j];
        j++;
        k++;
    }

    console.log("merged array", result);

    // for(let i = 0; i < result.length; i++){
    //     nums1[i] = result[i]
    // }

};

merge(nums1, m, nums2, n)