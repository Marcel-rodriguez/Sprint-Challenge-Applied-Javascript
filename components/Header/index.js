// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");
let dateText = document.querySelector(".date");
let h1Text = document.querySelector("h1");
let spanTempText = document.querySelector(".temp");

let header = document.createElement("div");
header.classList.add("header");

let spanDate = document.createElement("span");
spanDate.classList.add("date");
spanDate.textContent = "MARCH 28, 2019";

let title = document.createElement("h1");
title.textContent = "Lambda Times";

let spanTemp = document.createElement("span");
spanTemp.textContent = "98°";

header.appendChild(spanDate);
header.appendChild(title);
header.appendChild(spanTemp);

headerContainer.appendChild(header);

console.log(header);
