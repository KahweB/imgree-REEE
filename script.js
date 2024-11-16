const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imagelistWrapper = document.querySelector(".imagelist-wrapper");

runEventListeners();


function runEventListeners(){
    form.addEventListener("submit", search);
}

function search(e){

    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID L8jVmeN1X9cAcL44AumOKuvEBF9HAZDjBrLdlNtbzCY"
        }
    })
    .then((res) => {return res.json()})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    


    e.preventDefault();
}
