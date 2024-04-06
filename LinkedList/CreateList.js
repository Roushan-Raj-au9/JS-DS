class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const displayNode = (head) => {
    let current_ref = head;

    while (current_ref !== null) {
        console.log('value >> ', current_ref.value);
        current_ref = current_ref.next;
    }
};

const node = new Node(5);
node.next = new Node(10);
node.next.next = new Node(15);

displayNode(node);
