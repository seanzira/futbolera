//save button 1 for capturing a heading as well as a paragraph where the button is located
const button1 = document.querySelector("#save-button-1");
button1.addEventListener("click", (e) => {
  let button1 = e.target.parentNode;
  let title = button1.querySelector("h2").innerText;
  let body = button1.querySelector("p").innerText;

  let savedItem1 = {
    title: title,
    body: body,
  };

  if (typeof Storage !== "undefined") {
    let savedText = JSON.parse(sessionStorage.getItem("savedText")) || [];
    savedText.push(savedItem1);
    sessionStorage.setItem("savedText", JSON.stringify(savedText));

    //function for the number within the alert that increments when each save-button is clicked.
    let storedCount = sessionStorage.getItem("storedCount");
    storedCount = parseInt(storedCount) || 0;
    storedCount++;

    sessionStorage.setItem("storedCount", storedCount);

    alert(
      "Item saved.\n" + "You have " + storedCount + " items saved for later."
    );

    displaySavedText();
  } else {
    alert(
      "Information has not been stored because the session storage is not supported"
    );
  }
});

//save button 4 for capturing the paragraph as well as the text within the hyperlink.
const button4 = document.querySelector("#save-button-4");
button4.addEventListener("click", (e) => {
  let button4 = e.target.parentNode;
  let title = button4.querySelector("p").innerText;
  let body = button4.querySelector("a").innerText;

  let savedItem4 = {
    title: title,
    body: body,
  };

  if (typeof Storage !== "undefined") {
    let savedText = JSON.parse(sessionStorage.getItem("savedText")) || [];
    savedText.push(savedItem4);
    sessionStorage.setItem("savedText", JSON.stringify(savedText));

    let storedCount = sessionStorage.getItem("storedCount");
    storedCount = parseInt(storedCount) || 0;
    storedCount++;

    sessionStorage.setItem("storedCount", storedCount);

    alert(
      "Item saved.\n" + "You have " + storedCount + " items saved for later."
    );

    displaySavedText();
  } else {
    alert(
      "Information has not been stored because the session storage is not supported"
    );
  }
});


//initialising the status of each item to be like
let likeStatus = {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
}

//initialising the like count of each item to be like
let likeCount = {
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
}

//function for liking and unliking items
function likeItem(itemId) {
    likeStatus[itemId] = !likeStatus[itemId];

    if (likeStatus[itemId]) {
        likeCount[itemId]++;
    } else {
        likeCount[itemId]--;
    }

    document.getElementById(itemId + "-like-count").textContent = likeCount[itemId];
}

function saveImage() {
  let imageUrl = document.getElementById("item-8").src;

  let savedItem3 = {
    title: imageUrl,
  };

  if (typeof Storage !== "undefined") {
    let saveImage = JSON.parse(sessionStorage.getItem("saveImage")) || [];
    saveImage.push(savedItem3);
    sessionStorage.setItem("saveImage", JSON.stringify(saveImage));

    let storedCount = sessionStorage.getItem("storedCount");
    storedCount = parseInt(storedCount) || 0;
    storedCount++;

    sessionStorage.setItem("storedCount", storedCount);

    alert(
      "Item saved.\n" + "You have " + storedCount + " items saved for later."
    );
  }
}
