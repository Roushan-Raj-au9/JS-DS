const login = new Promise((resolve, reject) => {
    resolve("Login Success");
});

const register = new Promise((resolve, reject) => {
    resolve("Register Success");
});

Promise.customPromiseAll = (arrayOfPromise) => {
    return new Promise((resolve, reject) => {
        let result = [];
        let counter = 0;

        for(let i = 0; i < arrayOfPromise.length; i++){
            Promise.resolve(arrayOfPromise[i]).then((data) => {
                result[i] = data;
                counter += 1;

                if(counter === arrayOfPromise.length){
                    resolve(result)
                }
            })
            .catch((err) => reject(err))
        }
    })
};

Promise.customPromiseAll([login, register])
.then((data) => console.log("data >> ", data ))
.catch((err) => console.log("err >> ", err));