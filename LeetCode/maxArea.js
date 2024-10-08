var maxArea = function (height) {

    let maxarea = 0, left = 0, right = height.length - 1;

    while (left < right) {

        maxarea = Math.max(maxarea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right])
            left++;
        else
            right--;
    }
    return maxarea;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));