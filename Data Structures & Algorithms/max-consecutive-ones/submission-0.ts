class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0;
        let tempCounter = 0;
        nums.forEach((num) => {
            if (num == 0) {
                tempCounter = 0;
            }
            if (num == 1) {
                tempCounter = tempCounter + 1;
            }
            if (tempCounter > max) {
                max = tempCounter;
            }
        });
        return max;
    }
}
