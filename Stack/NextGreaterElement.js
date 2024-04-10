class Stack {
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    is_empty(){ 
        return this.stack.length === 0;
    }

};

function find_next_greater_element(lst){
    let stack = new Stack();
    let idx = 0;

    while(idx < lst.length){
        let element = lst[idx];

        if(stack.is_empty() === true){
            stack.push(element);
        }
        else{
            while(stack.is_empty() === false && stack.peek() < element){
                console.log("inside 1st while >>> ", stack.peek(), element)
                stack.pop();
            }
            stack.push(element);
        }

        idx += 1;
    }

    while(stack.is_empty() === false){  // here we print those element who does not have next greater element as -1
        console.log("2nd while >> ", stack.peek(), -1)
        stack.pop();
    }

}

// find_next_greater_element([5,7,2,1,5,4])
find_next_greater_element([1,2,3,4,3])