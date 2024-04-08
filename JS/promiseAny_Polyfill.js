let login = new Promise((resolve, reject) => {
    reject('Login Success')
});

let register = new Promise((resolve, reject) => {
    resolve("Register Success")
});

Promise.customPromiseAny = (arrayOfPromise) => {
    return new Promise((resolve, reject) => {
        let error = [];
        let counter = 0;

        for(let i = 0; i < arrayOfPromise.length; i++){
            Promise.resolve(arrayOfPromise[i]).then((data) => resolve(data))
            .catch((err) => {
                error[i] = err
                counter += 1;

                if(counter === arrayOfPromise.length){
                    reject(error)
                }
            })
        }
    })
};

Promise.customPromiseAny([login, register])
.then((data) => console.log("data >>> ", data))
.catch((err) => console.log("error >>> ", err)) 