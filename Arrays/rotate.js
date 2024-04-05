function rotate(nums, k) {
    const n = nums.length;
    k %= n;
    
    const rotated = [];
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}