// 1. Two Sum

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
      Map<Integer, Integer> hashMap = new HashMap<>();

      for(int i = 0; i < nums.length; i++) {
        if(hashMap.containsKey(nums[i])) {
          return new int[]{hashMap.get(nums[i]), i};
        }else {
          hashMap.put(target - nums[i], i);
        }
      }

      throw new IllegalArgumentException("No two sum solution");
    }
}
