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

const AddInBetween = (head, afterWhichValue, data) => {
    if (head === null) {
        return new Node(data);
    }

    let current_ref = head;
    while (current_ref.value !== afterWhichValue) {
        current_ref = current_ref.next;
    }
    let newNode = new Node(data);
    newNode.next = current_ref.next;
    current_ref.next = newNode;

    return head;
};

// // Based on Index Position
// const AddInBetween = (head, afterWhichPosition, data) => {
//   if (head === null) {
//     return new Node(data);
//   }

//   let current_ref = head;
//   let count = 1;

//   while(current_ref.next !== null && count !== afterWhichPosition){
//     count += 1
//     current_ref = current_ref.next;
//   }
//   let newNode = new Node(data);
//   newNode.next = current_ref.next;
//   current_ref.next = newNode;

//   return head;

// };

let node = new Node(5);
node.next = new Node(10);
node.next.next = new Node(15);

// node = AddInBetween(node, 10, 50);
node = AddInBetween(node, 2, 50);

display(node);
