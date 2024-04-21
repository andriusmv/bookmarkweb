document.addEventListener("DOMContentLoaded", function () {
  fetch("bookmarks.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const bookmarksContainer = document.getElementById("bookmarks-container");
      data.bookmarks.forEach((bookmark) => {
        const bookmarkDiv = document.createElement("div");
        bookmarkDiv.innerHTML = `<h2>${bookmark.name}</h2><p>${bookmark.url}</p>`;
        bookmarksContainer.appendChild(bookmarkDiv);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
