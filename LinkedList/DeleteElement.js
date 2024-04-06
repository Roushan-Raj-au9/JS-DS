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

const deleteElement = (head, target) => {
    if (head === null) {
        return null;
    }
    if (head.value === target) {
        head = head.next;
        return head;
    }

    let current_ref = head;
    let previous = null;

    while (current_ref.value !== target) {
        previous = current_ref;
        current_ref = current_ref.next;
    }

    previous.next = current_ref.next;

    return head;
};

let node = new Node(5);
node.next = new Node(10);
node.next.next = new Node(15);

node = deleteElement(node, 5);

display(node);
