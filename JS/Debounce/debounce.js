console.log("Hi debounce")
let search = document.getElementById('search')
let show = document.getElementById('show')
let showThrottleValue = document.getElementById('showThrottleValue')

let timer;

search.addEventListener('input', (e) => {
    debounce(e.target.value)
    throttle(e.target.value)
})

const debounce = (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        console.log("inside")
        show.innerText = value
    }, 1000)
};


// ----------- Throttling part (not accurate)

// let shouldWait = false;
// let waitingArgs;

// const throttle = (value) => {
//     if(shouldWait){
//         // waitingArgs = value;
//         return;
//     }

//     showThrottleValue.innerText = value;

//     shouldWait = true;

//     setTimeout(() => {
//         shouldWait = false;
//         // if(waitingArgs == null){
//         //     shouldWait = false;
//         // }
//         // else{
//         //     showThrottleValue.innerText = waitingArgs;
//         //     waitingArgs = null; 
//         // }
//     }, 1000)

// }

let throttleTimer;
let lastSearchValue = '';

const throttle = (value) => {
    if (!throttleTimer) {
        // Execute the action immediately if there's no throttleTimer active
        executeThrottleAction(value);
        throttleTimer = setTimeout(() => {
            // Clear the throttleTimer after the specified interval
            throttleTimer = null;
        }, 1000); // Set the throttle interval to 1000 milliseconds
    } else {
        // Store the last value for later execution
        lastSearchValue = value;
    }
};

const executeThrottleAction = (value) => {
    showThrottleValue.innerText = value;
    if (lastSearchValue !== '') {
        // If there's a stored value from a previous call, execute the action with that value
        showThrottleValue.innerText = lastSearchValue;
        lastSearchValue = ''; // Reset the lastSearchValue
    }
};