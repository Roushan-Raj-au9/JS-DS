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

function find_min_element(lst){
    let stack = new Stack();
    let stack2 = new Stack();

    let idx = 0;

    while(idx < lst.length){
        let element = lst[idx];
        if(stack.is_empty() === true){
            stack.push(element);
            stack2.push(element);
        }
        else{
            if(stack.is_empty() === false && stack.peek() > element){
                stack.push(element);
            }
            else{
                if(stack2.is_empty() === true){
                    stack2.push(element);
                }
                else if(stack2.is_empty() === false && stack2.peek() < element){
                    stack2.pop();
                    stack2.push(element);
                }
            }
        }

        idx += 1;
    }
    return stack2.peek();

};

let arr = [8,10,5,2,1,6,3]
// let arr = [0,8,10,5,2,1,6,3]
let result = find_min_element(arr)
console.log("result >>> ", result)
