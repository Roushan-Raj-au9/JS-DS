console.log("hii yyy");

const Fruits = ["Banana", "Apple", "Mango", "Orange", "Lemon"];

const getSuggestions = (keyword) => {
    let result = Fruits.filter((item) => item.toLowerCase().includes(keyword.toLowerCase()));

    return new Promise((resolve) => {
        setTimeout(() => resolve(result), 1000);
    })
}

// getSuggestions('ap')
// .then((data) => console.log(data))
// .catch((err) => console.error(err));

const inputBox = document.getElementById('search');
const suggestionBox = document.getElementById('suggestion_container');

// const debounce = (e) => {
//     let timer;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//         handleSearch(e.target.value);
//     }, 3000);
// }

const handleSearch = async(keyword) => {
    // console.log("keyword in handleSearch >> ", keyword)
    suggestionBox.innerHTML = "";

    if(!keyword){
        return; 
    }

    const output = await getSuggestions(keyword);

    if(output && output.length > 0){
        const list = document.createElement('ul');

        output.forEach((item) => {
            const listItems = document.createElement('li');
            listItems.style.cursor = 'pointer';
            listItems.innerText = item;
            list.appendChild(listItems);
        })

        suggestionBox.innerHTML = "";
        suggestionBox.appendChild(list);
    }
};

const onClick = (e) => {
    if(e.target === suggestionBox){
        return;
    }

    let text = e.target.innerText;
    inputBox.value = text;
    inputBox.focus();
}

inputBox.addEventListener('focus', () => {
    suggestionBox.style.display = 'block';
});

// inputBox.addEventListener('blur', () => {
//     suggestionBox.style.display = 'none';
// });

window.addEventListener('click', (e) => {
    if(e.target === inputBox || e.target === suggestionBox){
        return;
    }

    suggestionBox.style.display = 'none';
});

inputBox.addEventListener('keyup', (e) => {
    handleSearch(e.target.value);
});

// inputBox.addEventListener('keyup', debounce);

suggestionBox.addEventListener('click', onClick, true); //applying true here to "capture" the bubbled up 




