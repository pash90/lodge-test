/// <reference path="./type.js" />

/** Libraries */
const Moment = require("moment");

/**
 *
 * @param {Log[]} arr
 * @param {number} n
 */
const mergeSort = (arr, n) => {
  // For current size of subarrays to
  // be merged curr_size varies from
  // 1 to n/2
  let curr_size;

  // For picking starting index of
  // left subarray to be merged
  let left_start;

  let finalarr;

  // Merge subarrays in bottom up
  // manner. First merge subarrays
  // of size 1 to create sorted
  // subarrays of size 2, then merge
  // subarrays of size 2 to create
  // sorted subarrays of size 4, and
  // so on.
  for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
    // Pick starting polet of different
    // subarrays of current size
    for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
      // Find ending polet of left
      // subarray. mid+1 is starting
      // polet of right
      let mid = left_start + curr_size - 1;

      let right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

      // Merge Subarrays arr[left_start...mid]
      // & arr[mid+1...right_end]
      finalarr = merge(arr, left_start, mid, right_end);
    }
  }

  return finalarr;
};

/**
 * Function to merge the two haves arr[l..m]
 * and arr[m+1..r] of array arr[]
 *
 * @param {Log[]} arr
 * @param {number} l
 * @param {number} m
 * @param {number} r
 */
const merge = (arr, l, m, r) => {
  let i, j, k;
  let n1 = m - l + 1;
  let n2 = r - m;

  /* create temp arrays */
  let L = [],
    R = [],
    mergedArray = [];

  /* Copy data to temp arrays L[] 
        and R[] */
  for (i = 0; i < n1; i++) L[i] = arr[l + i];
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  /* Merge the temp arrays back leto 
        arr[l..r]*/
  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    if (Moment(L[i].time).isBefore(Moment(R[j].time))) {
      mergedArray[k] = L[i];
      i++;
    } else {
      mergedArray[k] = R[j];
      j++;
    }
    k++;
  }

  /* Copy the remaining elements of  
        L[], if there are any */
  while (i < n1) {
    mergedArray[k] = L[i];
    i++;
    k++;
  }

  /* Copy the remaining elements of 
        R[], if there are any */
  while (j < n2) {
    mergedArray[k] = R[j];
    j++;
    k++;
  }

  return mergedArray;
};

module.exports = { mergeSort };
