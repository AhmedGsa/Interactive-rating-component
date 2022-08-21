let ratingDiv = document.querySelector(".rating");
let selectedRating;

for (let i = 1; i < 6; i++) {
    let rating = document.createElement("div");
    rating.innerText = `${i}`;
    rating.className = "rating-val";
    ratingDiv.appendChild(rating);
}

let myRatings = document.querySelectorAll(".rating-val");
for (let i = 0; i < 5; i++) {
    myRatings[i].onclick = function () {
        if(selectedRating!==i+1) {
            for(let j=0;j<5;j++) {
                myRatings[j].removeAttribute("style");
            }
            myRatings[i].style = "background-color: hsl(25, 97%, 53%); color: white;";
            selectedRating = i+1;
        } else {
            myRatings[i].removeAttribute("style");
            selectedRating = undefined;
        }
    };
};

let myButton = document.querySelector(".button");
myButton.onclick = function() {
    let state_1 = document.querySelector(".state-1");
    if(selectedRating != undefined) {
        let state_2 = document.createElement("div");
        state_2.className = "state-2";
        let img = document.createElement("object");
        img.setAttribute("data", "images/illustration-thank-you.svg");
        state_2.appendChild(img);
        let ratingP = document.createElement("p");
        ratingP.innerText = `You selected ${selectedRating} out of 5`;
        ratingP.style = "background-color: #272D33; color: #835D46; padding: 5px 10px; border-radius: 30px;";
        state_2.appendChild(ratingP);
        let myThankYou = document.createElement("h1");
        myThankYou.innerText = "Thank you!"
        state_2.appendChild(myThankYou);
        let myP = document.createElement("p");
        myP.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
        myP.style = "color: hsl(217, 12%, 63%);";
        state_2.appendChild(myP);
        let myContainer = document.querySelector(".container");
        state_1.remove();
        myContainer.appendChild(state_2);
    }
};
