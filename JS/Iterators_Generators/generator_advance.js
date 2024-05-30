function* fetchNextElement(){
    const x = 10;
    yield 11;
    console.log("entering after a yield");
    const y = x + (yield 30)
    console.log("value of Y is ", y)
}

const itr = fetchNextElement();
console.log("first ", itr.next());  //first  { value: 11, done: false }
console.log("second ", itr.next()); // entering after a yield    --> second  { value: 30, done: false }
console.log("third ", itr.next());  // value of Y is  NaN   --> third  { value: undefined, done: true }

// console.log("first ", itr.next());  //first  { value: 11, done: false }
// console.log("second ", itr.next()); // entering after a yield    --> second  { value: 30, done: false }
// console.log("third ", itr.next(17));  // value of Y is  27   --> third  { value: undefined, done: true }