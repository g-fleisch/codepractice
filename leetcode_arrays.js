/***************** Max Consecutive Ones */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var maxcon = 0;
    var currentcon = 0;
    for(i=0;i<nums.length;++i){
        num = nums[i];
        if(num == 1){
            currentcon++;
        } else {
            currentcon = 0;
        }
        if(currentcon > maxcon)
            maxcon = currentcon;
    }
    return maxcon;
};

/***************** Find Numbers With Even Digits */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    edn = 0;
    for(let i=0;i<nums.length;i++){
        num = nums[i];
        digitsnum = String(num).length;
        if(digitsnum % 2 == 0)
            edn += 1;
    }
    return edn;
};

/***************** Squares of a Sorted Array */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var squaresarray = [];
    for(let i=0;i<nums.length;i++){
        num = nums[i];
        squaresarray[i] = num*num;
    }
    squaresarray.sort(function(a,b){
        return a - b;
    });
    return squaresarray;
};

/***************** Duplicate Zeros */
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var shiftArray = function(arr, stindx){
    for(let i=arr.length-1;i>stindx;i--){
        arr[i] = arr[i-1];
    }
}

var duplicateZeros = function(arr) {
    for(let i=0;i<arr.length;i++){
        num = arr[i];
        if(num == 0){
            shiftArray(arr,i);
            i++;
        }
    }
    return arr;
};

/***************** Merge Sorted Array */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var shift = function(arr, startindex) {
    for(let i=arr.length-1;i>startindex;i--){
        arr[i] = arr[i-1];
    }
}

var merge = function(nums1, m, nums2, n) {
    var nums2pos = 0;
    for(let i=0;i<nums1.length;i++){
        var num1 = nums1[i];
        var num2 = nums2[nums2pos];
        if(num2 < num1){
            shift(nums1,i);
            nums1[i]=nums2[nums2pos];
            nums2pos++;
        } else if(i>=m+nums2pos) {
            nums1[i]=nums2[nums2pos];
            nums2pos++;
        }
    }
    return nums1;
};
