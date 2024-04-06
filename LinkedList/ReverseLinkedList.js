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

const reverse = (head) => {
    if (head === null) {
        return null;
    }
    let current_ref = head;
    let previous = null;

    while (current_ref !== null) {
        let store_ref = current_ref.next;
        current_ref.next = previous;
        previous = current_ref;
        current_ref = store_ref;
    }

    return previous;
};

let node = new Node(5);
node.next = new Node(10);
node.next.next = new Node(15);

node = reverse(node);

display(node);
