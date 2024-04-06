// let lst = [2, 1, 7, 11, 3]
// let target = 4;
let lst = [3,3]
let target = 6;

let result = [];


// // brute force
// for(let i = 0; i < lst.length; i++){
//     for(let j = 1; j < lst.length; j++){
//         if(lst[i] + lst[j] === target){
//             result.push(lst[i]);
//             result.push(lst[j]);
//             console.log("sum pairs >>", result)
//             return;
//         }
//     }
// }


// // not full accurate
// for(let i = 0; i < lst.length; i++){
//     if(target - lst[i] < lst[i] && lst.includes(target - lst[i])){
//         console.log("sum pairs >> ", lst.indexOf(target - lst[i]), lst.indexOf(lst[i]))
//     }
// }


//full accurate
let map = new Map();
for(let i = 0; i < lst.length; i++){
    if(map.has(target - lst[i])){
        console.log("sum pairs >>> ", [map.get(target - lst[i]), i])
    }
    map.set(lst[i], i)
}