const reviewTitle = document.getElementById("reviewTitle");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const submit = document.getElementById("reviewButton");
const reviews = document.getElementById("reviewsRow");



submit.addEventListener("click", function (event) {
    event.preventDefault();

    const newCol = document.createElement("div");
    newCol.classList.add("col-lg-4", "col-md-6", "py-3");
    const newCard = document.createElement("div");
    newCard.classList.add("card", "h-100");
    const newCardBody = document.createElement("div");
    newCardBody.classList.add("card-body");
    newCard.appendChild(newCardBody);
    newCol.appendChild(newCard);


    const newH4 = document.createElement("h4");
    newH4.classList.add("card-title");
    newH4.innerText = reviewTitle.value;
    newCardBody.appendChild(newH4);


    const newBlock = document.createElement("blockquote");
    newBlock.classList.add("blockquote", "mb-0");
    newCardBody.appendChild(newBlock);

    const newP = document.createElement("p");
    newP.innerText = reviewText.value;
    newBlock.appendChild(newP);


    const newFooter = document.createElement("footer");
    const newFooterText = document.createElement("i");
    newFooter.appendChild(newFooterText);
    newFooter.classList.add("text-end", "blockquote-footer");
    if (reviewName.value !== "") {
        newFooterText.innerText = reviewName.value;
    } else {
        newFooterText.innerText = "Anonymous";
    }

    newBlock.appendChild(newFooter);

    reviews.appendChild(newCol);
});

