const get = async() => {
    let result = Promise.resolve(1)
    let data = await result;
    return data
}

get()
.then((data) => console.log("data >> ", data))
.catch((err) => console.log("error >> ", err));


const promisifiedFunc = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved promisifiedFunc data 1")
        }, duration)
    })
};

promisifiedFunc(1000)
.then((data) => {
    console.log("promisifiedFunc data 1 >>> ", data)
    promisifiedFunc(2000).then((data2) =>  console.log("promisifiedFunc data 2 ... ", data2))
})
.catch((err) => console.log("promisifiedFunc error >>> ", err))