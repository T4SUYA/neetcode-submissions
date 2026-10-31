class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seem: Array<Number> = []
        for(let num of nums){
            if(seem.includes(num)){
                return true;
            }
            seem.push(num)
        }
        return false
    }
}
