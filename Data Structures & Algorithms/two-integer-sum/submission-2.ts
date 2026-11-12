class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            const matchIndex = map.get(complement);
            if (matchIndex && matchIndex != i) {
                return [i, matchIndex];
            }
        }
    }
}
