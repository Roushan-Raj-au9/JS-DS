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

const AddElementAtLAst = (head, value) => {
    if (head === null) {
        return new Node(value);
    }
    let current_ref = head;

    while (current_ref.next !== null) {
        current_ref = current_ref.next;
    }
    current_ref.next = new Node(value);
    return head;
};

// let node = null;
let node = new Node(5);
node.next = new Node(10);
node.next.next = new Node(15);

node = AddElementAtLAst(node, 20);
node = AddElementAtLAst(node, 25);

display(node);
