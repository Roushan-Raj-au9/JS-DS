class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const insert = (root, node) => {
    if(root === null){
        root = node;
    }
    else{
        if(root.value < node.value){    // for right insertion  condition
            if(root.right === null){
                root.right = node
            }
            else{
                insert(root.right, node)
            }
        }
        else{
            if(root.left === null){
                root.left = node
            }
            else{
                insert(root.left, node)
            }
        }
    }
}

const search = (root, target) => {
    if(root === null){
        return false;
    }
    if(root.value === target){
        console.log("found target >>> ", root.value);
        return true
    }
    if(root.value < target){
        return search(root.right, target)
    }
    return search(root.left, target)
}


let root = new Node(30);

insert(root, new Node(15))
insert(root, new Node(60))
insert(root, new Node(80))

console.log(search(root, 15));

















// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// const insert = (root, node) => {
//     if (root === null) {
//         root = node;
//     } else {
//         if (root.value > node.value) {   // for left insertion  condotion
//             if (root.left === null) {
//                 root.left = node;
//             } 
//             else {
//                 insert(root.left, node);
//             }
//         } 
//         else {
//             if (root.right === null) {
//                 root.right = node;
//             } 
//             else {
//                 insert(root.right, node);
//             }
//         }
//     }
// }

// const search = (root, target) => {
//     if (root === null) {
//         return false;
//     }
//     if (root.value === target) {
//         console.log("found target >>> ", root.value)
//         return true;
//     }
//     if (root.value < target) {
//         return search(root.right, target);
//     }
//     return search(root.left, target);
// }

// let root = new Node(30);
// insert(root, new Node(15));
// insert(root, new Node(60));
// insert(root, new Node(80));

// console.log(search(root, 15)); // Output: true
