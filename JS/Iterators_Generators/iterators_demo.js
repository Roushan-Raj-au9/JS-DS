const fetchNextElement = (array) => {
    let idx = 0;
    const next = () => {
        if(idx === array.length){
            return { value: undefined, done: true }
        }
        let nextElement = array[idx];
        idx++;
        return { value: nextElement, done: false };
    }

    return { next }
};

let arr = [1,2,3,4,5];
const automaticFetcher = fetchNextElement(arr);
console.log(automaticFetcher.next());   //{ value: 1, done: false }
console.log(automaticFetcher.next());   //{ value: 2, done: false }
console.log(automaticFetcher.next());   //{ value: 3, done: false }
console.log(automaticFetcher.next());   //{ value: 4, done: false }
console.log(automaticFetcher.next());   //{ value: 5, done: false }
console.log(automaticFetcher.next());   //{ value: undefined, done: true }
