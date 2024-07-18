/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    let stack = [];
    let components = path.split('/');

    for (let component of components) {
        if (component === '' || component === '.') {
            // Skip empty components and single periods (.)
            continue;
        } else if (component === '..') {
            // Pop from stack if it's not empty for double periods (..)
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Push valid directory names onto the stack
            stack.push(component);
        }
    }

    // Join stack with '/' to form the simplified path
    let simplifiedPath = '/' + stack.join('/');

    return simplifiedPath;
}

// Example usage:
console.log(simplifyPath("/home/")); // Output: "/home"
console.log(simplifyPath("/home//foo/")); // Output: "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")); // Output: "/home/user/Pictures"
console.log(simplifyPath("/../")); // Output: "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")); // Output: "/.../b/d"
