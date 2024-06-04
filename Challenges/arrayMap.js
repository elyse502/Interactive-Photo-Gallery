#!/home/elysee_niyibizi/.nvm/versions/node/v22.0.0/bin/node

/**
 * Checks if there exists a contiguous subarray within the given array that sums up to the target sum.
 *
 * @param {number[]} arr - The input array of integers.
 * @param {number} target - The target sum to be matched.
 * @returns {boolean} - True if a contiguous subarray sums up to the target, otherwise false.
 */
function subarraySumExists(arr, target) {
    let sum = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum > target) {
            sum -= arr[left];
            left++;
        }

        if (sum === target) {
            return true;
        }
    }

    return false;
}

/**
 * Entry point of the script.
 */
function main() {
    const arr = [4, 2, 7, 1, 9, 5];
    const target = 14;
    const result = subarraySumExists(arr, target);
    console.log(result); // Expected output: true
}

main();