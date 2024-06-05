// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

let s = "{{{}}}"

function valid(s) {
    while (s.length > 0) {
        let t = s;

        s = s.replace("()", "");
        s = s.replace("{}", "");
        s = s.replace("[]", "");

        if (t === s) {
            return false;
        }
    }
    return true;
}

console.log(valid(s))