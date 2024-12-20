const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imagelistWrapper = document.querySelector(".imagelist-wrapper");

runEventListeners();


function runEventListeners(){
    searchButton.addEventListener("click", search);
    clearButton.addEventListener("click", clear);
}
function clear(e) {
    Array.from(imagelistWrapper.children).forEach((e) => {e.remove()});
}
function search(e){
    clear()
    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID L8jVmeN1X9cAcL44AumOKuvEBF9HAZDjBrLdlNtbzCY"
        }
    })
    .then((res) => {return res.json()})
    .then((data) => {
        Array.from(data.results).forEach((image) => {
            addImageToUI(image.urls.small);
        })
    })
    .catch((err) => console.log(err))
    e.preventDefault();
}

function addImageToUI(url) {

    // <div class="card"">
    //      <img src="">
    // </div>

    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.height = "400";
    img.width = "400";
    div.appendChild(img);
    imagelistWrapper.appendChild(div);
}