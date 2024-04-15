console.log("Hi debounce")
let search = document.getElementById('search')
let show = document.getElementById('show')

let timer;

search.addEventListener('input', (e) => {
    debounce(e.target.value)
})

const debounce = (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        console.log("inside")
        show.innerText = value
    }, 1000)
}

