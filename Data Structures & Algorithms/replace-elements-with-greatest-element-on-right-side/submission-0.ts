class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {

        for(let i = 0; i < arr.length; i++){
            if((i + 1) == arr.length) {
                arr[i] = -1
                continue
            }

            let greatest = 0

            for(let j = i + 1; j < arr.length; j++){
                greatest = arr[j] > greatest ? arr[j] : greatest
            }

            arr[i] = greatest
        }

        return arr;
    }
}
