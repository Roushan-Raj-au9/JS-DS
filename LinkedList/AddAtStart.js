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

const AddElementAtStart = (head, data) => {
    let newNode = new Node(data);

    if (head === null) {
        return newNode;
    }
    newNode.next = head;
    head = newNode;

    return head;
};

let node = new Node(5);
node.next = new Node(10);
node.next.next = new Node(15);

node = AddElementAtStart(node, 30);

display(node);
