//function for adding the stored information into the div element called "view-saved"
function displaySavedText() {
  let viewSaved = document.getElementById("view-saved");
  viewSaved.innerHTML = "";

  let savedText = JSON.parse(sessionStorage.getItem("savedText")) || [];
  savedText.forEach(function (savedItem1) {
    let createElement = document.createElement("div");
    createElement.innerHTML = `<p><strong>The title of the saved item:</strong>${savedItem1.title}</p>
            <p><strong>The body of the saved item:</strong>${savedItem1.body}</p>`;

    viewSaved.appendChild(createElement);
  });
}

//function for saving images for later
function displaySaveImage() {
  let savedImage = document.getElementById("saved-images");
  savedImage.innerHTML = "";

  let imageUrl = JSON.parse(sessionStorage.getItem("saveImage")) || [];
  imageUrl.forEach(function (imageUrl) {
    let createElement = document.createElement("div");
    createElement.innerHTML = `<p><strong>The title of the saved item:</strong>${imageUrl.title}`;

    savedImage.appendChild(createElement);
  });
}

window.onload = displaySavedText;
window.onload = displaySaveImage;