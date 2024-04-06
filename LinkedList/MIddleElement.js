class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const display = (head) => {
    let current_ref = head;
    while (current_ref !== null) {
        console.log('value >> ', current_ref.value);
        current_ref = current_ref.next;
    }
};

const findLength = (head) => {
    let count = 0;
    if (head === null) {
        return 0;
    }
    let current_ref = head;
    while (current_ref !== null) {
        count += 1;
        current_ref = current_ref.next;
    }
    return count;
};

const findMidElement = (head, mid_idx) => {
    if (head === null) {
        return;
    }

    let current_ref = head;
    let idx = 0;

    while (current_ref !== null && mid_idx !== idx) {
        idx += 1;
        current_ref = current_ref.next;
    }

    return current_ref.value;
};

const shortMethod_To_Find_Mid_Element = (head) => {
    let slow = head;
    let fast = head;

    while (slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.value;
};

let node = new Node(5);
node.next = new Node(10);
node.next.next = new Node(15);
// node.next.next.next = new Node(20);
// node.next.next.next.next = new Node(25);

let getLength = findLength(node);
let mid_idx = Math.floor(getLength / 2);

let result = findMidElement(node, mid_idx);
console.log('mid-element >>> ', result);

let shortMethod_result = shortMethod_To_Find_Mid_Element(node);
console.log('shortMethod_result - mid-element >>> ', shortMethod_result);

display(node);
