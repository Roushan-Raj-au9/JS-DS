function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let lst = [1,2,3,4,5]

let i = 0;
let j = lst.length - 1;

while(i <= j){
    swap(lst, i, j);
    i++;
    j--;
};

console.log("lst .. ", lst)