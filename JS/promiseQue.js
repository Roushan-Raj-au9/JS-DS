const get = async() => {
    let result = Promise.resolve(1)
    let data = await result;
    return data
}

get()
.then((data) => console.log("data >> ", data))
.catch((err) => console.log("error >> ", err))