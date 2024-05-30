function* fetchNextElement() {
    yield 1;
    yield 2;
    yield 3;
}

const itr = fetchNextElement();
console.log("first ", itr.next());  //first  { value: 1, done: false }
console.log("second ", itr.next()); //second  { value: 2, done: false }
console.log("third ", itr.next());  //third  { value: 3, done: false }
console.log("fourth ", itr.next()); //fourth  { value: undefined, done: true }